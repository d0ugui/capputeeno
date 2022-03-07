import { Item } from '../Item';
import { Pagination } from '../Pagination';

import { Container, Footer } from './styles';

export function ListProducts() {
  return (
    <Container>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Footer>
        <Pagination />
      </Footer>
    </Container>
  );
}
