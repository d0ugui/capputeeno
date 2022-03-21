//* Next
import Head from 'next/head';

//* Theme
import { ThemeProvider } from 'styled-components';

//* GraphQL
import { ApolloProvider } from '@apollo/client';
import client from '../src/client/apollo';

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
        <ThemeProvider theme={themes.light}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
