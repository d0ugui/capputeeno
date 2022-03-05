import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  margin-top: 34px;
`;

export const Filters = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;

  li {
    span {
      text-decoration: none;
      position: relative;
      text-transform: uppercase;
      font-size: 16px;
      color: ${({ theme }) => theme.textColor}
    }

    span:after {
      content: "";
      position: absolute;
      height: 4px;
      width: 0;
      background-color: ${({ theme }) => theme.sublime};
      left: 0;
      bottom: -5px;
      transition: 0.3s ease-in;
    }

    span:hover:after {
      width: 100%;
    }

    &:first-child {
      position: relative;

      span {
        font-weight: 600;
        color: ${({ theme }) => theme.textSelected};
      }
    }

    & + li {
      margin-left: 40px;
    }
  }
`;

export const Organized = styled.select`
  width: fit-content;
  margin-left: auto;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.textColor};
  background: transparent;
  outline: none;
  border: 0;

  li {
    border-radius: 4px;
    border: 2px solid red;
  }
`;
