//* Hooks
import React, { createContext, useState } from 'react';

//* GraphQL
import client from '../services/apollo';
import getAllProducts from '../graphql/getAllProducts';
import getNextPageWithFilter from '../graphql/getNextPageWithFilter';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filtered, setFiltered] = useState('all');

  async function handleFilterProducts(category) {
    if (category === 'all') {
      //* Query
      const { data } = await client.query({
        query: getAllProducts, variables: { page: currentPage },
      });

      //* Total de páginas
      setTotalPages((Math.round(data._allProductsMeta.count / 12)));

      //* Setando produtos
      setProducts(data.allProducts);

      //* Zerando currentPage
      return setCurrentPage(0);
    }

    //* Query
    const { data } = await client.query({
      query: getNextPageWithFilter, variables: { page: currentPage, filterType: category },
    });

    //* Total de páginas
    setTotalPages((Math.round(data._allProductsMeta.count / 12)));

    //* Setando produtos
    setProducts(data.allProducts);

    //* Zerando currentPage
    return setCurrentPage(0);
  }

  async function handleChangeProductPage(pageNumber) {
    if (filtered === 'all') {
      const { data } = await client.query({
        query: getAllProducts, variables: { page: pageNumber },
      });

      setCurrentPage(pageNumber);
      return setProducts(data.allProducts);
    }

    const { data } = await client.query({
      query: getNextPageWithFilter, variables: { page: pageNumber, filterType: filtered },
    });

    setCurrentPage(pageNumber);
    return setProducts(data.allProducts);
  }

  return (
    <StoreContext.Provider value={{
      products,
      setProducts,
      currentPage,
      filtered,
      setFiltered,
      handleFilterProducts,
      handleChangeProductPage,
      totalPages,
      setTotalPages,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
}
