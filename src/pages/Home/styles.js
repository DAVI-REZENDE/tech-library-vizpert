import styled from 'styled-components';
import BgStripes from '../../assets/bg_stripes.svg'
import BgFooter from '../../assets/ground.svg'


export const Container = styled.div`
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100vw;
  height: 50vh;
  background: url(${BgStripes});

  padding: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (min-width: 550px) {
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 100px;
    @media (min-width: 550px) {
      width: 15%;
    }

    &.clock {
      display: none;
      @media (min-width: 550px) {
        display: block;
      }
    }
  }
`;

export const Main = styled.main`
  width: 100vw;
  height: 50vh;
  background: url(${BgFooter});
  display: flex;
  justify-content: center;
  position: relative;
`;

export const Filters = styled.div`
  position: absolute;
  left: 16px;
  width: 90%;
  height: 100%;

  display: flex;
  align-items: flex-end;

  @media (min-width: 425px) {
    max-width: 325px;
  }

  @media (min-width: 820px) { 
    max-width: 450px;
  }

  @media (min-width: 1325px) {
    max-width: 550px;
  }

  img#lady {
    position: absolute;
    width: 60%;
    margin-top: -3%;
    bottom: 0;
    z-index: 100;
  }
`;

export const PanelFilters = styled.div`
  width: 100%;
  height: 80%;

  position: relative;

  left: 24px;
  z-index: 10;

  display: flex;
  align-items: flex-end;

  img#panel {
    position: relative;
    width: 95%;
    margin-bottom: 10%;
    bottom: 0;
  }
`;

export const FiltersWrapper = styled.div`
  position: absolute;
  right: 10%;
  bottom: 15%;

  width: 50%;
  padding: 16px;

  @media (min-width: 820px) { 
    bottom: 25%;
    width: 40%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #C3B6D3;
    font-size: 12px;
    font-family: 'Zilla Slab', serif;
    text-transform: uppercase;
    letter-spacing: 8px;
    @media (min-width: 820px) {
      font-size: 16px;
    }
  }
`;

export const FilterButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  margin-top: 8px;
`;

export const Divider = styled.div`
  width: 80%;
  height: 5px;
  @media (max-width: 946px) {
    height: 2px;
  }
  background-color: #E7DFEF;

  margin: 5% 0;
`;

export const OrganizeButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;

`;