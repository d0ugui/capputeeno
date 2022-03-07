import Image from 'next/image';

import imgTest from '../../assets/caneca.png';
import { Container, ItemInfo } from './styles';

export function Item() {
  return (
    <Container>
      <Image src={imgTest} />
      <ItemInfo>
        <p>Caneca de cerâmica rústica</p>
        <span>R$ 40,00</span>
      </ItemInfo>
    </Container>
  );
}
