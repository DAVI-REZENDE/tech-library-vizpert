import { useState, useEffect } from 'react';

import { 
  Container,
  Header,
  Main,
  Shelfs,
  Filters,
  PanelFilters,
  FiltersWrapper,
  FilterButtons,
  Divider,
  OrganizeButton
} from './styles';

import ClockBase from '../../assets/clock_base.svg';
import Logo from '../../assets/logo.svg';
import ladyImage from '../../assets/lady.svg';

import { FilterButton } from '../../components/FilterButton';
import { Shelf } from '../../components/Shelf';

import { books } from '../../data/books';

export function Home() {

  const [isButtonFilterActive, setIsButtonFilterActive] = useState('')
  const [shelfTop, setShelfTop] = useState([])
  const [shelfBottom, setShelfBottom] = useState([])

  useEffect(() => {
    createBooksLists()
  }, [])

  function handleButtonFilterClick(type) {
    setIsButtonFilterActive(type)
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
 
  return (
    <Container>
      <Header>
        <img src={ClockBase} />

        <img src={Logo} />
      </Header>
      <Main>

        <Shelfs>

          <Shelf 
            position="top" 
            data={shelfTop}
          />

          <Shelf 
            position="bottom" 
            data={shelfBottom}
          />

        </Shelfs>

        <Filters>
          <img src={ladyImage} />
          <PanelFilters>
            <FiltersWrapper>
              <span>sort by</span>

              <FilterButtons>

                <FilterButton onClick={() => handleButtonFilterClick('alphabetic')} active={isButtonFilterActive} type="alphabetic" />
                <FilterButton onClick={() => handleButtonFilterClick('colors')} active={isButtonFilterActive} type="colors" />
                <FilterButton onClick={() => handleButtonFilterClick('sizes')} active={isButtonFilterActive} type="sizes" />

              </FilterButtons>

              <Divider />

              <OrganizeButton />
            </FiltersWrapper>
          </PanelFilters>
        </Filters>
      </Main>
    </Container>
  );
};