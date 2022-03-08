import React from 'react';
import client from '../src/client/apollo';
import { allProducts } from '../src/graphql/products';

import { Navbar } from '../src/components/Navbar';
import { ListProducts } from '../src/components/ListProducts';
import { Pagination } from '../src/components/Pagination';



export default function Home({ data }) {
  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const { data } = await client.query({ query: allProducts });

  // Pass data to the page via props
  return { props: { data } }
}
