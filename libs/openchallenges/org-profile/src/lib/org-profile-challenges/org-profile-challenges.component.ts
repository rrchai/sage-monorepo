import { Component, Input } from '@angular/core';
import {
  Challenge,
  ChallengeSearchQuery,
  ChallengeService,
  Organization,
} from '@sagebionetworks/openchallenges/api-client-angular';
import { BehaviorSubject, switchMap } from 'rxjs';
import { assign } from 'lodash';

@Component({
  selector: 'openchallenges-org-profile-challenges',
  templateUrl: './org-profile-challenges.component.html',
  styleUrls: ['./org-profile-challenges.component.scss'],
})
export class OrgProfileChallengesComponent {
  @Input() organization!: Organization;
  challenges: Challenge[] = [];
  pageNumber = 0;
  pageSize = 12;
  totalChallengesCount = 0;

  private query: BehaviorSubject<ChallengeSearchQuery> =
    new BehaviorSubject<ChallengeSearchQuery>({});

  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    this.query
      .pipe(switchMap((query) => this.challengeService.listChallenges(query)))
      .subscribe((page) => {
        this.totalChallengesCount = page.totalElements;
        this.challenges = page.challenges;
      });
  }

  onPageChange(event: any) {
    const newQuery = assign(this.query.getValue(), {
      pageNumber: event.page,
      pageSize: event.rows,
    });
    this.query.next(newQuery);
  }
}
