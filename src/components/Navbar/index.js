import { useContext } from 'react';
import { StoreContext } from '../../context/storeContext';

import FilterItem from '../FilterItem';
import { Container, Filters, Organized } from './styles';

export function Navbar() {
  const { filtered, setFiltered, handleFilterProducts } = useContext(StoreContext);

  const filtersOptions = [
    {
      id: 1,
      name: 'Todos os produtos',
      category: ' ',
    },
    {
      id: 2,
      name: 'Camisetas',
      category: 't-shirts',
    },
    {
      id: 3,
      name: 'Canecas',
      category: 'mugs',
    },
  ];

  function handleFilterSelected(category) {
    setFiltered(category);
    handleFilterProducts(category);
  }

  return (
    <Container>
      <Filters>
        {filtersOptions?.map((filter) => (
          <FilterItem
            key={filter.id}
            selected={filter.category === filtered}
            onClick={() => handleFilterSelected(filter.category)}
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
