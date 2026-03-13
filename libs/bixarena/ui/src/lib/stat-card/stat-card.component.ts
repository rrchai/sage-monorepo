import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'bixarena-stat-card',
  imports: [DecimalPipe],
  template: `
    <div class="stat-card">
      <div class="stat-value">{{ value | number }}</div>
      <div class="stat-label">{{ label }}</div>
    </div>
  `,
  styles: `
    .stat-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
    }
    .stat-value {
      font-size: 3.5rem;
      font-weight: 600;
      color: var(--accent-teal);
    }
    .stat-label {
      color: var(--body-text-color-subdued);
    }
  `,
})
export class StatCardComponent {
  @Input() value = 0;
  @Input() label = '';
}
