import styled from 'styled-components';
import BgStripes from '../../assets/bg_stripes.svg'
import BgFooter from '../../assets/ground.svg'


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

export const Filters = styled.div`
  position: absolute;
  left: 16px;
  width: 40vw;
  height: 100%;

  display: flex;
  align-items: flex-end;

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
  /* bottom: 20%; */
  top: 5%;

  width: 40%;
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

  margin: 5% 0;
`;

export const OrganizeButton = styled.button`
  background-color: transparent;
  border: 0;
  width: 100%;

`;
