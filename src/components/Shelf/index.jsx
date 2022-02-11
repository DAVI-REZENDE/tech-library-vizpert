import { useEffect, useState } from 'react';
import { Container } from './styles';

export function Shelf({position, data}) {

  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(data)
  }, [data])

  return (
    <Container position={position} >
      {books?.map((book) => {
        return (
          <div className='book' key={book.id}>
            <img src={book.image} />
          </div>
        )
      })}
    </Container>
  );
};
