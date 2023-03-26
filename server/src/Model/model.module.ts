import { Module, Global } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { Connection } from 'mongoose';
import { OverallStatsSchema } from './entities/OverallStats.entity';
import { ProductStatsSchema } from './entities/ProductStat.entity';
import { ProductsSchema } from './entities/Products.entity';
import { UsersSchema } from './entities/Users.entity';
import { TransactionsSchema } from './entities/transactions.entity';
import { AffiliateStatsSchema } from './entities/AffiliateStats.entity';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: 'OVERALL_STATS',
      useFactory: (connection: Connection) =>
        connection.model('overallStats', OverallStatsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'PRODUCT_STATS',
      useFactory: (connection: Connection) =>
        connection.model('productStats', ProductStatsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'PRODUCTS',
      useFactory: (connection: Connection) =>
        connection.model('products', ProductsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'USERS',
      useFactory: (connection: Connection) =>
        connection.model('users', UsersSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'TRANSACTIONS',
      useFactory: (connection: Connection) =>
        connection.model('transactions', TransactionsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
    {
      provide: 'AFFILIATE_STATS',
      useFactory: (connection: Connection) =>
        connection.model('affiliateStats', AffiliateStatsSchema),
      inject: ['DATABASE_CONNECTION'],
    },
  ],
  exports: [
    'OVERALL_STATS',
    'PRODUCT_STATS',
    'PRODUCTS',
    'USERS',
    'TRANSACTIONS',
    'AFFILIATE_STATS',
  ],
})
export class ModelModule {}
