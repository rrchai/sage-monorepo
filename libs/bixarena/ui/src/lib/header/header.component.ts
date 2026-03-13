import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'bixarena-header',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // TODO: Wire up real auth service
  isAuthenticated = false;

  login(): void {
    // TODO: redirect to auth login URL
    console.log('Login clicked');
  }

  logout(): void {
    // TODO: call auth logout endpoint
    console.log('Logout clicked');
  }
}
