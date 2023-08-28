import { createTheme, colors } from '@mui/material';

import { CustomPalette } from '../types/mui';

const customPalette: CustomPalette = {
  primary: {
    main: '#75C2F6',
    light: '#DBE2EF',
    dark: '#1D5D9B',
    contrastText: '#fff',
  },
  secondary: {
    main: '#D7BBF5',
    light: '#EDE4FF',
    dark: '#A076F9',
    contrastText: '#fff',
  },
  error: {
    main: '#EF6262',
    light: '#F38181',
    contrastText: '#fff',
  },
  warning: {
    main: '#F4D160',
    light: '#FCE38A',
    dark: '#F3AA60',
    contrastText: '#fff',
  },
  info: {
    main: '#468B97',
    light: '#009688',
    dark: '#1D5B79',
    contrastText: '#fff',
  },
  success: {
    main: '#468B97',
    dark: '#1D5B79',
    contrastText: '#fff',
  },
  navyBlue: {
    main: '#3F72AF',
    dark: '#112D4E',
    contrastText: '#fff',
  },
  grey: {
    50: '#F9F7F7',
    100: colors.grey[100],
    200: colors.grey[200],
    300: colors.grey[300],
    400: '#D8D9DA',
    700: '#61677A',
    900: '#272829',
  },
};

const theme = createTheme({
  palette: {},
  customPalette,
});

export default theme;
