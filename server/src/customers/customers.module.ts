import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
