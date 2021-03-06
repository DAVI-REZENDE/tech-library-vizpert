import { useState, useEffect } from 'react';

import { 
  Container,
  Header,
  Main,
  Filters,
  PanelFilters,
  FiltersWrapper,
  FilterButtons,
  Divider,
  OrganizeButton
} from './styles';

import Logo from '../../assets/logo.svg';
import ladyImage from '../../assets/lady.svg'
import Panel from '../../assets/board.svg';
import ButtonBg from '../../assets/button.svg'

import { FilterButton } from '../../components/FilterButton';
import { Shelf } from '../../components/Shelf';

import { books } from '../../data/books';
import { useFilters } from '../../hooks/useFilters';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import Clock from '../../components/Clock';

export function Home() {

  const [isButtonFilterActive, setIsButtonFilterActive] = useState('')
  const [shelfTop, setShelfTop] = useState([])
  const [applyFilter, setApplyFilter] = useState('')
  const [shelfBottom, setShelfBottom] = useState([])
  
  useFilters(applyFilter, {
    listTop: shelfTop,
    listBottom: shelfBottom,
    updateTop: setShelfTop,
    updateBottom: setShelfBottom,
    updateFilter: setApplyFilter
  })

  useEffect(() => {
    createBooksLists()
  }, [])

  function handleButtonFilterClick(type) {
    if(type === isButtonFilterActive) {
      setIsButtonFilterActive('')
    } else {
      setIsButtonFilterActive(type)
    }
  }

  function createBooksLists() {
    const randomList = shuffleArray(books)
    const splitLists = dividerArray(randomList, 5)
    const listOne = splitLists[0]
    const listTwo = splitLists[1]
    setShelfTop(listOne)
    setShelfBottom(listTwo)
  }

  function shuffleArray(arr) {
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com as posições aleatorias
    return arr;
  }

  function dividerArray(itens, max) {
    return itens.reduce((accumulator, item, index) => {
      const group = Math.floor(index / max);
      accumulator[group] = [...(accumulator[group] || []), item];
      return accumulator;
    }, []);
  };

  function handleApplyFilter() {
    setApplyFilter(isButtonFilterActive)
  }
 
  return (
    <Container>
      <Header>
        {/* <img src={ClockBase} className='clock' /> */}
        <Clock />

        <img src={Logo} className='logo' />
      </Header>
      <Main>

        
        <Shelf 
          data={{
            listTop: shelfTop,
            listBottom: shelfBottom,
            updateListTop: setShelfTop,
            updateListBottom: setShelfBottom
          }}
        />  

        <Filters>
          <img id="lady" src={ladyImage} />
          <PanelFilters>
            <img id="panel" src={Panel} />
            <FiltersWrapper>
              <span>sort by</span>

              <FilterButtons>

                <FilterButton onClick={() => handleButtonFilterClick('alphabetic')} active={isButtonFilterActive} type="alphabetic" />
                <FilterButton onClick={() => handleButtonFilterClick('colors')} active={isButtonFilterActive} type="colors" />
                <FilterButton onClick={() => handleButtonFilterClick('sizes')} active={isButtonFilterActive} type="sizes" />

              </FilterButtons>

              <Divider />

              <OrganizeButton onClick={handleApplyFilter}>
                <img src={ButtonBg} />
              </OrganizeButton>
            </FiltersWrapper>
          </PanelFilters>
        </Filters>

      </Main>
    </Container>
  );
};