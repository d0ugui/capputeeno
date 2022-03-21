import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import {
  Container, Head, Content, Search, Shopping,
} from './styles';

export function Header() {
  return (
    <Container>
      <Head>
        <h1>capputeeno</h1>
        <Content>
          <Search>
            <input placeholder="Procurando por algo específico?" />
            <FiSearch size={16} />
          </Search>
          <Shopping>
            <FiShoppingBag size={22} />
            <span>0</span>
          </Shopping>
        </Content>
      </Head>
    </Container>
  );
}
