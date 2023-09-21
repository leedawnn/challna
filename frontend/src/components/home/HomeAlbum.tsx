import * as S from './HomeAlbum.styled';

import type { Album } from '../../types/album';
import LazyImage from '../common/LazyImage';

type Props = {
  data: Album[];
};

const HomeAlbum = ({ data }: Props) => {
  return (
    <S.Container>
      {data?.map((album: Album, index: number) => (
        <S.AlbumWrapper key={album.id || index}>
          <LazyImage src={album.accessUrl} alt={album.originName} />
        </S.AlbumWrapper>
      ))}
    </S.Container>
  );
};

export default HomeAlbum;
