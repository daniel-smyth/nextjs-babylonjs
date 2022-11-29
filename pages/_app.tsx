/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from 'utils/createEmotionCache';
import { ThemeProvider } from 'contexts/ThemeContext';
import useTheme from 'hooks/useTheme';
import createTheme from 'theme';

import 'vendor/jvectormap.css';
import 'vendor/perfect-scrollbar.css';

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

type Props<P = Record<string, unknown>> = AppProps<P> & {
  Component: Page<P>;
  emotionCache: EmotionCache;
  pageProps: any;
  initialState: unknown;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: Props) {
  const { theme } = useTheme();

  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | Tiger Spider"
          defaultTitle="Tiger Spider - Brisbane Metro Temperatures Dashboard"
        />
        <MuiThemeProvider theme={createTheme(theme)}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </MuiThemeProvider>
      </HelmetProvider>
    </CacheProvider>
  );
}

const withThemeProvider = (Component: any) => {
  function AppWithThemeProvider(props: JSX.IntrinsicAttributes) {
    return (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    );
  }
  AppWithThemeProvider.displayName = 'AppWithThemeProvider';
  return AppWithThemeProvider;
};

export default withThemeProvider(MyApp);
