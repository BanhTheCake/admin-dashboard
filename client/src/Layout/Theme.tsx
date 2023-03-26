import React, { useMemo } from "react";
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from "@/store/store";
import { getThemeColor } from "@/config/theme.config";


type Props = {
    children: React.ReactNode
};

const ThemeLayout = ({ children }: Props) => {
    const { mode } = useSelector<RootState>(state => state.mode) as RootState['mode']
    const theme = useMemo(() => createTheme(getThemeColor(mode)), [mode])

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
