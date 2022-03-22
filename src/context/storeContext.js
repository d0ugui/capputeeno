import React, { createContext, useState } from 'react';

import client from '../client/apollo';
import { allProducts } from '../graphql/products';
import { filteredProducts } from '../graphql/productsFilter';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filtered, setFiltered] = useState(' ');

  function productsPage(itensCount) {
    const productsPage = itensCount / 12;
    setTotalPages(productsPage);
  }

  async function handleFilterProducts(category) {
    if (category === ' ') {
      const { data } = await client.query({ query: allProducts });
      return setProducts(data.allProducts);
    }

    const { data } = await client.query({
      query: filteredProducts, variables: { filterType: category },
    });

    return setProducts(data.allProducts);
  }

  return (
    <StoreContext.Provider value={{
      products,
      setProducts,
      currentPage,
      setCurrentPage,
      productsPage,
      totalPages,
      filtered,
      setFiltered,
      handleFilterProducts,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
}
