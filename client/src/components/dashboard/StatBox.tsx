import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';

type Props = {
    value: number | string,
    title: string,
    increments: string,
    icon: JSX.Element
};

const StatBox = ({ value, title, increments, icon }: Props) => {
    const theme = useTheme();

    return (
        <Box
            width={'100%'}
            p={2}
            borderRadius={'6px'}
            sx={{ bgcolor: theme.palette.background.alt }}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
        >
            <Stack
                direction={'row'}
                width={'100%'}
                spacing={2}
                mb={1}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography>{title}</Typography>
                {React.cloneElement(icon, {
                    sx: {
                        color: theme.palette.secondary[400],
                        fontSize: '26px',
                    }
                })}
            </Stack>
            <Typography
                mb={1.5}
                fontSize={'20px'}
                fontWeight={'bold'}
                color={theme.palette.secondary[200]}
            >
                {value}
            </Typography>
            <Stack
                direction={'row'}
                width={'100%'}
                spacing={2}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Typography
                    color={theme.palette.secondary[200]}
                    fontStyle={'italic'}
                >
                    {increments}
                </Typography>
                <Typography>Since last month</Typography>
            </Stack>
        </Box>
    );
};

export default StatBox;
