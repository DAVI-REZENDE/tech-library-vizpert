import styled from 'styled-components';
import Button from '../../assets/filter_button.svg'
import ButtonActive from '../../assets/filter_button_active.svg'
import AlphabeticIcon from '../../assets/filter_alphabetic.svg'
import SizesIcon from '../../assets/filter_sizes.svg'
import ColorsIcon from '../../assets/filter_colors.svg'

export const Container = styled.div`
  background: url(${Button}) no-repeat;

  &.active {
    background: url(${ButtonActive}) no-repeat;
    background-size: contain;
  }

  background-size: contain;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

export const Icon = styled.div`
  background: url(${({type}) => type === 'alphabetic' ? AlphabeticIcon : type === 'sizes' ?  SizesIcon : ColorsIcon}) no-repeat;
  background-position: center;
  width: 25px;
  height: 25px;
`;