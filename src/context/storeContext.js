import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  function productsPage(itensCount) {
    const productsPage = itensCount / 12;
    setTotalPages(productsPage);
  }

  return (
    <StoreContext.Provider value={{
      products,
      setProducts,
      currentPage,
      setCurrentPage,
      productsPage,
      totalPages,
    }}
    >
      {children}
    </StoreContext.Provider>
  );
}
