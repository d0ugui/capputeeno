import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../features/page';

import FilterItem from '../FilterItem';
import { Container, Filters, Organized } from './styles';

export function Navbar() {
  const dispatch = useDispatch();

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

  const selectedFilter = useSelector((state) => state.page.filter);

  return (
    <Container>
      <Filters>
        {filters?.map((filter) => (
          <FilterItem
            selected={filter.name === selectedFilter}
            onClick={() => dispatch(setFilter({ filter: filter.name }))}
          >
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
