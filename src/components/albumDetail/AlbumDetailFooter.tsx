import { startTransition, useState } from 'react';
import { createPortal } from 'react-dom';
import { useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import * as S from './AlbumDetail.styled';

import { ALBUM_MESSAGE_KEY, getAlbumMessage } from '../../api/album';

import DeleteConfirmModal from '../common/Modal/DeleteConfirmModal';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { accessTokenStore } from '../../stores/accessToken';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils/formatDate';
import useVisible from '../../hooks/useVisible';

const AlbumDetailFooter = () => {
  const [isActive, setIsActive] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(false);
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetail = useAtomValue(albumDetailStore);
  const { isVisible, handleChangeVisible } = useVisible();
  const { data: messageData, remove } = useQuery(
    ALBUM_MESSAGE_KEY,
    () => {
      return getAlbumMessage(accessToken as string, albumDetail?.boardId as number);
    },
    {
      enabled: shouldFetch,
      onSuccess: () => {
        setShouldFetch(false);
        setIsActive(true);
      },
    },
  );

  const handleOpenMessage = () => {
    startTransition(() => {
      if (messageData) {
        remove();
        setShouldFetch(false);
        setIsActive(false);
      } else {
        setShouldFetch(true);
      }
    });
  };

  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
        <S.IconWrapper>
          {albumDetail?.contentCheck && <MessageDetailIcon active={isActive} onClick={handleOpenMessage} />}
          <DeleteIcon active={false} onClick={handleChangeVisible} />
          {isVisible &&
            createPortal(
              <DeleteConfirmModal handleChangeVisible={handleChangeVisible} />,
              document.getElementById('modal-root') as HTMLElement,
            )}
        </S.IconWrapper>
      </S.FooterContainer>
      {messageData && (
        <S.MessageContainer>
          <S.MessageText> {messageData?.data.content} </S.MessageText>
        </S.MessageContainer>
      )}
    </S.FooterLayout>
  );
};

export default AlbumDetailFooter;
