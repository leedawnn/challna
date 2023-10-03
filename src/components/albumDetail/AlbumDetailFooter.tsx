import * as S from './AlbumDetail.styled';

import DeleteDetailIocn from '../../assets/icons/DeleteDetailIcon';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils/formatDate';
import { useAtomValue } from 'jotai';

const AlbumDetailFooter = () => {
  const albumDetail = useAtomValue(albumDetailStore);

  return (
    <S.FooterContainer>
      <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
      <S.IconWrapper>
        {albumDetail?.contentCheck && <MessageDetailIcon />}
        <DeleteDetailIocn />
      </S.IconWrapper>
    </S.FooterContainer>
  );
};

export default AlbumDetailFooter;
