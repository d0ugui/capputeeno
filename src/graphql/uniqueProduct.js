import { gql } from '@apollo/client';

export default gql`
  query AllProducts($id: ID!) {
    Product(id: $id) {
      name
      price_in_cents
      image_url
      category
      description
    }
  }
`;
