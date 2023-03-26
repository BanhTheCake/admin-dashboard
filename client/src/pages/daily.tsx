import Title from '@/components/globals/Title';
import DefaultLayout from '@/Layout/Default.layout';
import React, { useState, useMemo } from 'react';
import {
    Box,
    Stack,
    useTheme,
    useMediaQuery,
    CircularProgress,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';
import { useGetOverallQuery } from '@/store/api/overall.api';
import { ResponsiveLine } from '@nivo/line';
import generateTickValue from '@/utils/helpers/generateTickValue';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';

type Line = {
    id: string;
    color: string;
    data: { x: string; y: number }[];
};
type Props = {};

const DailyPage = (props: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');

    const [startDate, setStartDate] = useState(moment('2021-02-01'));
    const [endDate, setEndDate] = useState(moment('2021-03-01'));

    const { data, isLoading, isError } = useGetOverallQuery();

    const overall = useMemo(() => data?.data, [data]);

    const lines = useMemo(() => {
        if (!overall) return null;
        const sales: Line = {
            id: 'TotalSales',
            color: theme.palette.secondary[200],
            data: [],
        };
        const units: Line = {
            id: 'TotalUnits',
            color: 'tomato',
            data: [],
        };
        const { dailyData } = overall;
        dailyData.forEach((item) => {
            const date = moment(item.date);
            if (!moment(date).isBetween(startDate, endDate)) return;
            const saleObj = {
                x: moment(date).format('DD-MM'),
                y: item.totalSales,
            };
            const unitObj = {
                x: moment(date).format('DD-MM'),
                y: item.totalUnits,
            };
            sales.data.push(saleObj);
            units.data.push(unitObj);
        });
        return [sales, units];
    }, [overall, startDate, endDate]);

    const onStartDate = (e: moment.Moment | null) => {
        if (!e) return;
        setStartDate(e);
    };

    const onEndDate = (e: moment.Moment | null) => {
        if (!e) return;
        setEndDate(e);
    };

    return (
        <DefaultLayout>
            <Title title="DAILY SALES" subTitle="Chart of daily sales" />
            <Stack width={'100%'} alignItems={'flex-end'}>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <Stack direction={'row'} spacing={2}>
                            <DatePicker
                                value={startDate}
                                minDate={moment('2021-02-01')}
                                maxDate={endDate}
                                onChange={onStartDate}
                                slotProps={{
                                    popper: {
                                        sx: {
                                            '& .MuiPaper-root': {
                                                marginTop: '10px',
                                            },
                                        },
                                    },
                                }}
                            />
                            <DatePicker
                                value={endDate}
                                minDate={startDate}
                                maxDate={moment('2021-12-31')}
                                onChange={onEndDate}
                                slotProps={{
                                    popper: {
                                        sx: {
                                            '& .MuiPaper-root': {
                                                marginTop: '10px',
                                            },
                                        },
                                    },
                                }}
                            />
                        </Stack>
                    </LocalizationProvider>
                </Box>
            </Stack>
            <Loading
                isLoading={isLoading}
                loading={
                    <Box sx={{ display: 'flex', height: '25vh' }}>
                        <CircularProgress sx={{ mt: 'auto', mx: 'auto' }} />
                    </Box>
                }
            >
                <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                    <Box width={'100%'} height={'75vh'} sx={{ mt: 2 }}>
                        {lines && (
                            <ResponsiveLine
                                theme={{
                                    axis: {
                                        domain: {
                                            line: {
                                                stroke: theme.palette
                                                    .secondary[200],
                                            },
                                        },
                                        ticks: {
                                            text: {
                                                fill: theme.palette
                                                    .secondary[200],
                                            },
                                        },
                                        legend: {
                                            text: {
                                                fill: theme.palette
                                                    .secondary[200],
                                            },
                                        },
                                    },
                                    legends: {
                                        text: {
                                            fontSize: 11,
                                            fill: theme.palette.secondary[200],
                                        },
                                    },
                                    tooltip: {
                                        container: {
                                            color: '#333333',
                                        },
                                    },
                                }}
                                data={lines}
                                margin={
                                    isMobile
                                        ? {
                                              top: 0,
                                              right: 20,
                                              bottom: 30,
                                              left: 40,
                                          }
                                        : {
                                              top: 30,
                                              right: 20,
                                              bottom: 50,
                                              left: 80,
                                          }
                                }
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    stacked: false,
                                    reverse: false,
                                }}
                                curve="natural"
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: 'Date of 2021',
                                    legendOffset: 36,
                                    legendPosition: 'middle',
                                    tickValues: isMobile
                                        ? generateTickValue(lines[0].data, 6)
                                        : generateTickValue(lines[0].data, 3),
                                }}
                                axisLeft={{
                                    tickSize: 5,
                                    tickPadding: 5,
                                    tickRotation: 0,
                                    legend: `Total Product For Years`,
                                    legendOffset: -65,
                                    legendPosition: 'middle',
                                }}
                                enableGridX={false}
                                enableGridY={false}
                                enablePoints={isMobile ? false : true}
                                pointSize={10}
                                pointColor={{ from: 'color', modifiers: [] }}
                                pointBorderWidth={2}
                                pointBorderColor={{
                                    from: 'serieColor',
                                    modifiers: [],
                                }}
                                pointLabelYOffset={-15}
                                areaBlendMode="screen"
                                areaOpacity={0}
                                enableCrosshair={false}
                                crosshairType="y"
                                useMesh={true}
                                legends={[
                                    {
                                        anchor: 'top-right',
                                        direction: 'column',
                                        justify: false,
                                        translateX: -10,
                                        translateY: 10,
                                        itemsSpacing: 0,
                                        itemDirection: 'left-to-right',
                                        itemWidth: 80,
                                        itemHeight: 20,
                                        itemOpacity: 0.75,
                                        symbolSize: 12,
                                        symbolShape: 'circle',
                                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                        effects: [
                                            {
                                                on: 'hover',
                                                style: {
                                                    itemBackground:
                                                        'rgba(0, 0, 0, .03)',
                                                    itemOpacity: 1,
                                                },
                                            },
                                        ],
                                    },
                                ]}
                            />
                        )}
                    </Box>
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default DailyPage;
