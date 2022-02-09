import { 
  Container,
  Header,
  Footer,
  Shelf,
  Filters,
  PanelFilters,
  FiltersWrapper,
  FilterButtons,
  Divider,
  OrganizeButton
} from './styles';

import { FilterButton } from '../../components/FilterButton';

import ClockBase from '../../assets/clock_base.svg';
import Logo from '../../assets/logo.svg';
import ladyImage from '../../assets/lady.svg';

export function Home() {
  return (
    <Container>
      <Header>
        <img src={ClockBase} />

        <img src={Logo} />
      </Header>
      <Footer>
        <Shelf>

        </Shelf>

        <Filters>
          <img src={ladyImage} />
          <PanelFilters>
            <FiltersWrapper>
              <span>sort by</span>

              <FilterButtons>

                <FilterButton type="alphabetic" />
                <FilterButton type="colors" />
                <FilterButton type="sizes" />

              </FilterButtons>

              <Divider />

              <OrganizeButton />
            </FiltersWrapper>
          </PanelFilters>
        </Filters>
      </Footer>
    </Container>
  );
};