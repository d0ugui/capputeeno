import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import { Container, Content, Search } from './styles';

export function Header() {
  return (
    <Container>
      <h1>capputeeno</h1>
      <Content>
        <Search>
          <input placeholder="Procurando por algo específico?" />
          <FiSearch size={20} />
        </Search>
        <FiShoppingBag size={24} />
      </Content>
    </Container>
  );
}
