import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { allProductsCount } from '../src/features/page';

import client from '../src/client/apollo';
import { allProducts } from '../src/graphql/products';

import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';
import { Item } from '../src/components/Item';

import { ListProducts, Footer } from '../src/styles/home';

export default function Home({ data: { allProducts, _allProductsMeta }}) {
  const dispatch = useDispatch();
  const totalProd = _allProductsMeta.count;
  dispatch(allProductsCount({ total: totalProd }))

  const [products, setProducts] = useState(allProducts);
  const currentPage = useSelector((state) => state.page.currentPage);

  useEffect(() => {

  }, [currentPage])

  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts>
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              name={product.name}
              price={
                (product.price_in_cents / 100)
                .toLocaleString(
                  "pt-BR",
                  {style: 'currency', currency: 'BRL' }
                )
              }
              url={product.image_url}
            />
          )
        })}
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
  return { props: { data } }
}
