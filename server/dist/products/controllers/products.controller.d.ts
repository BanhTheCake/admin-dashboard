import { ProductsService } from '../services/products.service';
export declare class ProductsController {
    private ProductsService;
    constructor(ProductsService: ProductsService);
    getAllProducts(): Promise<{
        data: any[];
    }>;
}
