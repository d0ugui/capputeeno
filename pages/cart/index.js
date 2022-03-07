import Link from 'next/link';
import { GrUndo } from 'react-icons/gr';
import { CartItem } from '../../src/components/CartItem';
import { Container, YourCart, Itens, Resume, Details } from './styles';

export default function Cart() {
  return (
    <Container>
      <YourCart>
        <Link href="/">
          <span>
            <GrUndo size={18} />
            Voltar
          </span>
        </Link>
        <h1>Seu Carrinho</h1>
        <p>
          Total de (3 produtos) <strong> R$161,00</strong>
        </p>
        <Itens>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Itens>
      </YourCart>
      <Resume>
        <Details>
          <div>
            <h2>Resumo do pedido</h2>
            <p>Subtotal de produtos <span>R$ 161,00</span></p>
            <p>Entrega <span>R$ 40,00</span></p>
            <strong>Total <span>R$ 201,00</span></strong>

            <button type="button">Finalizar a compra</button>
          </div>
          <div>
            <ul>
              <li><Link href="/">Ajuda</Link></li>
              <li><Link href="/">Reembolsos</Link></li>
              <li><Link href="/">Entregas e frete</Link></li>
              <li><Link href="/">Trocas e devoluções</Link></li>
            </ul>
          </div>
        </Details>
      </Resume>
    </Container>
  );
}
