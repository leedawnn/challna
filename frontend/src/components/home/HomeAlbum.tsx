import styled from "styled-components";

const HomeAlbum = () => {
  return (
    <Container>
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
      <AlbumWrapper />
    </Container>
  );
}

export default HomeAlbum;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7.5px;

  box-sizing: border-box;
`;

const AlbumWrapper = styled.div`
  height: auto;

  background-color: black;

  position: relative;
  
  &:before {
    content: "";
    display: block;
    padding-bottom: 100%; /* for square shape */
  }
`;