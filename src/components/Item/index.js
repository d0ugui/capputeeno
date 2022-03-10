import Link from 'next/link';

import { Container, ItemInfo } from './styles';

export function Item({ name, price, url, handleClick}) {
  return (
    <Link href={`/product/${handleClick}`}>
      <Container>
        <img src={url} />
        <ItemInfo>
          <p>{name}</p>
          <span>{price}</span>
        </ItemInfo>
      </Container>
    </Link>
  );
}
