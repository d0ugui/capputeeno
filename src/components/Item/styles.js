import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;

  display: flex;
  flex-direction: column;

  span {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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
