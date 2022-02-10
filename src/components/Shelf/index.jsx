import { useEffect } from 'react';
import { Container } from './styles';

export function Shelf({position, data}) {
  return (
    <Container position={position} >
      {data.map((book) => {
        return (
          <div className='book' key={book.id}>
            <img src={book.image} />
          </div>
        )
      })}
    </Container>
  );
};
