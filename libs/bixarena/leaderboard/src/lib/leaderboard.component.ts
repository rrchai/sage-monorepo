import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';

interface LeaderboardEntry {
  rank: number;
  model: string;
  score: number;
  ci95: string;
  totalVotes: number;
  organization: string;
  license: string;
}

@Component({
  selector: 'bixarena-leaderboard',
  imports: [FormsModule, TableModule, InputTextModule, TagModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent {
  searchQuery = '';
  lastUpdated = 'March 13, 2026';

  // Mock data - will be replaced with API call
  leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      model: 'Kimi K2',
      score: 1245,
      ci95: '\u00b132',
      totalVotes: 412,
      organization: 'Moonshot AI',
      license: 'Apache 2.0',
    },
    {
      rank: 2,
      model: 'DeepSeek V3',
      score: 1198,
      ci95: '\u00b128',
      totalVotes: 389,
      organization: 'DeepSeek',
      license: 'MIT',
    },
    {
      rank: 3,
      model: 'Qwen3 235B',
      score: 1156,
      ci95: '\u00b135',
      totalVotes: 367,
      organization: 'Alibaba',
      license: 'Apache 2.0',
    },
    {
      rank: 4,
      model: 'Claude Sonnet 4',
      score: 1134,
      ci95: '\u00b130',
      totalVotes: 345,
      organization: 'Anthropic',
      license: 'Proprietary',
    },
    {
      rank: 5,
      model: 'GPT-4o',
      score: 1098,
      ci95: '\u00b127',
      totalVotes: 334,
      organization: 'OpenAI',
      license: 'Proprietary',
    },
    {
      rank: 6,
      model: 'Gemini 2.5 Pro',
      score: 1067,
      ci95: '\u00b133',
      totalVotes: 298,
      organization: 'Google',
      license: 'Proprietary',
    },
    {
      rank: 7,
      model: 'Llama 4 Maverick',
      score: 1023,
      ci95: '\u00b138',
      totalVotes: 276,
      organization: 'Meta',
      license: 'Llama 4',
    },
    {
      rank: 8,
      model: 'Mistral Large',
      score: 989,
      ci95: '\u00b141',
      totalVotes: 245,
      organization: 'Mistral AI',
      license: 'Apache 2.0',
    },
  ];

  get filteredData(): LeaderboardEntry[] {
    if (!this.searchQuery) return this.leaderboardData;
    const q = this.searchQuery.toLowerCase();
    return this.leaderboardData.filter(
      (e) => e.model.toLowerCase().includes(q) || e.organization.toLowerCase().includes(q),
    );
  }
}
