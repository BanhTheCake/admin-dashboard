import React, { useMemo, useState } from 'react';
import { Box, useMediaQuery, useTheme, CircularProgress } from '@mui/material';
import { useGetOverallQuery } from '@/store/api/overall.api';
import { ResponsiveLine } from '@nivo/line';
import generateTickValue from '@/utils/helpers/generateTickValue';
import ErrorDisplay from './ErrorDisplay';
import Loading from './Loading';

type Props = {
    view: 'units' | 'sales';
    isDashboard?: boolean;
};

const OverviewChart = ({ view, isDashboard = false }: Props) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const { data, isLoading, isError } = useGetOverallQuery();
    const theme = useTheme();
    const overall = useMemo(() => data?.data, [data]);

    const salesLines = {
        id: 'TotalSales',
        color: theme.palette.secondary[200],
    };

    const unitsLines = {
        id: 'TotalUnits',
        color: 'tomato',
    };

    const lines = useMemo(() => {
        if (!overall) return null;
        if (view === 'sales') {
            const salesData: { x: string; y: number }[] = [];
            const monthsData = overall.monthlyData;
            monthsData.forEach((item) => {
                const obj = {
                    x: item.month,
                    y: item.totalSales,
                };
                salesData.push(obj);
            });
            return {
                ...salesLines,
                data: salesData,
            };
        }
        if (view === 'units') {
            const unitsData: { x: string; y: number }[] = [];
            const monthsData = overall.monthlyData;
            monthsData.forEach((item) => {
                const obj = {
                    x: item.month,
                    y: item.totalUnits,
                };
                unitsData.push(obj);
            });
            return {
                ...unitsLines,
                data: unitsData,
            };
        }
        return null;
    }, [view, overall]);

    return (
        <Loading
            isLoading={isLoading}
            loading={
                <Box
                    sx={{
                        display: 'flex',
                        flex: 1,
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgress
                        sx={{ mx: 'auto', ...(!isDashboard ? { mt: 10 } : {}) }}
                    />
                </Box>
            }
        >
            <ErrorDisplay isError={isError} display={'Nothing here ...'}>
                <Box
                    width={'100%'}
                    height={isDashboard ? '100%' : '75vh'}
                    display={'flex'}
                >
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
                                            fill: theme.palette.secondary[200],
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fill: theme.palette.secondary[200],
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
                            data={[lines]}
                            margin={
                                isMobile
                                    ? {
                                          top: 50,
                                          right: 20,
                                          bottom: 50,
                                          left: 40,
                                      }
                                    : isDashboard
                                    ? {
                                          top: 20,
                                          right: 50,
                                          bottom: 50,
                                          left: 50,
                                      }
                                    : {
                                          top: 60,
                                          right: 20,
                                          bottom: 60,
                                          left: 80,
                                      }
                            }
                            xScale={{ type: 'point' }}
                            yScale={{
                                type: 'linear',
                                min: 'auto',
                                max: 'auto',
                                stacked: true,
                                reverse: false,
                            }}
                            enableArea={isDashboard ? true : false}
                            areaOpacity={0.1}
                            curve="natural"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: !isDashboard ? 'Month' : '',
                                legendOffset: 36,
                                legendPosition: 'middle',
                                format: (v) => (v as string).slice(0, 3),
                                tickValues: isMobile
                                    ? generateTickValue(lines.data, 3)
                                    : undefined,
                            }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                tickValues: 7,
                                legend: !isDashboard
                                    ? `Total ${
                                          view === 'sales' ? 'Sales' : 'Units'
                                      } For Years`
                                    : '',
                                legendOffset: -65,
                                legendPosition: 'middle',
                                format: (v) => `${Math.round(v / 1000)}K`,
                            }}
                            enableGridX={false}
                            enableGridY={false}
                            enablePoints={isMobile ? false : true}
                            pointSize={10}
                            pointColor={{ from: 'color' }}
                            pointBorderWidth={2}
                            pointBorderColor={{ from: 'serieColor' }}
                            pointLabelYOffset={-15}
                            areaBlendMode="screen"
                            enableCrosshair={false}
                            crosshairType="y"
                            useMesh={true}
                            legends={
                                isDashboard
                                    ? undefined
                                    : [
                                          {
                                              anchor: 'bottom-right',
                                              direction: 'column',
                                              justify: false,
                                              translateX: -10,
                                              translateY: -10,
                                              itemsSpacing: 0,
                                              itemDirection: 'left-to-right',
                                              itemWidth: 80,
                                              itemHeight: 20,
                                              itemOpacity: 0.75,
                                              symbolSize: 12,
                                              symbolShape: 'circle',
                                              symbolBorderColor:
                                                  'rgba(0, 0, 0, .5)',
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
                                      ]
                            }
                        />
                    )}
                </Box>
            </ErrorDisplay>
        </Loading>
    );
};

export default OverviewChart;
