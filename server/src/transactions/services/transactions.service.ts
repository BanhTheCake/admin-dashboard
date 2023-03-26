import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Transactions } from 'src/Model/interfaces/Transactions.interface';
import { GetAllRequest, Sort } from '../dto/getAll.request';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject('TRANSACTIONS') private TransactionModel: Model<Transactions>,
  ) {}

  async getAllTransactions({
    page,
    pageSize,
    field,
    sort,
    search = '',
  }: GetAllRequest) {
    try {
      const generateSort = (field: string, sort: Sort) => {
        const fieldInput = field ?? 'createdAt';
        const sortInput = sort ?? 'desc';
        return { [fieldInput]: sortInput };
      };
      const transactions = await this.TransactionModel.find({
        $or: [
          { cost: { $regex: new RegExp(search, 'i') } },
          { userId: { $regex: new RegExp(search, 'i') } },
        ],
      })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort(generateSort(field, sort))
        .exec();
      const total = await this.TransactionModel.count({
        $or: [
          { cost: { $regex: new RegExp(search, 'i') } },
          { userId: { $regex: new RegExp(search, 'i') } },
        ],
      }).exec();
      return {
        data: {
          transactions,
          total,
        },
      };
    } catch (error) {
      console.log(error);
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }
}
