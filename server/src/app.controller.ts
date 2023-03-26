import { Controller, Inject, Get } from '@nestjs/common';
import { Model } from 'mongoose';
import { AffiliateStats } from './Model/interfaces/AffiliateStats.interface';
import { OverallStats } from './Model/interfaces/OverallStats.interface';
import { Products } from './Model/interfaces/Products.interface';
import { ProductsStats } from './Model/interfaces/ProductStats.interface';
import { Transactions } from './Model/interfaces/Transactions.interface';
import { Users } from './Model/interfaces/Users.interface';

import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from './data/index';
import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';

@Controller('')
export class AppController {
  constructor(
    @Inject('OVERALL_STATS') private OverallStatModel: Model<OverallStats>,
    @Inject('PRODUCT_STATS') private ProductStatModel: Model<ProductsStats>,
    @Inject('PRODUCTS') private ProductModel: Model<Products>,
    @Inject('USERS') private UserModel: Model<Users>,
    @Inject('TRANSACTIONS') private TransactionModel: Model<Transactions>,
    @Inject('AFFILIATE_STATS')
    private AffiliateStatModel: Model<AffiliateStats>,
  ) {}

  @Get('insert')
  insertAllData() {
    this.AffiliateStatModel.insertMany(dataAffiliateStat);
    this.OverallStatModel.insertMany(dataOverallStat);
    this.ProductModel.insertMany(dataProduct);
    this.ProductStatModel.insertMany(dataProductStat);
    this.TransactionModel.insertMany(dataTransaction);
    this.UserModel.insertMany(dataUser);
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException('Something wrong with server !');
  }
}
