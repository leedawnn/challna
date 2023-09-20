import * as S from './HomeAlbum.styled';

import type { Album } from '../../types/album';

type Props = {
  data: any;
};

const HomeAlbum = ({ data }: Props) => {
  return (
    <S.Container>
      {data?.map((album: Album, index: number) => (
        <S.AlbumWrapper key={album.id || index}>
          <S.AlbumImage src={album.accessUrl} alt={album.originName} />
        </S.AlbumWrapper>
      ))}
    </S.Container>
  );
};

export default HomeAlbum;
