import { AxiosError, AxiosResponse } from 'axios';
import { MAIN_ALBUM_KEY, getAlbumLists } from '../../api/album';

import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import { fetchQuery } from '../../utils/fetchQuery';
import { useAtomValue } from 'jotai';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '../../hooks/useInfinityObserver';
import { userStore } from '../../stores/userStore';

const HomePage = () => {
  const users = useAtomValue(userStore);

  const {
    data: albumData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<AxiosResponse, AxiosError>(
    MAIN_ALBUM_KEY,
    ({ pageParam = 0 }) => getAlbumLists(users?.accessToken as string, fetchQuery({ page: pageParam })),
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

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {albumData ? (
        <>
          <HomeAlbum data={(albumData?.pages as any[]) || []} />
          <div ref={setTarget} />
        </>
      ) : (
        <NoneContent contentType="main" />
      )}
    </>
  );
};

export default HomePage;
