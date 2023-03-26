import { Controller, Get, Query, Param } from '@nestjs/common';
import { GetAllRequest } from '../dto/getAll.request';
import { CustomersService } from '../services/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private CustomersService: CustomersService) {}

  @Get('getAll')
  getAllCustomers(@Query() data: GetAllRequest) {
    return this.CustomersService.getAllCustomers(data);
  }

  @Get('geography')
  getGeography() {
    return this.CustomersService.getGeography();
  }

  @Get('admins')
  getAllAdmins() {
    return this.CustomersService.getAllAdmins();
  }

  @Get('performance/:id')
  getAllUserPerformance(@Param('id') id: string) {
    return this.CustomersService.getAllUserPerformance(id);
  }

  @Get('/dashboard')
  getDashboard() {
    return this.CustomersService.getDashboard();
  }
}
