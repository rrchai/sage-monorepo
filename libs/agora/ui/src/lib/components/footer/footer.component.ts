import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Dataversion, DataversionService } from '@sagebionetworks/agora/api-client-angular';
import { Observable } from 'rxjs';
import { SafeUrl } from '@angular/platform-browser';
import { PathSanitizer } from '@sagebionetworks/agora/util';
import { ConfigService } from '@sagebionetworks/agora/config';
import { NavigationLink } from '../../models/navigation-link';

@Component({
  selector: 'agora-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  configService = inject(ConfigService);
  dataVersionService = inject(DataversionService);
  sanitizer = inject(PathSanitizer);

  footerLogoPath!: SafeUrl;
  dataVersion$!: Observable<Dataversion>;

  navItems: Array<NavigationLink> = [
    {
      label: 'About',
      routerLink: ['about'],
    },
    {
      label: 'Help',
      url: 'https://help.adknowledgeportal.org/apd/Agora-Resources.2646671361.html',
      target: '_blank',
    },
    {
      label: 'Terms of Service',
      url: 'https://s3.amazonaws.com/static.synapse.org/governance/SageBionetworksSynapseTermsandConditionsofUse.pdf?v=5',
      target: '_blank',
    },
  ];

  constructor() {
    this.footerLogoPath = this.sanitizer.sanitize('/agora-assets/images/footer-logo.svg');
  }

  ngOnInit(): void {
    this.dataVersion$ = this.dataVersionService.getDataversion();
  }

  getSiteVersion() {
    return this.configService.config.appVersion;
  }

  getDataVersion(dataVersion: Dataversion) {
    return `${dataVersion.data_file}-${dataVersion.data_version}`;
  }
}