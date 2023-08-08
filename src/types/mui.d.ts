import { ComponentsOverrides } from '@mui/material';

export interface CustomPalette {
  primary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  secondary: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  error: {
    main: string;
    light: string;
    contrastText: string;
  };
  warning: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  info: {
    main: string;
    light: string;
    dark: string;
    contrastText: string;
  };
  success: {
    main: string;
    dark: string;
    contrastText: string;
  };
  navyBlue: {
    main: string;
    dark: string;
    contrastText: string;
  };
  grey: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    700: string;
    900: string;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    customPalette: CustomPalette;
  }

  interface ThemeOptions {
    customPalette?: CustomPalette;
  }
}
