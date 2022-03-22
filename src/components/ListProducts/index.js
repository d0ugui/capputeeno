import { Item } from '../Item';

import { Container } from './styles';

export function ListProducts({ products }) {
  return (
    <Container>
      {products?.map((product) => (
        <Item
          key={product.id}
          name={product.name}
          price={
             (product.price_in_cents / 100)
               .toLocaleString(
                 'pt-BR',
                 { style: 'currency', currency: 'BRL' },
               )
           }
          url={product.image_url}
          id={product.id}
          handleClick={product.id}
        />
      ))}
    </Container>
  );
}
