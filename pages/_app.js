import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import client  from '../src/client/apollo';

import { Header } from '../src/components/Header';
import themes from '../src/styles/themes/index';

import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={themes.light}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
