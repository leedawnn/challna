import type { AxiosError, AxiosResponse } from 'axios';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MAIN_MESSAGES_KEY, getMessageLists } from '../api/messages';

import EmptyContent from './layout/EmptyContent';
import MessageContents from '../components/home/Message/MessageContents/MessageContents';
import { fetchQuery } from '../utils/fetchQuery';
import useInfinityObserver from '../hooks/common/useInfinityObserver';
import { useModal } from '../provider/ModalProvider';
import { userStore } from '../stores/userStore';

const MessagesPage = () => {
  const user = useAtomValue(userStore)!;
  const { closeModal } = useModal();
  const {
    data: messageData,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<AxiosResponse, AxiosError>(
    MAIN_MESSAGES_KEY,
    ({ pageParam = 0 }) => getMessageLists(user?.accessToken, fetchQuery({ page: pageParam })),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.last ? undefined : lastPage.data.pageNumber + 1;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data.board),
        pageParams: data.pageParams,
      }),
    },
  );

  const { setTarget } = useInfinityObserver({
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    closeModal();
  }, []);

  return messageData?.pages?.length ? (
    <>
      <MessageContents messageLists={messageData?.pages as any[]} />
      <div ref={setTarget} />
    </>
  ) : (
    <EmptyContent contentType="main" />
  );
};

export default MessagesPage;
