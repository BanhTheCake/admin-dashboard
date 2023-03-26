export declare const dataAffiliateStat: {
    _id: string;
    userId: string;
    affiliateSales: string[];
}[];
export declare const dataOverallStat: {
    totalCustomers: number;
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
    }[];
    salesByCategory: {
        shoes: number;
        clothing: number;
        accessories: number;
        misc: number;
    };
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}[];
export declare const dataProduct: {
    _id: string;
    name: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    supply: number;
}[];
export declare const dataProductStat: {
    _id: string;
    productId: string;
    yearlySalesTotal: number;
    yearlyTotalSoldUnits: number;
    monthlyData: {
        month: string;
        totalSales: number;
        totalUnits: number;
    }[];
    dailyData: {
        date: string;
        totalSales: number;
        totalUnits: number;
    }[];
}[];
export declare const dataTransaction: {
    _id: string;
    userId: string;
    cost: number;
    products: string[];
}[];
export declare const dataUser: {
    _id: string;
    name: string;
    email: string;
    password: string;
    city: string;
    state: string;
    country: string;
    occupation: string;
    phoneNumber: string;
    transactions: string[];
    role: string;
}[];
