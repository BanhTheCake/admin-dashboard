import DefaultLayout from '@/Layout/Default.layout';
import React, { useMemo } from 'react';
import {
    Box,
    Stack,
    useMediaQuery,
    CircularProgress,
    useTheme,
} from '@mui/material';
import Title from '@/components/globals/Title';
import { useGetOverallQuery } from '@/store/api/overall.api';
import Donuts from '@/components/globals/Donuts';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';
import { useAppSelector } from '@/store/store';
import BreakdownSkeleton from '@/components/Skeletons/Breakdown.skeleton';

const BreakdownPage = () => {
    const mode = useAppSelector((state) => state.mode.mode);
    const theme = useTheme();
    const { data, isLoading, isError } = useGetOverallQuery();
    const overall = useMemo(() => data?.data, [data]);
    const colors = useMemo(
        () => [theme.palette.secondary[200], theme.palette.secondary[400]],
        []
    );
    const pieData = useMemo(() => {
        if (!overall) return null;
        const salesByCategory = Object.entries(overall.salesByCategory).map(
            ([key, value], index) => {
                return {
                    id: key,
                    label: key,
                    value: value,
                    color: colors[index % colors.length],
                };
            }
        );
        return salesByCategory;
    }, [overall]);

    console.log(pieData);

    return (
        <DefaultLayout>
            <Title subTitle="Breakdown sales by category" title="BREAKDOWN" />
            <Loading isLoading={isLoading} loading={<BreakdownSkeleton />}>
                <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                    <Stack width={'100%'} height={'75vh'} position={'relative'}>
                        {pieData && <Donuts pieData={pieData} />}
                    </Stack>
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default BreakdownPage;
