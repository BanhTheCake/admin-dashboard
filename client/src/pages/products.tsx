import Title from '@/components/globals/Title';
import DefaultLayout from '@/Layout/Default.layout';
import { useGetAllProductsQuery } from '@/store/api/products.api';
import React, { useMemo } from 'react';
import { useTheme, CircularProgress, Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ProductItem from '@/components/Products/ProductItem';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';
import ProductsSkeleton from '@/components/Skeletons/Products.skeleton';

const ProductsPage = () => {
    const { data, isLoading, isError } = useGetAllProductsQuery();
    const products = useMemo(() => data?.data, [data]);

    const theme = useTheme();

    return (
        <DefaultLayout>
            <Title title="PRODUCTS" subTitle="See your list of products" />
            <Loading isLoading={isLoading} loading={<ProductsSkeleton />}>
                <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                    {products && products.length > 0 ? (
                        <Grid container columns={12} spacing={2}>
                            {products.map((product) => {
                                return (
                                    <Grid
                                        xs={12}
                                        md={6}
                                        lg={3}
                                        key={product._id}
                                    >
                                        <ProductItem item={product} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    ) : (
                        <></>
                    )}
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default ProductsPage;
