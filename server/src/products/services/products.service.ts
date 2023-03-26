import { BadRequestException } from '@nestjs/common/exceptions';
import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Products } from 'src/Model/interfaces/Products.interface';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCTS') private ProductModel: Model<Products>) {}

  async getAllProducts() {
    try {
      const data = await this.ProductModel.aggregate([
        {
          $lookup: {
            from: 'productstats',
            as: 'productStats',
            localField: '_id',
            foreignField: 'productId',
            //[$project]: Exclude specials fields
            pipeline: [{ $project: { monthlyData: 0, dailyData: 0 } }],
          },
        },
        //[$unwind] Extract array to object
        { $unwind: '$productStats' },
      ]).exec();
      return {
        data: data,
      };
    } catch (error) {
      if (error.response) {
        throw error;
      }
      throw new InternalServerErrorException('Something wrong with server !');
    }
  }
}
