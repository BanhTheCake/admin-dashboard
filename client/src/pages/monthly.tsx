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

const MonthlyPage = (props: Props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:600px)');

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
        const { monthlyData } = overall;
        monthlyData.forEach((item) => {
            const saleObj = {
                x: item.month,
                y: item.totalSales,
            };
            const unitObj = {
                x: item.month,
                y: item.totalUnits,
            };
            sales.data.push(saleObj);
            units.data.push(unitObj);
        });
        return [sales, units];
    }, [overall]);

    return (
        <DefaultLayout>
            <Title title="MONTHLY SALES" subTitle="Chart of monthly sales" />
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
                                        ? generateTickValue(lines[0].data, 5)
                                        : undefined,
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

export default MonthlyPage;
