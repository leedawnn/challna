import type { AxiosError, AxiosResponse } from 'axios';
import { useAtomValue } from 'jotai';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MAIN_MESSAGES_KEY, getMessageLists } from '../../api/messages';

import Messagelist from '../../components/messages/MessagesList';
import { fetchQuery } from '../../utils/fetchQuery';
import useInfinityObserver from '../../hooks/useInfinityObserver';
import { userStore } from '../../stores/userStore';

const Messages = () => {
  const user = useAtomValue(userStore)!;
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
  return (
    <>
      <Messagelist contentList={messageData?.pages as any[]} />
      <div ref={setTarget} />
    </>
  );
};

export default Messages;
