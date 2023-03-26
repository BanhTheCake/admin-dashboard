import { Controller, Get, Query } from '@nestjs/common';
import { GetAllRequest } from '../dto/getAll.request';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private TransactionsService: TransactionsService) {}

  @Get('getAll')
  getAllTransactions(@Query() data: GetAllRequest) {
    return this.TransactionsService.getAllTransactions(data);
  }
}
