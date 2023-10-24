import { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MAIN_MESSAGE_KEY, getBoardList } from '../api/messages/index';

import { fetchQuery } from '../utils/fetchQuery';

export const useMessageLists = (accessToken: string) => {
  return useInfiniteQuery<AxiosResponse, AxiosError>(
    MAIN_MESSAGE_KEY,
    ({ pageParam = 0 }) => getBoardList(accessToken, fetchQuery({ page: pageParam })),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.last ? null : lastPage.data.pageNumber + 1;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data.board),
        pageParams: data.pageParams,
        content: data?.pages.map((content) => content.data),
        board_id: data?.pages.map((dateTime) => dateTime.data),
      }),
    },
  );
};
