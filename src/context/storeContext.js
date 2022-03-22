import React, { createContext, useState } from 'react';

import client from '../client/apollo';
import { allProducts } from '../graphql/products';
import nextPage from '../graphql/nextPage';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filtered, setFiltered] = useState('all');

  function getTotalPages(totalProducts) {
    setTotalPages(Math.round(totalProducts / 12));
  }

  async function handleFilterProducts(category) {
    if (category === 'all') {
      //* Query
      const { data } = await client.query({
        query: allProducts, variables: { page: currentPage },
      });

      //* Total de páginas
      getTotalPages(data._allProductsMeta.count);

      //* Setando produtos
      setProducts(data.allProducts);

      //* Zerando currentPage
      return setCurrentPage(0);
    }

    //* Query
    const { data } = await client.query({
      query: nextPage, variables: { page: currentPage, filterType: category },
    });

    //* Total de páginas
    getTotalPages(data._allProductsMeta.count);

    //* Setando produtos
    setProducts(data.allProducts);

    //* Zerando currentPage
    return setCurrentPage(0);
  }

  async function handleChangeProductPage(pageNumber) {
    if (filtered === 'all') {
      const { data } = await client.query({
        query: allProducts, variables: { page: pageNumber },
      });

      setCurrentPage(pageNumber);
      return setProducts(data.allProducts);
    }

    const { data } = await client.query({
      query: nextPage, variables: { page: pageNumber, filterType: filtered },
    });

    setCurrentPage(pageNumber);
    setProducts(data.allProducts);
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
      getTotalPages,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
}
