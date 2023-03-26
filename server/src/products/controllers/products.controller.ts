import { Controller, Get } from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get('getAll')
  getAllProducts() {
    return this.ProductsService.getAllProducts();
  }
}
