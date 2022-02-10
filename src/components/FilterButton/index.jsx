import { useEffect, useState } from 'react';
import { Container, Icon } from './styles';

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
      <Icon type={type} />
    </Container>
  );
};