import Image from 'next/image';

import { Container, ItemInfo } from './styles';

export function Item({ name, price, url}) {
  return (
    <Container>
      <img src={url} />
      <ItemInfo>
        <p>{name}</p>
        <span>{price}</span>
      </ItemInfo>
    </Container>
  );
}
