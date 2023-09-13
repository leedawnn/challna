import * as S from './HomeAlbum.styled';

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
    <S.Container>
      {
        data?.map((album: DummyData) => (
          <S.AlbumWrapper>
            <S.AlbumImage src={album.imgUrl} alt={album.name} />
          </S.AlbumWrapper>
        ))
      }
    </S.Container>
  );
}

export default HomeAlbum;
