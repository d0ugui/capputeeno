import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  margin-top: 26px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.productReturn};

    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin-right: 8px;
      border: 1.5px solid #617480;
      border-radius: 50%;
      padding: 2px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 22px;

  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 32px;

  span {
    border-radius: 4px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 400;
  }

  h1 {
    margin-top: 12px;
    font-weight: 300;
  }

  strong {
    margin-top: 4px;
    font-weight: 600;
    font-size: 20px;
  }

  small {
    margin-top: 24px;
    font-size: 12px;
  }

  h2 {
    font-size: 16px;
    margin-top: 58px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${({ theme }) => theme.textColor};
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.textSelected};
  }

  button {
    margin-top: 232px;
    color: ${({ theme }) => theme.buttonPaginationSelected};
    background: ${({ theme }) => theme.buttonProduct};
    border: none;
    border-radius: 4px;
    padding: 10px 0;
    cursor: pointer;

    font-size: 16px;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;
