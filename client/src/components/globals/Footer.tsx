import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();

    return (
        <Stack
            width={'100%'}
            direction={'row'}
            mt={2}
            p={2}
            justifyContent={'space-between'}
            alignContent={'center'}
            sx={{ bgcolor: theme.palette.primary[500] }}
        >
            <Typography variant="h6">BanhTheCake Love Youu</Typography>
            <Stack direction={'row'} spacing={1}>
                <Typography
                    variant="h6"
                    color={theme.palette.secondary[300]}
                    fontWeight="bold"
                >
                    Potato
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                    or
                </Typography>
                <Typography variant="h6" color={'tomato'} fontWeight="bold">
                    Tomato
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Footer;
