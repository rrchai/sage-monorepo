import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@sagebionetworks/bixarena/ui';
import { FooterComponent } from '@sagebionetworks/bixarena/ui';

@Component({
  selector: 'bixarena-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BioArena';
}
