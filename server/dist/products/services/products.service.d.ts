import { Model } from 'mongoose';
import { Products } from 'src/Model/interfaces/Products.interface';
export declare class ProductsService {
    private ProductModel;
    constructor(ProductModel: Model<Products>);
    getAllProducts(): Promise<{
        data: any[];
    }>;
}
