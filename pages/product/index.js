import Image from 'next/image';
import Link from 'next/link';

import { FiShoppingBag } from 'react-icons/fi';
import { GrUndo } from 'react-icons/gr';
import imgTest from '../../src/assets/caneca.png';
import { Container, Content, ProductDetails } from './styles';

export default function product() {
  return (
    <Container>
      <Link href="/">
        <span>
          <GrUndo size={18} />
          Voltar
        </span>
      </Link>
      <Content>
        <Image src={imgTest} />
        <ProductDetails>
          <span>Caneca</span>
          <h1>Caneca de cerâmica rústica</h1>
          <strong>R$40,00</strong>

          <small>
            *Frete de R$40,00 para todo o Brasil.
            Grátis para compras acima de R$900,00.
          </small>

          <div>
            <h2>Descrição</h2>
            <p>
              Aqui vem um texto descritivo do produto,
              esta caixa de texto servirá apenas de exemplo para que simule
              algum texto que venha a ser inserido nesse campo, descrevendo tal
              produto.
            </p>
          </div>
          <button type="button">
            <FiShoppingBag />
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </Content>
    </Container>
  );
}
