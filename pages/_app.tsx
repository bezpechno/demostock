// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { PortfolioProvider } from '../lib/portfolioContext';
import { AuthProvider } from '../lib/authContext';
import '../styles/globals.css';

const theme = createTheme({
  // Настройка темы
});

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Удалить серверные CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <PortfolioProvider>
          <Component {...pageProps} />
        </PortfolioProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
