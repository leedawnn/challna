import { startTransition, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import * as S from './AlbumDetail.styled';

import { ALBUM_MESSAGE_KEY, getAlbumMessage } from '../../api/album';

import DeleteConfirmModal from '../common/Modal/DeleteConfirmModal';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import MessageDetailIcon from '../../assets/icons/MessageDetailIcon';
import { accessTokenStore } from '../../stores/accessToken';
import { albumDetailStore } from '../../stores/albumDetailStore';
import { formatDate } from '../../utils';
import { messageStore } from '../../stores/messageStore';
import { useModal } from '../../provider/ModalProvider';

const AlbumDetailFooter = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [messageCheck, setMessageCheck] = useAtom(messageStore);
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetail = useAtomValue(albumDetailStore);
  const { handleOpenModal } = useModal();
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
        remove();
      } else {
        refetch();
      }

      setShouldFetch((prev) => !prev);
      setMessageCheck((prev) => ({
        ...prev,
        isIconCheck: !prev.isIconCheck,
      }));
    });
  };

  const handleOpenDeleteModal = () => {
    handleOpenModal(<DeleteConfirmModal />);
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
          <DeleteIcon active={false} onClick={handleOpenDeleteModal} />
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
