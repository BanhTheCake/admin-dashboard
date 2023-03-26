import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

const isSerializedError = (
    error: FetchBaseQueryError | SerializedError | undefined
): error is SerializedError => {
    return (error as SerializedError).name !== undefined;
};

export default isSerializedError;
