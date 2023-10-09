import { startTransition, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';
import * as S from './AlbumDetail.styled';

import { ALBUM_MESSAGE_KEY, getAlbumMessage } from '../../api/album';

import DeleteConfirmModal from '../common/Modal/DeleteConfirmModal';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { accessTokenStore } from '../../stores/accessToken';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils/formatDate';
import { messageStore } from '../../stores/messageStore';
import useVisible from '../../hooks/useVisible';

const AlbumDetailFooter = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [messageCheck, setMessageCheck] = useAtom(messageStore);
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetail = useAtomValue(albumDetailStore);
  const { isVisible, handleChangeVisible } = useVisible();
  const {
    data: messageData,
    refetch,
    remove,
  } = useQuery(
    ALBUM_MESSAGE_KEY,
    () => {
      return getAlbumMessage(accessToken as string, albumDetail?.boardId as number);
    },
    {
      enabled: shouldFetch,
      onSuccess: () => {
        setShouldFetch(false);
      },
    },
  );

  const handleOpenMessage = () => {
    startTransition(() => {
      if (messageData?.data.content) {
        setShouldFetch(false);
        setMessageCheck((prev) => ({
          ...prev,
          isIconCheck: false,
        }));
        remove();
      } else {
        setShouldFetch(true);
        setMessageCheck((prev) => ({
          ...prev,
          isIconCheck: true,
        }));
        refetch();
      }
    });
  };

  useEffect(() => {
    if (messageCheck.isIconCheck && albumDetail?.contentCheck) {
      refetch();
    }

    if (messageCheck.isIconCheck && !albumDetail?.contentCheck) {
      setMessageCheck((prev) => ({
        ...prev,
        isIconCheck: false,
      }));
    }
  }, [messageCheck]);

  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
        <S.IconWrapper>
          {albumDetail?.contentCheck && (
            <MessageDetailIcon active={messageCheck.isIconCheck} onClick={handleOpenMessage} />
          )}
          <DeleteIcon active={false} onClick={handleChangeVisible} />
          {isVisible &&
            createPortal(
              <DeleteConfirmModal handleChangeVisible={handleChangeVisible} />,
              document.getElementById('modal-root') as HTMLElement,
            )}
        </S.IconWrapper>
      </S.FooterContainer>
      {messageCheck.isIconCheck && messageCheck.isMessageOpen && messageData?.data.content && (
        <S.MessageContainer>
          <S.MessageText> {messageData?.data.content} </S.MessageText>
        </S.MessageContainer>
      )}
    </S.FooterLayout>
  );
};

export default AlbumDetailFooter;
