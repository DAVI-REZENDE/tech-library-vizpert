import { useState } from 'react';
import { Container, Icon } from './styles';

export function FilterButton({type}) {

  const [isActive, setIsActive] = useState(false)

  return (
    <Container 
      className={isActive ? 'active' : ''} 
      onClick={() => setIsActive(!isActive)}
    >
      <Icon type={type} />
    </Container>
  );
};