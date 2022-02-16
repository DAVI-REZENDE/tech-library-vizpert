import { useEffect, useState } from 'react';
import { Container, Icon } from './styles';

import AlphabeticIcon from '../../assets/filter_alphabetic.svg'
import SizesIcon from '../../assets/filter_sizes.svg'
import ColorsIcon from '../../assets/filter_colors.svg'

export function FilterButton({type, active, onClick}) {

  const [isButtonActive, setIsButtonActive] = useState(false)

  useEffect(() => {
    if(active === type) {
      setIsButtonActive(true)
    }else {
      setIsButtonActive(false)
    }
  }, [active])

  return (
    <Container 
      onClick={onClick}
      className={isButtonActive ? 'active' : ''} 
    >
      <Icon type={type}>
        <img src={type === 'alphabetic' ? AlphabeticIcon : type === 'sizes' ?  SizesIcon : ColorsIcon} />
      </Icon>
    </Container>
  );
};