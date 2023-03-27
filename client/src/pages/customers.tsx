import Title from '@/components/globals/Title';
import DefaultLayout from '@/Layout/Default.layout';
import React, { useState, useMemo } from 'react';
import { useDemoData } from '@mui/x-data-grid-generator';
import {
    DataGrid,
    GridColDef,
    GridPaginationModel,
    GridToolbar,
} from '@mui/x-data-grid';
import { Box, useTheme, CircularProgress, Typography } from '@mui/material';
import { useGetAllCustomersQuery } from '@/store/api/customers.api';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';
import TableSkeleton from '@/components/Skeletons/Table.skeleton';

const CustomersPage = () => {
    const theme = useTheme();

    const [pageState, setPageState] = useState({
        page: 0,
        pageSize: 10,
    });
    const [field, setField] = useState(null);
    const [sort, setSort] = useState(null);

    const { data, isLoading, isError, error } = useGetAllCustomersQuery({
        page: pageState.page,
        pageSize: pageState.pageSize,
        field,
        sort,
    });

    const customers = useMemo(() => data?.data.users, [data]);
    const rowTotal = useMemo(() => data?.data.total, [data]);

    const columns: GridColDef[] = [
        {
            field: '_id',
            headerName: 'ID',
            flex: 1,
            minWidth: 200,
        },
        {
            field: 'name',
            headerName: 'name',
        },
        {
            field: 'email',
            headerName: 'Email',
            minWidth: 200,
            flex: 1,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone number',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'country',
            headerName: 'Country',
            // flex: 0.5
        },
        {
            field: 'occupation',
            headerName: 'Occupation',
            flex: 1,
            minWidth: 150,
        },
        {
            field: 'role',
            headerName: 'Role',
        },
    ];

    const handlePagination = (data: GridPaginationModel) => {
        setPageState(data);
    };

    return (
        <DefaultLayout>
            <Title title="CUSTOMERS" subTitle="List of Customers" />
            <Loading isLoading={isLoading} loading={<TableSkeleton />}>
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
                                    columns={columns}
                                    rows={customers}
                                    rowCount={rowTotal}
                                    getRowId={(row) => row._id}
                                    paginationModel={pageState}
                                    pageSizeOptions={[10, 25, 50]}
                                    paginationMode={'server'}
                                    disableColumnFilter
                                    onPaginationModelChange={handlePagination}
                                />
                            )}
                        </Box>
                    </Box>
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default CustomersPage;
