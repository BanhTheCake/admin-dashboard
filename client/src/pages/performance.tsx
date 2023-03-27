import Title from '@/components/globals/Title';
import DefaultLayout from '@/Layout/Default.layout';
import React, { useMemo } from 'react';
import { Box, useTheme, CircularProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetPerformanceQuery } from '@/store/api/customers.api';
import moment from 'moment';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';
import TableSkeleton from '@/components/Skeletons/Table.skeleton';

const id = '63701cc1f03239b7f700000e';

const PerformancePage = () => {
    const theme = useTheme();

    const { data, isLoading, isError } = useGetPerformanceQuery(
        { id },
        {
            skip: !Boolean(id),
        }
    );

    const transactions = useMemo(() => data?.data, [data]);

    const columns = useMemo<GridColDef[]>(() => {
        return [
            {
                field: 'transaction.id',
                headerName: 'ID',
                flex: 1,
                minWidth: 200,
                valueGetter(params) {
                    return params.row.transaction._id;
                },
            },
            {
                field: 'transaction.userId',
                headerName: 'UserId',
                flex: 1,
                minWidth: 200,
                valueGetter(params) {
                    return params.row.transaction.userId;
                },
            },
            {
                field: 'transaction.createdAt',
                headerName: 'Created At',
                flex: 1,
                minWidth: 150,
                valueGetter(params) {
                    return params.row.transaction.createdAt;
                },
                valueFormatter(params) {
                    return moment(params.value).format('DD-MM-yyyy HH:mm:ss');
                },
            },
            {
                field: 'transaction.products',
                headerName: '# Of Product',
                minWidth: 100,
                valueGetter(params) {
                    return params.row.transaction.products;
                },
                valueFormatter(params) {
                    return params.value.length;
                },
            },
            {
                field: 'transaction.cost',
                headerName: 'Cost',
                minWidth: 100,
                valueGetter(params) {
                    return params.row.transaction.cost;
                },
            },
        ] as GridColDef[];
    }, []);

    return (
        <DefaultLayout>
            <Title
                title="PERFORMANCE"
                subTitle="Track Your Affiliate Performance Here"
            />
            <Loading isLoading={isLoading} loading={<TableSkeleton />}>
                <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                    <Box
                        width={'100%'}
                        flex={1}
                        sx={{
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                bgcolor: theme.palette.background.alt,
                            },
                            '& .MuiDataGrid-columnHeaderTitle': {
                                textTransform: 'capitalize',
                            },
                            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb':
                                {
                                    bgcolor: theme.palette.primary[400],
                                    borderRadius: '2px',
                                },
                            '& .MuiDataGrid-virtualScroller::-webkit-scrollbar':
                                {
                                    width: '8px',
                                    height: '8px',
                                },
                        }}
                    >
                        {transactions && (
                            <DataGrid
                                getRowId={(row) => row.transaction._id}
                                columns={columns}
                                rows={transactions}
                                paginationMode="client"
                                pageSizeOptions={[10, 20, 30]}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 10,
                                            page: 0,
                                        },
                                    },
                                }}
                            />
                        )}
                    </Box>
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default PerformancePage;
