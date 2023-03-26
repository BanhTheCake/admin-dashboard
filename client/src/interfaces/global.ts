import { AnyAaaaRecord } from 'dns';

export type Product = {
    category: string;
    createdAt: string;
    description: string;
    name: string;
    price: string;
    rating: number;
    supply: number;
    updatedAt: string;
    __v: number;
    _id: string;
    productStats: ProductStat;
};

export type ProductStat = {
    createdAt: string;
    productId: string;
    updatedAt: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    __v: number;
    _id: string;
};

export type User = {
    _id: string;
    email: string;
    name: string;
    city: string;
    state: any;
    country: string;
    occupation: string;
    phoneNumber: string;
    role: string;
    transactions: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
};

export type Transaction = {
    _id: string;
    cost: string;
    products: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
    userId: string;
};

export type Overall = {
    _id: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    year: number;
    monthlyData: {
        month: string;
        totalSales: number;
        totalUnits: number;
        _id: string;
    }[];
    dailyData: {
        date: string;
        totalSales: number;
        totalUnits: number;
        _id: string;
    }[];
    totalCustomers: number;
    salesByCategory: {
        [key: string]: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
};
