import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

type TResponse<T> = {
    errCode: number;
    msg: string;
    data?: T;
};

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/`,
});

const baseQueryFinal: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error) {
        return result;
    }
    return result;
};

export const emptySplitApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryFinal,
    endpoints: () => ({}),
});
