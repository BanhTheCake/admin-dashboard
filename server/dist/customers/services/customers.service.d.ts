import mongoose, { Model } from 'mongoose';
import { Users } from 'src/Model/interfaces/Users.interface';
import { GetAllRequest } from '../dto/getAll.request';
import { AffiliateStats } from 'src/Model/interfaces/AffiliateStats.interface';
import { Transactions } from 'src/Model/interfaces/Transactions.interface';
import { OverallStats } from 'src/Model/interfaces/OverallStats.interface';
export declare class CustomersService {
    private UserModel;
    private AffiliateStatModel;
    private TransactionModel;
    private OverallStatModel;
    constructor(UserModel: Model<Users>, AffiliateStatModel: Model<AffiliateStats>, TransactionModel: Model<Transactions>, OverallStatModel: Model<OverallStats>);
    getAllCustomers({ page, pageSize, field, sort }: GetAllRequest): Promise<{
        data: {
            users: (mongoose.Document<unknown, {}, Users> & Omit<Users & {
                _id: mongoose.Types.ObjectId;
            }, never>)[];
            total: number;
        };
    }>;
    getGeography(): Promise<{
        data: {
            geography: any[];
        };
    }>;
    getAllAdmins(): Promise<{
        data: (mongoose.Document<unknown, {}, Users> & Omit<Users & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
    }>;
    getAllUserPerformance(id: string): Promise<{
        data: any[];
    }>;
    getDashboard(): Promise<{
        data: {
            totalCustomers: number;
            yearlyTotalSoldUnits: number;
            yearlySalesTotal: number;
            monthlyData: {
                month: string;
                totalSales: number;
                totalUnits: number;
            }[];
            salesByCategory: {
                [key: string]: number;
            };
            thisMonthStats: {
                month: string;
                totalSales: number;
                totalUnits: number;
            };
            todayStats: {
                date: string;
                totalSales: number;
                totalUnits: number;
            };
            transactions: (mongoose.Document<unknown, {}, Transactions> & Omit<Transactions & {
                _id: mongoose.Types.ObjectId;
            }, never>)[];
        };
    }>;
}
