import { startTransition, useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import { useQuery } from '@tanstack/react-query';
import * as S from './AlbumDetail.styled';

import { ALBUM_MESSAGE_KEY, getAlbumMessage } from '../../../../api/album';

import MessageDetailIcon from '../../../../assets/icons/MessageDetailIcon';
import { albumDetailStore } from '../../../../stores/albumDetailStore';
import { formatDate } from '../../../../utils';
import { messageStore } from '../../../../stores/messageStore';
import { userStore } from '../../../../stores/userStore';

const AlbumDetailContent = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);
  const [messageCheck, setMessageCheck] = useAtom(messageStore);
  const users = useAtomValue(userStore);
  const albumDetail = useAtomValue(albumDetailStore);
  const {
    data: messageData,
    refetch,
    remove,
  } = useQuery(
    ALBUM_MESSAGE_KEY,
    () => {
      return getAlbumMessage(users?.accessToken as string, albumDetail?.boardId as number);
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
    <S.ContentContainer>
      <S.ContentWrapper>
        <S.AlbumDataText> {formatDate(albumDetail?.metaDateTime)} </S.AlbumDataText>
        <S.IconBox>
          {albumDetail?.contentCheck && (
            <MessageDetailIcon active={messageCheck.isIconCheck} onClick={handleOpenMessage} />
          )}
        </S.IconBox>
      </S.ContentWrapper>
      {messageCheck.isIconCheck && messageCheck.isMessageOpen && messageData?.data.content && (
        <S.MessageWrapper>
          <S.MessageText> {messageData?.data.content} </S.MessageText>
        </S.MessageWrapper>
      )}
    </S.ContentContainer>
  );
};

export default AlbumDetailContent;
