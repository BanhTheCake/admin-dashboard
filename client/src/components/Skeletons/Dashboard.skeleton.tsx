import React from 'react';
import { Box, Skeleton, useMediaQuery } from '@mui/material';

const DashboardSkeleton = () => {
    const isNonMobile = useMediaQuery('(min-width:1250px)');

    return (
        <Box
            width={'100%'}
            flex={1}
            mt={2}
            display={'grid'}
            gridTemplateColumns={'repeat(12, 1fr)'}
            gridAutoRows={'160px'}
            gap={2}
        >
            <Box
                gridColumn={isNonMobile ? 'span 2' : 'span 12'}
                display={'flex'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 2' : 'span 12'}
                display={'flex'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 8' : 'span 12'}
                gridRow={'span 2'}
                display={'flex'}
                width={'100%'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 2' : 'span 12'}
                display={'flex'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 2' : 'span 12'}
                display={'flex'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 8' : 'span 12'}
                display={'flex'}
                gridRow={'span 3'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
            <Box
                gridColumn={isNonMobile ? 'span 4' : 'span 12'}
                display={'flex'}
                flexDirection={'column'}
                gridRow={'span 3'}
            >
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </Box>
        </Box>
    );
};

export default DashboardSkeleton;
