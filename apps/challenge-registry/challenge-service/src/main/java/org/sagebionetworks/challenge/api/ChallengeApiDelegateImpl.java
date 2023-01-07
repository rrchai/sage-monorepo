package org.sagebionetworks.challenge.api;

import java.util.List;
import org.sagebionetworks.challenge.model.dto.ChallengeDifficultyDto;
import org.sagebionetworks.challenge.model.dto.ChallengeIncentiveDto;
import org.sagebionetworks.challenge.model.dto.ChallengeStatusDto;
import org.sagebionetworks.challenge.model.dto.ChallengeSubmissionTypeDto;
import org.sagebionetworks.challenge.model.dto.ChallengesPageDto;
import org.sagebionetworks.challenge.service.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ChallengeApiDelegateImpl implements ChallengeApiDelegate {

  @Autowired ChallengeService challengeService;

  @Override
  public ResponseEntity<ChallengesPageDto> listChallenges(
      Integer pageNumber,
      Integer pageSize,
      List<ChallengeStatusDto> status,
      List<String> platforms,
      List<ChallengeDifficultyDto> difficulties,
      List<ChallengeSubmissionTypeDto> submissionTypes,
      List<ChallengeIncentiveDto> incentives,
      String searchTerms) {
    return ResponseEntity.ok(
        challengeService.listChallenges(
            pageNumber,
            pageSize,
            status,
            platforms,
            difficulties,
            submissionTypes,
            incentives,
            searchTerms));
  }

  // @Override
  // public ResponseEntity<ChallengeDto> getChallenge(String challengeLogin) {
  //   return ResponseEntity.ok(challengeService.getChallenge(challengeLogin));
  // }
}
