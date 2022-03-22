//* Hooks
import React, { useContext, useEffect } from 'react';

//* GraphQL
import client from '../src/services/apollo';
import getAllProducts from '../src/graphql/getAllProducts';

//* Components
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';
import { ListProducts } from '../src/components/ListProducts';
import { Footer } from '../src/components/Footer';

//* Context
import { StoreContext } from '../src/context/storeContext';

export default function Home({ data: { allProducts, _allProductsMeta } }) {
  const {
    products,
    setProducts,
    setTotalPages,
  } = useContext(StoreContext);

  useEffect(() => {
    setProducts(allProducts);
    setTotalPages(Math.round(_allProductsMeta.count / 12));
  }, []);

  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts products={products} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await client.query({ query: getAllProducts });

  // Pass data to the page via props
  return { props: { data } };
}
