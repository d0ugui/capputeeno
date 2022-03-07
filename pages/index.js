import React from 'react';
import { ListProducts } from '../src/components/ListProducts';
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';

export default function Home() {
  return (
    <>
      <Navbar />
      <Pagination />
      <ListProducts />
    </>
  );
}
