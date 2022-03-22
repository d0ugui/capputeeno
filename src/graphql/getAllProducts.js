import { gql } from '@apollo/client';

export default gql`
  query AllProducts($page: Int = 0){
    allProducts (page: $page, perPage: 12) {
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
