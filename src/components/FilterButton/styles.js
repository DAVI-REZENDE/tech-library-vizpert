import styled from 'styled-components';
import Button from '../../assets/filter_button.svg'
import ButtonActive from '../../assets/filter_button_active.svg'

export const Container = styled.div`
  background: url(${Button}) no-repeat;

  &.active {
    background: url(${ButtonActive}) no-repeat;
    background-size: contain;
  }

  background-size: contain;
  width: 30px;
  height: 30px;

  @media (min-width: 820px) {
    width: 50px;
    height: 50px;
  }
  

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 80%;

  img {
    width: ${({type}) => type !== 'alphabetic' ? '40%' : '30%'};
  }
`;