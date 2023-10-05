import { useAtomValue } from 'jotai';
import * as S from './AlbumDetail.styled';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils/formatDate';

const AlbumDetailFooter = () => {
  const albumDetail = useAtomValue(albumDetailStore);

  return (
    <S.FooterContainer>
      <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
      <S.IconWrapper>
        {albumDetail?.contentCheck && <MessageDetailIcon />}
        <DeleteIcon active={false} />
      </S.IconWrapper>
    </S.FooterContainer>
  );
};

export default AlbumDetailFooter;
