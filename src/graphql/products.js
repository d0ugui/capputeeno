import { gql } from '@apollo/client';

export const allProducts = gql`
  query AllProducts{
    products {
      id
      name
      price
      images {
        url
      }
	  }
  }`;


