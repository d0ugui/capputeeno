//* Next
import Head from 'next/head';

//* Theme
import { ThemeProvider } from 'styled-components';

//* Context
import { ApolloProvider } from '@apollo/client';
import { StoreProvider } from '../src/context/storeContext';

//* GraphQL
import client from '../src/services/apollo';

//* Components
import { Header } from '../src/components/Header';

//* Styles
import themes from '../src/styles/themes/index';
import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>capputeeno</title>
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Projeto de desafio front end by Rocketseat"
        />
      </Head>

      <ApolloProvider client={client}>
        <StoreProvider>
          <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
          </ThemeProvider>
        </StoreProvider>
      </ApolloProvider>

    </>
  );
}

export default MyApp;
