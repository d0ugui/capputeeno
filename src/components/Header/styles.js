import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: #fff;
`;

export const Head = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Saira Stencil One';
    font-size: 40px;
    font-weight: 400;
    color: ${({ theme }) => theme.headerLogo}
  }

  @media (max-width: 1140px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  margin-left: auto;

  svg {
    margin-left: 24px;
    color: ${({ theme }) => theme.textColor}
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  margin: 19px 0;

  width: 352px;

  background: #F3F5F6;
  padding: 10px 16px;
  border-radius: 8px;

  input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
  }

  svg {
    cursor: pointer;
    margin: 0;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Shopping = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    width: 24px;
    height: 24px;
    color: #fff;
    padding: 6px;
    background-color: #DE3838;
    border-radius: 50%;

    font-weight: 500;

    position: absolute;
    bottom: 0;
    top: 15px;
    right: -10px;
  }
`;
