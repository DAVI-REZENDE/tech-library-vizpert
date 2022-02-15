import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -16%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;

  img.bg-shelf {
    width: 100%;
  }

  .shelf {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 19.5%;

    padding: 0 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .row-top, .row-bottom {
      display: flex;
      gap: 8px;
      width: calc(100% - 12%);
      margin-left: 6%;

      padding: 0 8px;
    }

    .row-top {
      margin-top: 15.5%;
    }

    .row-bottom {
      margin-top: 4.5%;
      justify-content: right;
    }

    div.book {
      width: 10%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
