import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

const isFetchBaseQueryError = (
    error: FetchBaseQueryError | SerializedError | undefined
): error is FetchBaseQueryError => {
    return (error as FetchBaseQueryError).status !== undefined;
};

export default isFetchBaseQueryError;
