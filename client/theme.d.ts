import { Theme, ThemeOptions } from '@mui/material/styles';

type colorGrey = {
    0: string;
    10: string;
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
};
type colorPrimary = {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};
type colorSecondary = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
};

declare module '@mui/material/styles' {
    interface CustomTheme extends Theme {
        palette: {
            primary: colorPrimary & {
                main: string;
                light: string;
            };
            secondary: colorSecondary & {
                main: string;
            };
            neutral: colorGrey & {
                main: string;
            };
            background: {
                default: string;
                alt: string;
            };
        };
    }
    // allow configuration using `createTheme`
    interface CustomThemeOptions extends ThemeOptions {
        palette: {
            primary?: Partial<colorPrimary> & {
                main?: string;
                light?: string;
            };
            secondary?: Partial<colorSecondary> & {
                main?: string;
            };
            neutral?: Partial<colorGrey> & {
                main: string;
            };
            background?: {
                default?: string;
                alt?: string;
            };
        };
    }
    export function createTheme(options?: CustomThemeOptions): CustomTheme;
    export function useTheme(): CustomTheme;
}
