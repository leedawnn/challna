import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7.5px;

  padding-top: 2.4rem;
  box-sizing: border-box;
`;

export const AlbumWrapper = styled.div`
  width: 100%;
  height: auto;

  position: relative;
  
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* for square shape */
  }
`;

export const AlbumImage = styled.img`
  position: absolute;
  
  width: 100%;
  height: 100%;
`;