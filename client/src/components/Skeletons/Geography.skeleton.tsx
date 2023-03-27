import React from 'react';
import { Box, Skeleton } from '@mui/material';

const GeographySkeleton = () => {
    return (
        <Box width={'100%'}>
            <Skeleton variant="rounded" width={'100%'} height={'75vh'} />
        </Box>
    );
};

export default GeographySkeleton;
