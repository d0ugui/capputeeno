import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 0.3s all ease;

  overflow: hidden;
  border: none;
  border-radius: 8px 8px 4px 4px;

  img {
    border-radius: 8px 8px 0px 0px;
    transition: transform 0.3s;
    transform: scale(1.15);
  }

  &:hover, &:focus {
    transform: scale(1.03);
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1);
    }
  }
`;

export const ItemInfo = styled.div`
  background: ${({ theme }) => theme.white};

  display: flex;
  flex-direction: column;
  padding: 8px 12px;

  backdrop-filter: blur(20px);

  p {
    font-weight: 300;
    color: ${({ theme }) => theme.textSelected};
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.listItemSublime};
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.itemInfoPrice};
  }
`;
