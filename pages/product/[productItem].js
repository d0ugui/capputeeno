import Link from 'next/link';

import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../../src/features/cart';

import client from '../../src/client/apollo';
import uniqueProduct from '../../src/graphql/uniqueProduct';

import { FiShoppingBag } from 'react-icons/fi';
import { GrUndo } from 'react-icons/gr';
import { Container, Content, ProductDetails } from './styles';


export default function Product({ data }) {
  const dispatch = useDispatch();
  const actualData = useSelector((state) => state.cart.value);

  return (
    <Container>
      <Link href="/">
        <span>
          <GrUndo size={18} />
          Voltar
        </span>
      </Link>
      <Content>
        <img src={data.Product.image_url} />
        <ProductDetails>
          <span>{data.Product.category}</span>
          <h1>{data.Product.name}</h1>
          <strong>
            {
              (data.Product.price_in_cents / 100).toLocaleString("pt-BR",
                {style: 'currency', currency: 'BRL' })
            }
          </strong>

          <small>
            *Frete de R$40,00 para todo o Brasil.
            Grátis para compras acima de R$900,00.
          </small>

          <div>
            <h2>Descrição</h2>
            <p>
              {data.Product.description}
            </p>
          </div>
          <button type="button" onClick={() => {
            dispatch(addItem({
              product: {
                id: 1,
                name: 'douglas',
                qty: 1
              }
            }))
          }}>
            <FiShoppingBag />
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </Content>
    </Container>
  );
}


export async function getServerSideProps({ params }) {
  const { data } = await client.query({ query: uniqueProduct, variables: { id: params.productItem } });

  return {
    props: {
      data
    }
  }
}