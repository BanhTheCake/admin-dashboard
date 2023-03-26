import React, { useMemo } from 'react';
import { Box, useTheme, CircularProgress } from '@mui/material';
import DefaultLayout from '@/Layout/Default.layout';
import Title from '@/components/globals/Title';
import { useGetAdminsQuery } from '@/store/api/customers.api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';

const AdminPage = () => {
    const theme = useTheme();
    const { data, isLoading, isError } = useGetAdminsQuery();
    const admins = useMemo(() => data?.data, [data]);

    const columns = useMemo<GridColDef[]>(() => {
        return [
            { field: '_id', headerName: 'ID', flex: 1, minWidth: 200 },
            { field: 'name', headerName: 'Name', minWidth: 100, flex: 0.5 },
            { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
            { field: 'phoneNumber', headerName: 'Phone Number', minWidth: 100 },
            { field: 'country', headerName: 'Country' },
            {
                field: 'occupation',
                headerName: 'Occupation',
                minWidth: 100,
                flex: 0.5,
            },
            { field: 'role', headerName: 'Role' },
        ] as GridColDef[];
    }, []);

    return (
        <DefaultLayout>
            <Title
                title="ADMIN"
                subTitle="Managing admins and list of admins"
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
                        {admins && (
                            <DataGrid
                                getRowId={(row) => row._id}
                                columns={columns}
                                rows={admins}
                                paginationMode="client"
                                pageSizeOptions={[10, 25, 50]}
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

export default AdminPage;
