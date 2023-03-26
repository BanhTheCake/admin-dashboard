import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import DefaultLayout from "@/Layout/Default.layout";
import Title from "@/components/globals/Title";
import OverviewChart from "@/components/globals/OverviewChart";
import ErrorDisplay from "@/components/globals/ErrorDisplay";

type viewUnion = 'sales' | 'units'

const OverviewsPage = () => {
    const [view, setView] = useState<viewUnion>('units')
    const handleChange = (event: SelectChangeEvent) => {
        setView(event.target.value as viewUnion)
    };
    return <DefaultLayout>
        <Title subTitle="Overview of general revenue and profit" title="OVERVIEW" />
        <Box sx={{ maxWidth: '100px' }}>
            <FormControl fullWidth>
                <InputLabel id="view-select">View</InputLabel>
                <Select
                    labelId="view-select"
                    id="select"
                    value={view}
                    label="view"
                    onChange={handleChange}
                    size="small"
                >
                    <MenuItem value={'sales'}>Sales</MenuItem>
                    <MenuItem value={'units'}>Units</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box >
            <OverviewChart view={view} />
        </Box>
    </DefaultLayout>;
};

export default OverviewsPage;
