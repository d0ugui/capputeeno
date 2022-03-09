import styled, { css } from 'styled-components';

export default styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  transition: 0.4s ease;

  ${({ selected, theme }) => css`
    border: ${selected ? `1px solid ${theme.sublime}` : 'none'};
    background: ${selected ? theme.buttonPaginationSelected : theme.buttonsPagination};
  `};

  &:hover {
    background: ${({ theme }) => theme.buttonPaginationSelected};
  }
`;
