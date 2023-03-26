import React from 'react';
import { Typography, Stack, useTheme } from '@mui/material';

type Props = {
    title: string;
    subTitle: string;
};

const Title = ({ title, subTitle }: Props) => {
    const theme = useTheme();

    return (
        <Stack spacing={0.5} mb={2}>
            <Typography
                variant="h2"
                fontWeight={'bold'}
                color={theme.palette.secondary[100]}
                textTransform={'uppercase'}
            >
                {title}
            </Typography>
            <Typography pl={0.5} variant="h5" color={theme.palette.secondary[300]}>
                {subTitle}
            </Typography>
        </Stack>
    );
};

export default Title;
