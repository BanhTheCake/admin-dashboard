import { ResponsivePie } from '@nivo/pie';
import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';

type Props = {
    pieData: {
        id: string;
        label: string;
        value: number;
        color: string;
    }[];
    isDashboard?: boolean;
};

const Donuts = ({ pieData, isDashboard = false }: Props) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -120%)',
                }}
                color={theme.palette.secondary[300]}
                fontSize={16}
            >
                Total: {`${pieData.reduce((rs, item) => rs + item.value, 0)}`}
            </Box>
            <ResponsivePie
                theme={{
                    labels: {
                        text: {
                            fill: theme.palette.secondary[400],
                            fontSize: '14px',
                            textTransform: 'capitalize',
                        },
                    },
                    tooltip: {
                        container: {
                            color: '#333333',
                            textTransform: 'capitalize',
                        },
                    },
                    legends: {
                        text: {
                            fontSize: '14px',
                            textTransform: 'capitalize',
                        },
                    },
                }}
                colors={{ datum: 'data.color' }}
                data={pieData}
                margin={
                    isDashboard
                        ? { top: 10, right: 10, bottom: 40, left: 10 }
                        : { top: 20, right: 10, bottom: 60, left: 10 }
                }
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: 'color',
                    modifiers: [['darker', 0.2]],
                }}
                enableArcLinkLabels={!isMobile && !isDashboard}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: 'color',
                    modifiers: [['darker', 2]],
                }}
                legends={
                    isDashboard
                        ? undefined
                        : [
                            {
                                anchor: isMobile ? 'bottom-left' : 'bottom',
                                direction: isMobile ? 'column' : 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 60,
                                itemsSpacing: 20,
                                itemWidth: 100,
                                itemHeight: 18,
                                itemTextColor: '#999',
                                itemDirection: 'left-to-right',
                                itemOpacity: 1,
                                symbolSize: 18,
                                symbolShape: 'circle',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemTextColor:
                                                theme.palette.secondary[400],
                                        },
                                    },
                                ],
                            },
                        ]
                }
            />
        </>
    );
};

export default Donuts;
