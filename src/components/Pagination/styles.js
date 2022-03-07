import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Content = styled.div`
  margin-top: 24px;

  button + button {
    margin-left: 4px;
  }
`;
