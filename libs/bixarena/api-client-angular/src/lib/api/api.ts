export * from './admin.service';
import { AdminService } from './admin.service';
export * from './auth.service';
import { AuthService } from './auth.service';
export * from './battle.service';
import { BattleService } from './battle.service';
export * from './example-prompt.service';
import { ExamplePromptService } from './example-prompt.service';
export * from './leaderboard.service';
import { LeaderboardService } from './leaderboard.service';
export * from './model.service';
import { ModelService } from './model.service';
export * from './prompt-validation.service';
import { PromptValidationService } from './prompt-validation.service';
export * from './quest.service';
import { QuestService } from './quest.service';
export * from './stats.service';
import { StatsService } from './stats.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [
  AdminService,
  AuthService,
  BattleService,
  ExamplePromptService,
  LeaderboardService,
  ModelService,
  PromptValidationService,
  QuestService,
  StatsService,
  UserService,
];
