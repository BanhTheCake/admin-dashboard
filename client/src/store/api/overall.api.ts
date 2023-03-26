import { Overall, User } from '@/interfaces/global';
import { emptySplitApi } from '../createApi';

type getOverall = {
    request: void;
    response: Overall;
};

const extendedApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getOverall: build.query<
            { data: getOverall['response'] },
            getOverall['request']
        >({
            query: () => {
                return {
                    url: 'overallStats/getAll',
                    method: 'get',
                };
            },
        }),
    }),
    overrideExisting: true,
});

export const { useGetOverallQuery } = extendedApi;
