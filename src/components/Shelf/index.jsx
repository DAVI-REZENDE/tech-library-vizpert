import { useEffect, useState } from 'react';
import { Container } from './styles';
import ShelfBg from '../../assets/bookcase.svg'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

export function Shelf({data}) {

  const [booksTop, setBooksTop] = useState([])
  const [booksBottom, setBooksBottom] = useState([])

  useEffect(() => {
    setBooksTop(data.listTop)
    setBooksBottom(data.listBottom)
  }, [data])

  function changeAllLists(listTop, listBottom) {
    setBooksTop(listTop)
    setBooksBottom(listBottom)
    data.updateListTop(listTop)
    data.updateListBottom(listBottom)
  }

  function handleOnDragEnd({source, destination}) {
    if(!destination) return;

    if(source.droppableId !== destination.droppableId) {
      const currentRowOne = Array.from(booksTop)
      const currentRowTwo = Array.from(booksBottom)
      
      if(source.droppableId === 'top') {
        const [removed] = currentRowOne.splice(source.index, 1)
        currentRowTwo.splice(destination.index, 0, removed)
        changeAllLists(currentRowOne, currentRowTwo)
      } else {
        const [removed] = currentRowTwo.splice(source.index, 1)
        currentRowOne.splice(destination.index, 0, removed)
        changeAllLists(currentRowOne, currentRowTwo)
      }
    } else {
      if(source.droppableId === 'top') {
        const items = Array.from(booksTop)
        const [reorderedItems] = items.splice(source.index, 1)
        items.splice(destination.index, 0, reorderedItems)

        setBooksTop(items)
        data.updateListTop(items)
      } else {
        const items = Array.from(booksBottom)
        const [reorderedItems] = items.splice(source.index, 1)
        items.splice(destination.index, 0, reorderedItems)

        setBooksBottom(items)
        data.updateListBottom(items)
      }
      
    }
    
  }

  return (
    <Container>
      <img src={ShelfBg} className='bg-shelf' />

      <DragDropContext onDragEnd={handleOnDragEnd} >

          <div className="shelf">
            <Droppable droppableId='top' direction='horizontal' >
              {provided => (
                <div 
                  className="row-top"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {booksTop?.map((book, index) => {
                    return (
                      <Draggable
                        key={book.id}
                        draggableId={book.id}
                        index={index}
                      >
                        {provided => (
                          <div 
                            className='book'
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <img src={book.image} />
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId='bottom' direction='horizontal' >
              {provided => (
                <div 
                  className="row-bottom"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {booksBottom?.map((book, index) => {
                    return (
                      <Draggable
                        key={book.id}
                        draggableId={book.id}
                        index={index}
                      >
                        {provided => (
                          <div 
                            className='book'
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            <img src={book.image} />
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            

        </div>

      </DragDropContext>
    </Container>
  );
};
