import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MockStreamingService } from './mock-streaming.service';
import { Subscription } from 'rxjs';

type BattlePhase = 'idle' | 'streaming' | 'vote-ready' | 'voted';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

@Component({
  selector: 'bixarena-battle',
  imports: [FormsModule, ButtonModule],
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
})
export class BattleComponent implements OnDestroy {
  private streamingService = inject(MockStreamingService);
  private subscriptions: Subscription[] = [];

  phase: BattlePhase = 'idle';
  promptText = '';
  lastPrompt = '';
  model1Name = 'Model 1';
  model2Name = 'Model 2';
  model1Messages: ChatMessage[] = [];
  model2Messages: ChatMessage[] = [];
  model1Streaming = false;
  model2Streaming = false;
  selectedVote: 'left' | 'tie' | 'right' | null = null;
  promptUseRemaining = 3;

  examplePrompts = [
    'What is the role of BRCA1 in cancer development?',
    'How does CRISPR-Cas9 gene editing work and what are its therapeutic applications?',
    "Explain the current understanding of Alzheimer's disease pathogenesis",
  ];

  submitPrompt(prompt?: string): void {
    const text = prompt || this.promptText.trim();
    if (!text || this.phase === 'streaming') return;

    this.promptText = '';
    this.lastPrompt = text;
    this.phase = 'streaming';
    this.model1Streaming = true;
    this.model2Streaming = true;

    const userMsg: ChatMessage = { role: 'user', content: text };
    this.model1Messages = [...this.model1Messages, userMsg, { role: 'assistant', content: '' }];
    this.model2Messages = [...this.model2Messages, userMsg, { role: 'assistant', content: '' }];

    let model1Done = false;
    let model2Done = false;

    const sub1 = this.streamingService.streamResponse(0).subscribe({
      next: (text) => {
        const msgs = [...this.model1Messages];
        msgs[msgs.length - 1] = { role: 'assistant', content: text };
        this.model1Messages = msgs;
      },
      complete: () => {
        this.model1Streaming = false;
        model1Done = true;
        if (model1Done && model2Done) this.phase = 'vote-ready';
      },
    });

    const sub2 = this.streamingService.streamResponse(1).subscribe({
      next: (text) => {
        const msgs = [...this.model2Messages];
        msgs[msgs.length - 1] = { role: 'assistant', content: text };
        this.model2Messages = msgs;
      },
      complete: () => {
        this.model2Streaming = false;
        model2Done = true;
        if (model1Done && model2Done) this.phase = 'vote-ready';
      },
    });

    this.subscriptions.push(sub1, sub2);
  }

  vote(choice: 'left' | 'tie' | 'right'): void {
    if (this.phase !== 'vote-ready') return;
    this.selectedVote = choice;
    this.phase = 'voted';
    this.model1Name = 'GPT-4o (Mock)';
    this.model2Name = 'Claude 3.5 Sonnet (Mock)';
    this.promptUseRemaining = Math.max(0, this.promptUseRemaining - 1);
  }

  newBattle(): void {
    this.cleanup();
    this.reset();
  }

  newBattleSamePrompt(): void {
    const prompt = this.lastPrompt;
    this.cleanup();
    this.reset();
    setTimeout(() => this.submitPrompt(prompt), 100);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.submitPrompt();
    }
  }

  isWinner(side: 'left' | 'right'): boolean {
    if (!this.selectedVote) return false;
    if (this.selectedVote === 'tie') return true;
    return this.selectedVote === side;
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  private reset(): void {
    this.phase = 'idle';
    this.promptText = '';
    this.model1Name = 'Model 1';
    this.model2Name = 'Model 2';
    this.model1Messages = [];
    this.model2Messages = [];
    this.model1Streaming = false;
    this.model2Streaming = false;
    this.selectedVote = null;
    this.promptUseRemaining = 3;
  }

  private cleanup(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = [];
  }
}
