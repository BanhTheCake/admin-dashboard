import { Overall, Product, Transaction, User } from '@/interfaces/global';
import { emptySplitApi } from '../createApi';

type getAllCustomers = {
    request: {
        page: number;
        pageSize: number;
        field?: string | null;
        sort?: string | null;
    };
    response: {
        users: User[];
        total: number;
    };
};

type getGeography = {
    request: void;
    response: {
        geography: {
            id: string;
            value: number;
        }[];
    };
};

type getAdmins = {
    request: void;
    response: User[];
};

type getPerformance = {
    request: { id: string };
    response: (Pick<User, '_id'> & {
        transaction: Transaction;
    })[];
};

type getDashboard = {
    request: void;
    response: Pick<
        Overall,
        | 'totalCustomers'
        | 'yearlySalesTotal'
        | 'yearlyTotalSoldUnits'
        | 'monthlyData'
    > & {
        thisMonthStats: Overall['monthlyData'][0];
        salesByCategory: {
            [key: string]: number;
        };
        todayStats: Overall['dailyData'][0];
        transactions: Transaction[];
    };
};

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAllCustomers: build.query<
            { data: getAllCustomers['response'] },
            getAllCustomers['request']
        >({
            query: (data) => {
                const params = (
                    Object.keys(data) as Array<keyof typeof data>
                ).reduce((result, key) => {
                    if (!data[key]) return result;
                    return { ...result, [key]: data[key] };
                }, {} as Record<string, any>);

                return {
                    url: 'customers/getAll',
                    method: 'get',
                    params: { ...params, page: data.page + 1 },
                };
            },
        }),
        getGeography: build.query<
            { data: getGeography['response'] },
            getGeography['request']
        >({
            query: () => ({
                url: 'customers/geography',
                method: 'get',
            }),
        }),
        getAdmins: build.query<
            { data: getAdmins['response'] },
            getAdmins['request']
        >({
            query: () => ({
                url: 'customers/admins',
                method: 'get',
            }),
        }),
        getPerformance: build.query<
            { data: getPerformance['response'] },
            getPerformance['request']
        >({
            query: ({ id }) => ({
                url: `/customers/performance/${id}`,
                method: 'get',
            }),
        }),
        getDashboard: build.query<
            { data: getDashboard['response'] },
            getDashboard['request']
        >({
            query: () => {
                return {
                    url: `/customers/dashboard`,
                    method: 'get',
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const {
    useGetAllCustomersQuery,
    useGetGeographyQuery,
    useGetAdminsQuery,
    useGetPerformanceQuery,
    useGetDashboardQuery,
} = extendedApi;
