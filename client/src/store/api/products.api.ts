import { Product } from '@/interfaces/global';
import { emptySplitApi } from '../createApi';

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAllProducts: build.query<{ data: Product[] }, void>({
            query: () => ({
                url: 'products/getAll',
                method: 'Get',
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useGetAllProductsQuery } = extendedApi;
