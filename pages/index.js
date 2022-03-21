//* Hooks
import React, { useState } from 'react';

//* GraphQL
import client from '../src/client/apollo';
import { allProducts } from '../src/graphql/products';
import nextPage from '../src/graphql/nextPage';
import productsFilter from '../src/graphql/productsFilter';

//* Components
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';
import { Item } from '../src/components/Item';

//* Styles
import { ListProducts, Footer } from '../src/styles/home';

export default function Home({ data: { allProducts, _allProductsMeta } }) {
  const [products, setProducts] = useState(allProducts);

  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts>
        {products.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            price={
                (product.price_in_cents / 100)
                  .toLocaleString(
                    'pt-BR',
                    { style: 'currency', currency: 'BRL' },
                  )
              }
            url={product.image_url}
            id={product.id}
            handleClick={product.id}
          />
        ))}
      </ListProducts>
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
