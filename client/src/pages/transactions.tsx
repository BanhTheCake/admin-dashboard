import Title from '@/components/globals/Title';
import DefaultLayout from '@/Layout/Default.layout';
import React, { useState, useMemo } from 'react';
import {
    DataGrid,
    GridColDef,
    GridPaginationModel,
    GridToolbar,
} from '@mui/x-data-grid';
import { Box, useTheme, CircularProgress, Typography } from '@mui/material';
import { useGetAllTransactionsQuery } from '@/store/api/transactions.api';
import { Transaction } from '@/interfaces/global';
import CustomToolbar from '@/components/globals/CustomToolbar';
import debounce from 'lodash.debounce';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';

const TransactionsPage = () => {
    const theme = useTheme();

    const [pageState, setPageState] = useState({
        page: 0,
        pageSize: 10,
    });
    const [field, setField] = useState(null);
    const [sort, setSort] = useState(null);
    const [search, setSearch] = useState('');

    const { data, isLoading, isError, error } = useGetAllTransactionsQuery({
        page: pageState.page,
        pageSize: pageState.pageSize,
        field,
        sort,
        search,
    });

    const customers = useMemo(() => data?.data.transactions, [data]);
    const rowTotal = useMemo(() => data?.data.total, [data]);

    const columns: GridColDef<any, any>[] = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
            minWidth: 200,
        },
        {
            field: 'userId',
            headerName: 'User ID',
            minWidth: 200,
            flex: 1,
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            flex: 1,
            minWidth: 100,
            valueFormatter: ({ value }) => new Date(value).toLocaleDateString(),
        },
        {
            field: 'products',
            headerName: '# of products',
            flex: 1,
            minWidth: 150,
            valueFormatter: ({ value }) => value.length,
            sortComparator: (v1, v2) => {
                return Number(v1.length < v2.length);
            },
        },
        {
            field: 'cost',
            headerName: 'Price',
            valueFormatter: ({ value }) => `$${value}`,
            // flex: 0.5
        },
    ];

    const handlePagination = (data: GridPaginationModel) => {
        setPageState(data);
    };

    const debounceSetSearch = useMemo(() => {
        const func = (value: string) => {
            setSearch(value);
        };
        return debounce(func, 500);
    }, []);

    return (
        <DefaultLayout>
            <Title
                title="TRANSACTIONS"
                subTitle="Entire list of transactions"
            />
            <Loading
                isLoading={isLoading}
                loading={
                    <Box sx={{ display: 'flex', height: '25vh' }}>
                        <CircularProgress sx={{ mt: 'auto', mx: 'auto' }} />
                    </Box>
                }
            >
                <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                    <Box flex={1} width={'100%'} overflow={'auto'}>
                        <Box
                            height="100%"
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
                            {customers && (
                                <DataGrid
                                    loading={isLoading}
                                    columns={columns}
                                    rows={customers}
                                    rowCount={rowTotal}
                                    getRowId={(row) => row._id + row.userId}
                                    pageSizeOptions={[10, 25, 50]}
                                    paginationModel={pageState}
                                    paginationMode={'server'}
                                    disableColumnFilter
                                    onPaginationModelChange={handlePagination}
                                    slots={{
                                        toolbar: CustomToolbar,
                                    }}
                                    slotProps={{
                                        toolbar: { search, debounceSetSearch },
                                    }}
                                />
                            )}
                        </Box>
                    </Box>
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default TransactionsPage;
