import React, { useState } from 'react';
import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarDensitySelector,
    GridToolbarExport,
} from '@mui/x-data-grid';
import { Stack, useTheme, InputBase, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const CustomToolbar = ({
    search,
    debounceSetSearch,
}: {
    search: string;
    debounceSetSearch: (...args: any) => any;
}) => {
    const isMobile = useMediaQuery('(max-width:600px)')
    const [query, setQuery] = useState(search);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setQuery(e.target.value)
        debounceSetSearch(e.target.value)
    }

    const theme = useTheme();
    return (
        <GridToolbarContainer sx={{ p: 1, width: '100%' }}>
            <Stack
                direction={'row'}
                spacing={2}
                justifyContent="space-between"
                sx={{ width: '100%' }}
                alignItems="center"
            >
                <Stack
                    direction={'row'}
                    spacing={1}
                    sx={{ color: theme.palette.secondary[300] }}
                >
                    <GridToolbarColumnsButton color="inherit" size="medium" />
                    <GridToolbarDensitySelector color="inherit" size="medium" />
                    <GridToolbarExport color="inherit" size="medium" />
                </Stack>
                {!isMobile &&
                    <Stack>
                        <InputBase
                            size="medium"
                            placeholder="Search ..."
                            endAdornment={<SearchIcon />}
                            value={query}
                            sx={{
                                border: '1.5px solid transparent',
                                borderBottomColor: theme.palette.primary[200],
                                fontFamily: 'inherit',
                            }}
                            onChange={handleChange}
                        />
                    </Stack>
                }
            </Stack>
        </GridToolbarContainer>
    );
};

export default CustomToolbar;
