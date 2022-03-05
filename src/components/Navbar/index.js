import { Container, Filters, Organized } from './styles';

export function Navbar() {
  return (
    <Container>
      <Filters>
        <li><span>Todos os produtos</span></li>
        <li><span>Camisetas</span></li>
        <li><span>Canecas</span></li>
      </Filters>
      <Organized>
        <option value="valor1">Novidades</option>
        <option value="valor2">Preço: Maior - menor</option>
        <option value="valor3">Preço: Menor - maior</option>
        <option value="valor4">Mais vendidos</option>
      </Organized>
    </Container>
  );
}
