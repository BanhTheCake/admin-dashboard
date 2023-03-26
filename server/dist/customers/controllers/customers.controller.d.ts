/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { GetAllRequest } from '../dto/getAll.request';
import { CustomersService } from '../services/customers.service';
export declare class CustomersController {
    private CustomersService;
    constructor(CustomersService: CustomersService);
    getAllCustomers(data: GetAllRequest): Promise<{
        data: {
            users: (import("mongoose").Document<unknown, {}, import("../../Model/interfaces/Users.interface").Users> & Omit<import("../../Model/interfaces/Users.interface").Users & {
                _id: import("mongoose").Types.ObjectId;
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
        data: (import("mongoose").Document<unknown, {}, import("../../Model/interfaces/Users.interface").Users> & Omit<import("../../Model/interfaces/Users.interface").Users & {
            _id: import("mongoose").Types.ObjectId;
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
            transactions: (import("mongoose").Document<unknown, {}, import("../../Model/interfaces/Transactions.interface").Transactions> & Omit<import("../../Model/interfaces/Transactions.interface").Transactions & {
                _id: import("mongoose").Types.ObjectId;
            }, never>)[];
        };
    }>;
}
