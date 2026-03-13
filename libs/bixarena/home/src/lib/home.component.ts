import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StatCardComponent } from '@sagebionetworks/bixarena/ui';

@Component({
  selector: 'bixarena-home',
  imports: [RouterLink, ButtonModule, StatCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Public stats (will be fetched from API later)
  stats = {
    modelsEvaluated: 12,
    totalBattles: 1847,
    totalUsers: 156,
  };
}
