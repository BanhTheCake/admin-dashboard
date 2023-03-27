import React from 'react';
import { Skeleton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const ProductsSkeleton = () => {
    return (
        <Grid container columns={12} spacing={2}>
            {Array(8)
                .fill(0)
                .map((_, i) => {
                    return (
                        <Grid xs={12} md={6} lg={3} key={i}>
                            <Skeleton
                                variant="rounded"
                                width={'100%'}
                                height={250}
                            />
                        </Grid>
                    );
                })}
        </Grid>
    );
};

export default ProductsSkeleton;
