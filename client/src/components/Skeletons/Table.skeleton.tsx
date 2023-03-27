import React from 'react';
import { Stack, Skeleton } from '@mui/material';

const TableSkeleton = () => {
    return (
        <Stack flex={1} width={'100%'} spacing={2}>
            <Skeleton
                variant="rounded"
                width={'100%'}
                height={40}
                sx={{ flexShrink: 0 }}
            />
            <Skeleton variant="rounded" width={'100%'} sx={{ flex: 1 }} />
        </Stack>
    );
};

export default TableSkeleton;
