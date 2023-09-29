import * as S from './HomeAlbum.styled';

import type { Album } from '../../types/album';
import LazyImage from '../common/LazyImage';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '../../constants/routes';

type Props = {
  data: Album[];
};

const HomeAlbum = ({ data }: Props) => {
  return (
    <S.Container>
      {data?.map((album: Album, index: number) => (
        <S.AlbumWrapper key={album.id || index}>
          <Link to={ROUTES_PATH.albumDetail} state={{ order: index }}>
            <LazyImage src={album.accessUrl} alt={album.originName} />
          </Link>
        </S.AlbumWrapper>
      ))}
    </S.Container>
  );
};

export default HomeAlbum;
