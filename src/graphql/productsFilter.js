import { gql } from '@apollo/client';

export const filteredProducts = gql`
  query AllProducts($filterType: String!) {
    allProducts (page: 1, perPage: 12, filter: { category: $filterType} ) {
      id
      name
      price_in_cents
      image_url
    }

    _allProductsMeta(filter: { category: $filterType}) {
      count
    }
  }

`;
