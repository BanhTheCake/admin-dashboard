import React, { useEffect } from 'react';
import { Box, SxProps, useTheme } from '@mui/material';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import isFetchBaseQueryError from '@/utils/guardTypes/isFetchBaseQueryError';
import isSerializedError from '@/utils/guardTypes/isSerializedError';

type Props = {
    children: React.ReactNode;
    display: string | number | JSX.Element;
    isError: boolean;
    sx?: SxProps;
    error?: FetchBaseQueryError | SerializedError | undefined;
};

const ErrorDisplay = ({ children, display, isError, sx, error }: Props) => {
    const theme = useTheme();

    const generateError = () => {
        if (React.isValidElement(display)) {
            return display;
        }
        return (
            <Box
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    mt: 2,
                    fontSize: '26px',
                    color: theme.palette.primary.main,
                    ...sx,
                }}
            >
                {display}
            </Box>
        );
    };

    useEffect(() => {
        if (!error) return;
        if (isFetchBaseQueryError(error)) {
            console.log('FetchBaseQueryError: ', error);
        }
        if (isSerializedError(error)) {
            console.log('SerializedError: ', error);
        }
    }, [error]);

    return <>{isError ? generateError() : children}</>;
};

export default ErrorDisplay;
