import Link from 'next/link';
import Image from 'next/image';

import { Container, ItemInfo } from './styles';

export function Item({
  name, price, url, handleClick,
}) {
  return (
    <Link href={`/product/${handleClick}`}>
      <Container>
        <Image src={url} width={256} height={300} alt={name} />
        <ItemInfo>
          <p>{name}</p>
          <span>{price}</span>
        </ItemInfo>
      </Container>
    </Link>
  );
}
