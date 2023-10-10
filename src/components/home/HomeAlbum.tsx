import { Link } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import * as S from './HomeAlbum.styled';

import type { Album } from '../../types/album';
import LazyImage from '../common/LazyImage';
import { ROUTES_PATH } from '../../constants/routes';
import { albumDetailStore } from '../../stores/albumDetailStore';

type Props = {
  data: Album[];
};

const HomeAlbum = ({ data }: Props) => {
  const setAlbumDetails = useSetAtom(albumDetailStore);

  const handleSaveImageDetail = (album: Album) => () => {
    setAlbumDetails(album);
  };

  return (
    <S.Container>
      {data?.map((album: Album, index: number) => (
        <S.AlbumWrapper key={album.image_Id || index}>
          <Link to={ROUTES_PATH.albumDetail} state={{ order: index }} onClick={handleSaveImageDetail(album)}>
            <LazyImage src={album.resizeUrl} alt={album.originName} />
          </Link>
        </S.AlbumWrapper>
      ))}
    </S.Container>
  );
};

export default HomeAlbum;
