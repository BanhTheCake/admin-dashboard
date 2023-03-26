import { Model } from 'mongoose';
import { AffiliateStats } from './Model/interfaces/AffiliateStats.interface';
import { OverallStats } from './Model/interfaces/OverallStats.interface';
import { Products } from './Model/interfaces/Products.interface';
import { ProductsStats } from './Model/interfaces/ProductStats.interface';
import { Transactions } from './Model/interfaces/Transactions.interface';
import { Users } from './Model/interfaces/Users.interface';
export declare class AppController {
    private OverallStatModel;
    private ProductStatModel;
    private ProductModel;
    private UserModel;
    private TransactionModel;
    private AffiliateStatModel;
    constructor(OverallStatModel: Model<OverallStats>, ProductStatModel: Model<ProductsStats>, ProductModel: Model<Products>, UserModel: Model<Users>, TransactionModel: Model<Transactions>, AffiliateStatModel: Model<AffiliateStats>);
    insertAllData(): void;
    throwError(): void;
}
