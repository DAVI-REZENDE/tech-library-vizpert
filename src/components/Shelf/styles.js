import styled, { css } from 'styled-components';

const styleShelfTop = css`
  margin-top: 12.3%;
  margin-left: 5%;
  /* height: 28%; */
  width: calc(100% - (10% + 20.5%)); // 20.5% da sombra da prateleira, e 10% dos lados
`;

const styleShelfBottom = css`
  margin-bottom: 7.9%;
  margin-left: 5%;
  /* height: 28%; */
  width: calc(100% - (10% + 20.5%)); // 20.5% da sombra da prateleira, e 10% dos lados
  justify-content: right;
`;

export const Container = styled.div`
  padding: 0 8px;
  display: flex;
  gap: 8px;

  ${({position}) => position === 'top' ? styleShelfTop : styleShelfBottom}

  div.book {
    height: 92%;
    width: 10%;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
