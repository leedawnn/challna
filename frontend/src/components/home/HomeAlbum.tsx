import styled from "styled-components";

interface DummyData {
  id: number;
  name: string;
  imgUrl: string;
}

type Props = {
  data: DummyData[];
};

const HomeAlbum = ({ data }: Props) => {
  return (
    <Container>
      {
        data?.map((album: DummyData) => (
          <AlbumWrapper>
            <AlbumImage src={album.imgUrl} alt={album.name} />
          </AlbumWrapper>
        ))
      }
    </Container>
  );
}

export default HomeAlbum;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 7.5px;

  padding-top: 2.4rem;
  box-sizing: border-box;
`;

const AlbumWrapper = styled.div`
  width: 100%;
  height: auto;

  position: relative;
  
  &:after {
    content: "";
    display: block;
    padding-bottom: 100%; /* for square shape */
  }

  background-color: black;
`;

const AlbumImage = styled.img`
  position: absolute;
  
  width: 100%;
  height: 100%;
`;