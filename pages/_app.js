import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';

import themes from '../src/styles/themes/index';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
