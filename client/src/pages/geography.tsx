import DefaultLayout from '@/Layout/Default.layout';
import React, { useMemo } from 'react';
import {
    Box,
    useTheme,
    useMediaQuery,
    CircularProgress,
    Typography,
} from '@mui/material';
import Title from '@/components/globals/Title';
import { useGetGeographyQuery } from '@/store/api/customers.api';
import { ResponsiveChoropleth } from '@nivo/geo';
import genFeatures from '@/config/features.config';
import ErrorDisplay from '@/components/globals/ErrorDisplay';
import Loading from '@/components/globals/Loading';

const GeographyPage = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const { data, isLoading, isError } = useGetGeographyQuery();
    const geographyData = useMemo(() => data?.data.geography, [data]);
    return (
        <DefaultLayout>
            <Title
                title="GEOGRAPHY"
                subTitle="Find Where your users are located"
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
                    {geographyData && (
                        <Box
                            width={'100%'}
                            sx={{
                                border: '1px solid transparent',
                                borderColor: theme.palette.primary[200],
                                p: 1,
                            }}
                        >
                            <Box width={'100%'} height={'75vh'}>
                                <ResponsiveChoropleth
                                    theme={{
                                        tooltip: {
                                            container: {
                                                background: '#ffffff',
                                                color: 'black',
                                                fontSize: 12,
                                            },
                                        },
                                    }}
                                    features={genFeatures().features}
                                    data={geographyData}
                                    margin={{
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                    }}
                                    colors="nivo"
                                    domain={[0, 50]}
                                    unknownColor={'#bdc3c7'}
                                    valueFormat=".2s"
                                    projectionTranslation={[0.5, 0.7]}
                                    projectionRotation={[0, 0, 0]}
                                    projectionScale={isMobile ? 100 : 150}
                                    graticuleLineColor="#dddddd"
                                    borderWidth={0.5}
                                    borderColor="#152538"
                                    isInteractive={true}
                                    legends={[
                                        {
                                            anchor: 'bottom-left',
                                            direction: 'column',
                                            justify: false,
                                            translateX: 20,
                                            translateY: -20,
                                            itemsSpacing: 0,
                                            itemWidth: 94,
                                            itemHeight: 18,
                                            itemDirection: 'left-to-right',
                                            itemTextColor:
                                                theme.palette.secondary[200],
                                            itemOpacity: 0.85,
                                            symbolSize: 18,
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemTextColor:
                                                            theme.palette
                                                                .secondary[300],
                                                        itemOpacity: 1,
                                                    },
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Box>
                        </Box>
                    )}
                </ErrorDisplay>
            </Loading>
        </DefaultLayout>
    );
};

export default GeographyPage;
