import { gql } from '@apollo/client';

export const allProducts = gql`
  query AllProducts{
    allProducts (page: 1, perPage: 12) {
      id
      name
      price_in_cents
      image_url
    }

    _allProductsMeta {
      count
    }
  }
`;
