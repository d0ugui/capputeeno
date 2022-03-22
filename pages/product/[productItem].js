//* Next
import Link from 'next/link';
import Image from 'next/image';

//* Icons
import { FiShoppingBag } from 'react-icons/fi';
import { GrUndo } from 'react-icons/gr';

//* GraphQL
import client from '../../src/services/apollo';
import uniqueProduct from '../../src/graphql/uniqueProduct';

import { Container, Content, ProductDetails } from './styles';

export default function Product({ data }) {
  return (
    <Container>
      <Link href="/">
        <span>
          <GrUndo size={18} />
          Voltar
        </span>
      </Link>
      <Content>
        <Image src={data.Product.image_url} width={640} height={580} />
        <ProductDetails>
          <span>{data.Product.category}</span>
          <h1>{data.Product.name}</h1>
          <strong>
            {
              (data.Product.price_in_cents / 100).toLocaleString(
                'pt-BR',
                { style: 'currency', currency: 'BRL' },
              )
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
          <button
            type="button"
            onClick={() => console.log('Hello')}
          >
            <FiShoppingBag />
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </Content>
    </Container>
  );
}

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: uniqueProduct, variables: { id: params.productItem },
  });

  return {
    props: {
      data,
    },
  };
}
