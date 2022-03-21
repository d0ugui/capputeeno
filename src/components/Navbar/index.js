import { useState } from 'react';

import FilterItem from '../FilterItem';
import { Container, Filters, Organized } from './styles';

export function Navbar() {
  const [filters, setFilters] = useState([
    {
      name: 'Todos os produtos',
    },
    {
      name: 'Camisetas',
    },
    {
      name: 'Canecas',
    },
  ]);

  return (
    <Container>
      <Filters>
        {filters?.map((filter) => (
          <FilterItem>
            <span>
              {filter.name}
            </span>
          </FilterItem>
        ))}
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
