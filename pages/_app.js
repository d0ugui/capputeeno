import { ThemeProvider } from 'styled-components';

import { Header } from '../src/components/Header';

import themes from '../src/styles/themes/index';
import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
