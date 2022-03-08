import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../features/page.js';

import Button from '../Button';

import { Container, Content } from './styles';

export function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.page.value);

  return (
    <Container>
      {console.log(currentPage)}
      <Content>
        <Button type="submit">1</Button>
        <Button type="submit">2</Button>
        <Button type="submit">3</Button>
        <Button type="submit">4</Button>
        <Button type="submit">5</Button>
        <Button
          type="submit"
          onClick={() => dispatch(previousPage())}
        >
          &lt;
        </Button>
        <Button
          type="submit"
          onClick={() => dispatch(nextPage())}
        >
          &gt;
        </Button>
      </Content>
    </Container>
  );
}
