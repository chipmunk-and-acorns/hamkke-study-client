import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';

import theme from './styles/theme.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
