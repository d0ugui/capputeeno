import React from 'react';
import { Header } from '../src/components/Header';
import { Navbar } from '../src/components/Navbar';
import { Pagination } from '../src/components/Pagination';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Pagination />
    </>
  );
}
