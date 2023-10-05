import { AxiosError, AxiosResponse } from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { MAIN_ALBUM_KEY, getAlbumLists } from '../api/album';

import { fetchQuery } from '../utils/fetchQuery';

const useInfinityAlbum = (accessToken: string) => {
  return useInfiniteQuery<AxiosResponse, AxiosError>(
    MAIN_ALBUM_KEY,
    ({ pageParam = 0 }) => getAlbumLists(accessToken, fetchQuery({ page: pageParam })),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.last ? undefined : lastPage.data.pageNumber + 1;
      },
      select: (data) => ({
        pages: data?.pages.flatMap((page) => page.data.content),
        pageParams: data.pageParams,
      }),
    },
  );
};

export default useInfinityAlbum;
