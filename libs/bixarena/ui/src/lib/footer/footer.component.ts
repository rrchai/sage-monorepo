import { Component } from '@angular/core';

@Component({
  selector: 'bixarena-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  // TODO: inject from ConfigService
  appVersion = '';
  sageBionetworksUrl = 'https://sagebionetworks.org';
  termsOfServiceUrl = '';
  contactUrl = '';
  feedbackUrl = '';
}
