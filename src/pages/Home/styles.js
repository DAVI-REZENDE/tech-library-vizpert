import styled from 'styled-components';
import BgStripes from '../../assets/bg_stripes.svg'
import BgFooter from '../../assets/ground.svg'
import ShelfBg from '../../assets/bookcase.svg'
import Panel from '../../assets/board.svg'
import ButtonBg from '../../assets/button.svg'

export const Container = styled.div`

`;

export const Header = styled.header`
  width: 100vw;
  height: 50vh;
  background: url(${BgStripes});

  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
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

export const Shelfs = styled.div`
  background: url(${ShelfBg}) no-repeat;
  background-position: contain;
  width: 40vw;
  height: 50vh;

  margin-top: -16%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Filters = styled.div`
  position: absolute;
  left: 16px;
  width: 40vw;
  height: 50vh;

  img {
    height: 53vh;
    margin-top: -3vh;
    z-index: 100;
    position: absolute;
  }
`;

export const PanelFilters = styled.div`
  background: url(${Panel}) no-repeat;
  background-size: contain;
  background-position: bottom;
  width: 40vw;
  height: 40vh;

  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 10;
`;

export const FiltersWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 24px;

  width: 20vw;
  height: 30vh;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #C3B6D3;
    font-size: 16px;
    font-family: 'Zilla Slab', serif;
    text-transform: uppercase;
    letter-spacing: 8px;
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
  background-color: #E7DFEF;

  margin: 16px 0;
`;

export const OrganizeButton = styled.button`
  background: url(${ButtonBg}) no-repeat;
  background-size: contain;
  background-position: top;
  width: 360px;
  height: 87px;
  transform: scale(80%);
  border: 0;
`;
