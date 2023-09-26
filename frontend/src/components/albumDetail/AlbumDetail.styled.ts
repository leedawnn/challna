import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  background-color: black;

  overflow: hidden;
`;

export const DetailImageWrapper = styled.div`
  width: 100%;
  height: 431px;

  padding: 20px 26px;
`;

export const ImageNavigatorWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2px;

  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    width: 30px;
    height: 40px;
  }
`;
