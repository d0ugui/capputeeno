import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 24px;

  margin-top: 32px;
`;
