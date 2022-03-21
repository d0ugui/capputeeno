//* Next
import Head from 'next/head';

//* Theme
import { ThemeProvider } from 'styled-components';

//* Redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

//* GraphQL
import { ApolloProvider } from '@apollo/client';
import client from '../src/client/apollo';

//* Reducers
import cartReducer from '../src/features/cart';
import pageReducer from '../src/features/page';

//* Components
import { Header } from '../src/components/Header';

//* Styles
import themes from '../src/styles/themes/index';
import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      page: pageReducer,
    },
  });

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default MyApp;
