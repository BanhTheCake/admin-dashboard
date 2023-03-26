import { Controller, Get } from '@nestjs/common';
import { OverallStatsService } from '../services/overallStats.service';

@Controller('overallStats')
export class OverallStatsController {
  constructor(private OverallStatsService: OverallStatsService) {}

  @Get('getAll')
  getAllOverallStats() {
    return this.OverallStatsService.getAllOverallStats();
  }
}
