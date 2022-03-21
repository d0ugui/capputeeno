import React from 'react';
import Image from 'next/image';

import { IoTrashOutline } from 'react-icons/io5';

import {
  Container,
  ItemDetails,
  Title,
  Price,
} from './styles';

export function CartItem() {
  return (
    <Container>
      <Image src={imgTest} />
      <ItemDetails>
        <Title>
          <h2>Caneca de cerâmica rústica</h2>
          <IoTrashOutline size={22} />
        </Title>
        <p>
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </p>
        <Price>
          <select>
            <option value="valor1">1</option>
            <option value="valor2">2</option>
            <option value="valor3">3</option>
            <option value="valor4">4</option>
            <option value="valor5">5</option>
            <option value="valor6">6</option>
          </select>
          <strong>R$ 40,00</strong>
        </Price>
      </ItemDetails>
    </Container>
  );
}
