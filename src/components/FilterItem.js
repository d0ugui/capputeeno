import styled, { css } from 'styled-components';

export default styled.li`
  cursor: pointer;

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

  ${({ selected }) => css`
    position: ${selected && 'relative'};

    span {
      font-weight: ${({ selected }) => selected && 600};
      color: ${({ selected, theme }) => selected && theme.textSelected};

      &:after {
        width: ${({ selected }) => selected && '100%'};
      }
    }
  `}

  & + li {
    margin-left: 40px;
  }
`;
