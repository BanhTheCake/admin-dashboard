import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { OverallStats } from 'src/Model/interfaces/OverallStats.interface';

@Injectable()
export class OverallStatsService {
  constructor(
    @Inject('OVERALL_STATS') private OverallStatModel: Model<OverallStats>,
  ) {}

  async getAllOverallStats() {
    try {
      const data = await this.OverallStatModel.find().exec();
      return {
        data: data[0],
      };
    } catch (error) {
      if (error.response) throw error;
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }
}
