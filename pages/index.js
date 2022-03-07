import React from 'react';
import { Header } from '../src/components/Header';
import { ListProducts } from '../src/components/ListProducts';
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Pagination />
      <ListProducts />
    </>
  );
}
