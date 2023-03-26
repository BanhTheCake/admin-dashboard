import { Transaction } from '@/interfaces/global';
import { emptySplitApi } from '../createApi';

type GetAllTransactions = {
    request: {
        page: number;
        pageSize: number;
        field?: string | null;
        sort?: string | null;
        search: string;
    };
    response: {
        transactions: Transaction[];
        total: number;
    };
};

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        GetAllTransactions: build.query<
            { data: GetAllTransactions['response'] },
            GetAllTransactions['request']
        >({
            query: (data) => {
                const params = (
                    Object.keys(data) as Array<keyof typeof data>
                ).reduce((result, key) => {
                    if (!data[key]) return result;
                    return { ...result, [key]: data[key] };
                }, {} as Record<string, any>);

                return {
                    url: 'transactions/getAll',
                    method: 'get',
                    params: { ...params, page: data.page + 1 },
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllTransactionsQuery } = extendedApi;
