import { createPortal } from 'react-dom';
import { useAtomValue } from 'jotai';
import * as S from './AlbumDetail.styled';

import DeleteIcon from '../../assets/icons/DeleteIcon';
import DeletePhotoModal from '../common/Modal/DeletePhotoModal';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils/formatDate';
import useVisible from '../../hooks/useVisible';

const AlbumDetailFooter = () => {
  const albumDetail = useAtomValue(albumDetailStore);
  const { isVisible, handleChangeVisible } = useVisible();

  return (
    <S.FooterContainer>
      <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
      <S.IconWrapper>
        {albumDetail?.contentCheck && <MessageDetailIcon />}
        <DeleteIcon active={false} onClick={handleChangeVisible} />
        {isVisible &&
          createPortal(
            <DeletePhotoModal isModalOpen={isVisible} handleChangeVisible={handleChangeVisible} />,
            document.getElementById('modal-root') as HTMLElement,
          )}
      </S.IconWrapper>
    </S.FooterContainer>
  );
};

export default AlbumDetailFooter;
