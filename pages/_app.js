import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';
import client  from '../src/client/apollo';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/features/cart';

import { Header } from '../src/components/Header';
import themes from '../src/styles/themes/index';

import GlobalStyles from '../src/styles/global';

function MyApp({ Component, pageProps }) {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    }
  })

  return (
    <Provider store={store}>
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
