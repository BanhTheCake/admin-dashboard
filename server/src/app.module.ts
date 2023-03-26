import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomersModule } from './customers/customers.module';
import { DatabaseModule } from './database/database.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { ModelModule } from './Model/model.module';
import { OverallStatsModule } from './overviewStats/overviewStats.module';
import { ProductsModule } from './products/products.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    DatabaseModule,
    ModelModule,
    ProductsModule,
    CustomersModule,
    TransactionsModule,
    OverallStatsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
