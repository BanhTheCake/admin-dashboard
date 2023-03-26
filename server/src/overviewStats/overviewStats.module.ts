import { Module } from '@nestjs/common';
import { OverallStatsController } from './controllers/overallStats.controller';
import { OverallStatsService } from './services/overallStats.service';

@Module({
  controllers: [OverallStatsController],
  providers: [OverallStatsService],
})
export class OverallStatsModule {}
