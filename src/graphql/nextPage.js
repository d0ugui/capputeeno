import { gql } from '@apollo/client';

export default gql`
  query getNextPage($page: Int = 0, $filterType: String){
    allProducts (page: $page, perPage: 12, filter: { category: $filterType}) {
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
