import Head from 'next/head';
import {
    Box,
    Stack,
    Button,
    useTheme,
    useMediaQuery,
    Typography,
    CircularProgress,
} from '@mui/material';
import DefaultLayout from '@/Layout/Default.layout';
import Title from '@/components/globals/Title';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StatBox from '@/components/dashboard/StatBox';
import { useGetDashboardQuery } from '@/store/api/customers.api';
import { useMemo } from 'react';
import AlbumIcon from '@mui/icons-material/Album';
import AssistantIcon from '@mui/icons-material/Assistant';
import AdbIcon from '@mui/icons-material/Adb';
import OverviewChart from '@/components/globals/OverviewChart';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';
import Donuts from '@/components/globals/Donuts';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';

export default function Home() {
    const isNonMobile = useMediaQuery('(min-width:1250px)');
    const isXSScreen = useMediaQuery('(max-width:500px)');
    const theme = useTheme();
    const { data, isLoading, isError, error } = useGetDashboardQuery(undefined);

    const dashboardData = useMemo(() => data?.data, [data]);

    const columns = useMemo<GridColDef[]>(() => {
        return [
            { field: '_id', headerName: 'ID', flex: 1, minWidth: 200 },
            { field: 'userId', headerName: 'UserId', flex: 1, minWidth: 200 },
            {
                field: 'createdAt',
                headerName: 'Created At',
                flex: 1,
                minWidth: 150,
                valueFormatter: (params) =>
                    moment(params.value).format('DD-MM-yyyy hh:mm:ss'),
            },
            {
                field: 'products',
                headerName: '# Of product',
                valueFormatter: (params) => {
                    return params.value.length || 0;
                },
            },
            { field: 'cost', headerName: 'Price', minWidth: 100 },
        ] as GridColDef[];
    }, [dashboardData]);

    const colors = [theme.palette.secondary[200], theme.palette.secondary[400]];

    const pieData = useMemo(() => {
        if (!dashboardData) return null;
        const salesByCategory = Object.entries(
            dashboardData.salesByCategory
        ).map(([key, value], index) => {
            return {
                id: key,
                label: key,
                value: value,
                color: colors[index % colors.length],
            };
        });
        return salesByCategory;
    }, [dashboardData]);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>
                <Stack
                    direction={isXSScreen ? 'column' : 'row'}
                    spacing={2}
                    alignItems={isXSScreen ? 'flex-start' : 'center'}
                    width={'100%'}
                    justifyContent={'space-between'}
                >
                    <Title
                        title="DASHBOARD"
                        subTitle="Welcome to your dashboard"
                    />
                    <Button
                        startIcon={<DownloadIcon />}
                        size={'large'}
                        sx={{
                            bgcolor: theme.palette.secondary[300],
                            '&:hover': {
                                bgcolor: theme.palette.secondary[200],
                            },
                            fontWeight: 'bold',
                        }}
                    >
                        Download reports
                    </Button>
                </Stack>
                <Loading
                    isLoading={isLoading}
                    loading={
                        <Box sx={{ display: 'flex', height: '25vh' }}>
                            <CircularProgress sx={{ mt: 'auto', mx: 'auto' }} />
                        </Box>
                    }
                >
                    <ErrorDisplay
                        display={'Nothing here ...'}
                        isError={isError}
                        error={error}
                    >
                        <>
                            {dashboardData && (
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
                                        gridColumn={
                                            isNonMobile ? 'span 2' : 'span 12'
                                        }
                                        display={'flex'}
                                    >
                                        <StatBox
                                            title="Total Customers"
                                            value={dashboardData.totalCustomers}
                                            increments={'+14%'}
                                            icon={<EmailIcon />}
                                        />
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 2' : 'span 12'
                                        }
                                        display={'flex'}
                                    >
                                        <StatBox
                                            title="Sales Today"
                                            value={
                                                dashboardData.yearlySalesTotal
                                            }
                                            increments={'+21%'}
                                            icon={<AlbumIcon />}
                                        />
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 8' : 'span 12'
                                        }
                                        gridRow={'span 2'}
                                        display={'flex'}
                                        width={'100%'}
                                        sx={{
                                            borderRadius: '6px',
                                            bgcolor:
                                                theme.palette.background.alt,
                                        }}
                                    >
                                        <OverviewChart
                                            view={'units'}
                                            isDashboard={true}
                                        />
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 2' : 'span 12'
                                        }
                                        display={'flex'}
                                    >
                                        <StatBox
                                            title="Monthly Sales"
                                            value={
                                                dashboardData.thisMonthStats
                                                    .totalSales
                                            }
                                            increments={'+5%'}
                                            icon={<AssistantIcon />}
                                        />
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 2' : 'span 12'
                                        }
                                        display={'flex'}
                                    >
                                        <StatBox
                                            title="Yearly Sales"
                                            value={
                                                dashboardData.yearlyTotalSoldUnits
                                            }
                                            increments={'+43%'}
                                            icon={<AdbIcon />}
                                        />
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 8' : 'span 12'
                                        }
                                        display={'flex'}
                                        gridRow={'span 3'}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                '& .MuiDataGrid-columnHeaders':
                                                    {
                                                        bgcolor:
                                                            theme.palette
                                                                .background.alt,
                                                    },
                                                '& .MuiDataGrid-columnHeaderTitle':
                                                    {
                                                        textTransform:
                                                            'capitalize',
                                                    },
                                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb':
                                                    {
                                                        bgcolor:
                                                            theme.palette
                                                                .primary[400],
                                                        borderRadius: '2px',
                                                    },
                                                '& .MuiDataGrid-virtualScroller::-webkit-scrollbar':
                                                    {
                                                        width: '8px',
                                                        height: '8px',
                                                    },
                                            }}
                                        >
                                            <DataGrid
                                                columns={columns}
                                                rows={
                                                    dashboardData.transactions
                                                }
                                                getRowId={(row) => row._id}
                                                paginationMode={'client'}
                                                pageSizeOptions={[10, 20, 30]}
                                                initialState={{
                                                    pagination: {
                                                        paginationModel: {
                                                            page: 0,
                                                            pageSize: 10,
                                                        },
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        gridColumn={
                                            isNonMobile ? 'span 4' : 'span 12'
                                        }
                                        display={'flex'}
                                        flexDirection={'column'}
                                        gridRow={'span 3'}
                                        justifyContent={'space-between'}
                                        sx={{
                                            p: 2,
                                            bgcolor:
                                                theme.palette.background.alt,
                                            borderRadius: '6px',
                                        }}
                                    >
                                        <Typography mb={1}>
                                            Sort by category
                                        </Typography>
                                        <Box
                                            width={'100%'}
                                            height={'80%'}
                                            position={'relative'}
                                        >
                                            <Donuts
                                                isDashboard={true}
                                                pieData={pieData!}
                                            />
                                        </Box>
                                        <Typography
                                            textTransform={'capitalize'}
                                            textAlign={'center'}
                                        >
                                            Breakdown of real states and
                                            information via category for revenue
                                            made for this year and sales
                                        </Typography>
                                    </Box>
                                </Box>
                            )}
                        </>
                    </ErrorDisplay>
                </Loading>
            </DefaultLayout>
        </>
    );
}