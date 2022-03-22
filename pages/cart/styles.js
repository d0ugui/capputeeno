import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 26px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
`;

export const YourCart = styled.div`
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

export const Itens = styled.div`
  margin-top: 23px;

  div + div {
    margin-top: 16px;
  }
`;

export const Resume = styled.div`
  background-color: ${({ theme }) => theme.white};

  max-height: 700px;
  height: 100%;
`;

export const Details = styled.div`
  padding: 16px 24px 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  h2 {
    margin-bottom: 29px;
  }

  p, strong {
    display: flex;
    justify-content: space-between;
  }

  p + p {
    margin-top: 12px;
  }

  strong {
    border-top: 1px solid ${({ theme }) => theme.listItemSublime};
    padding-top: 8px;
    margin-top: 24px;
  }

  button {
    text-transform: uppercase;
    padding: 12px;
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.buttonFinish};
    color: ${({ theme }) => theme.buttonPaginationSelected};
    margin-top: 40px;
    border-radius: 4px;
    cursor: pointer;
  }

  ul {
    list-style: none;

    li {
      a {
        text-decoration: underline;
        font-size: 14px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.textColor};
      }
    }
  }
`;
