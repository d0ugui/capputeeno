import Button from '../Button';
import { Container, Content } from './styles';

export function Pagination() {
  return (
    <Container>
      <Content>
        <Button type="submit" selected>1</Button>
        <Button type="submit">2</Button>
        <Button type="submit">3</Button>
        <Button type="submit">4</Button>
        <Button type="submit">5</Button>
        <Button type="submit">&lt;</Button>
        <Button type="submit">&gt;</Button>
      </Content>
    </Container>
  );
}
