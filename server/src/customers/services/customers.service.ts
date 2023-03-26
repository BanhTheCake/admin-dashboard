import { BadRequestException } from '@nestjs/common/exceptions';
import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import mongoose, { Model, Mongoose, ObjectId } from 'mongoose';
import { Users } from 'src/Model/interfaces/Users.interface';
import { GetAllRequest, Sort } from '../dto/getAll.request';
import * as getCountryISO3 from 'country-iso-2-to-3';
import { AffiliateStats } from 'src/Model/interfaces/AffiliateStats.interface';
import { UsersSchema } from 'src/Model/entities/Users.entity';
import { Transactions } from 'src/Model/interfaces/Transactions.interface';
import { OverallStats } from 'src/Model/interfaces/OverallStats.interface';

@Injectable()
export class CustomersService {
  constructor(
    @Inject('USERS') private UserModel: Model<Users>,
    @Inject('AFFILIATE_STATS')
    private AffiliateStatModel: Model<AffiliateStats>,
    @Inject('TRANSACTIONS') private TransactionModel: Model<Transactions>,
    @Inject('OVERALL_STATS') private OverallStatModel: Model<OverallStats>,
  ) {}

  async getAllCustomers({ page, pageSize, field, sort }: GetAllRequest) {
    try {
      const generateSort = (field: string, sort: Sort) => {
        const fieldInput = field ?? 'createdAt';
        const sortInput = sort ?? 'desc';
        return { [fieldInput]: sortInput };
      };
      const users = await this.UserModel.find({ role: 'user' })
        .select('-password')
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort(generateSort(field, sort))
        .exec();
      const totalUsers = await this.UserModel.count({ role: 'user' }).exec();
      return {
        data: {
          users,
          total: totalUsers,
        },
      };
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }

  async getGeography() {
    try {
      const users = await this.UserModel.find().sort({ country: 'asc' }).exec();
      const formatData = users.reduce((result, user) => {
        const twoToThreeCharacter = getCountryISO3(user.country);
        if (result[twoToThreeCharacter]) {
          const cnt = result[twoToThreeCharacter] + 1;
          return {
            ...result,
            [twoToThreeCharacter]: cnt,
          };
        }
        return { ...result, [twoToThreeCharacter]: 1 };
      }, {} as Record<string, number>);
      const geography = Object.entries(formatData).reduce(
        (result, [key, value]) => {
          return [...result, { id: key, value }];
        },
        [],
      );
      return {
        data: {
          geography,
        },
      };
    } catch (error) {
      console.log(error);
      if (error.response) throw error;
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }

  async getAllAdmins() {
    try {
      const admins = await this.UserModel.find({ role: 'admin' }).exec();
      return {
        data: admins,
      };
    } catch (error) {
      if (error.response) throw error;
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }

  async getAllUserPerformance(id: string) {
    try {
      // const users = await this.UserModel.findOne({
      //   _id: id,
      // })
      //   .populate({
      //     path: 'transactions',
      //     populate: {
      //       path: 'products',
      //     },
      //   })
      //   .exec();

      // const transactions = users.toObject({
      //   getters: true,
      // }).transactions as unknown as Transactions[];

      // if (transactions && transactions.length) {
      //   const flattenTransactions = transactions.reduce(
      //     (result, transaction) => {
      //       const { products, ...props } = transaction;
      //       const arr = products.map((product) => {
      //         return {
      //           ...props,
      //           product: product,
      //         };
      //       });
      //       return [...result, ...arr];
      //     },
      //     [],
      //   );
      //   return {
      //     data: flattenTransactions,
      //   };
      // }
      const users = await this.UserModel.aggregate([
        { $match: { _id: new mongoose.Types.ObjectId(id) } },
        {
          $lookup: {
            from: 'affiliatestats',
            as: 'affiliatestats',
            localField: '_id',
            foreignField: 'userId',
          },
        },
        { $unwind: '$affiliatestats' },
        {
          $lookup: {
            from: 'transactions',
            as: 'transaction',
            localField: 'affiliatestats.affiliateSales',
            foreignField: '_id',
          },
        },
        { $unwind: '$transaction' },
        { $project: { transaction: 1 } },
      ]).exec();

      return {
        data: users,
      };
    } catch (error) {
      console.log(error);
      if (error.response) throw error;
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }

  async getDashboard() {
    try {
      // hardcoded values
      const currentMonth = 'November';
      const currentYear = 2021;
      const currentDay = '2021-11-15';

      /* Recent Transactions */
      const transactions = await this.TransactionModel.find()
        .limit(50)
        .sort({ createdOn: -1 })
        .exec();

      /* Overall Stats */
      const overallStat = await this.OverallStatModel.find({
        year: currentYear,
      }).exec();

      const {
        totalCustomers,
        yearlyTotalSoldUnits,
        yearlySalesTotal,
        monthlyData,
        salesByCategory,
      } = overallStat[0];

      const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
        return month === currentMonth;
      });

      const todayStats = overallStat[0].dailyData.find(({ date }) => {
        return date === currentDay;
      });

      return {
        data: {
          totalCustomers,
          yearlyTotalSoldUnits,
          yearlySalesTotal,
          monthlyData,
          salesByCategory,
          thisMonthStats,
          todayStats,
          transactions,
        },
      };
    } catch (error) {
      console.log(error);
      if (error.response) throw error;
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }
}
