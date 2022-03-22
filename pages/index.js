//* Hooks
import React, { useContext, useEffect } from 'react';

//* GraphQL
import client from '../src/client/apollo';
import { allProducts } from '../src/graphql/products';

//* Components
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';
import { ListProducts } from '../src/components/ListProducts';

//* Context
import { StoreContext } from '../src/context/storeContext';

//* Styles
import { Footer } from '../src/styles/home';

export default function Home({ data: { allProducts, _allProductsMeta } }) {
  const {
    products,
    setProducts,
    getTotalPages,
  } = useContext(StoreContext);

  useEffect(() => {
    setProducts(allProducts);
    getTotalPages(_allProductsMeta.count);
  }, []);

  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts products={products} />
      <Footer>
        <Pagination />
      </Footer>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await client.query({ query: allProducts });

  // Pass data to the page via props
  return { props: { data } };
}
