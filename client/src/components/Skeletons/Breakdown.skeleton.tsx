import React from 'react';
import { Box, Skeleton, useMediaQuery } from '@mui/material';

const BreakdownSkeleton = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems="center"
            mt={2}
        >
            <Skeleton
                variant="circular"
                width={isMobile ? 250 : 350}
                height={isMobile ? 250 : 350}
                sx={{ mb: 4 }}
            />
            <Skeleton
                variant="rounded"
                width={'100%'}
                sx={{ maxWidth: '600px' }}
                height={40}
            />
        </Box>
    );
};

export default BreakdownSkeleton;
