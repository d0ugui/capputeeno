import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;


  span {
    max-height: 211px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
`;

export const ItemDetails = styled.div`
  background-color: ${({ theme }) => theme.white};

  padding: 16px 16px 24px 31px;

  p {
    font-size: 14px;
    width: 95%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 20px;
    font-weight: 300;
  }

  svg {
    color: #DE3838;
    cursor: pointer;
  }

  margin-bottom: 12px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;

  select {
    font-size: 16px;
    background-color: #F3F5F6;
    border-radius: 8px;
    padding: 4px 8px;
    color: ${({ theme }) => theme.textColor};
  }

  strong {
    font-weight: 600;
  }
`;
