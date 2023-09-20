import { AxiosError, AxiosResponse } from 'axios';

import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import { fetchQuery } from '../../utils/fetchQuery';
import instance from '../../api/axios';
import { useAtomValue } from 'jotai';
import { useInfiniteQuery } from '@tanstack/react-query';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { userStore } from '../../stores/userStore';

const HomePage = ({ id }: { id: string }) => {
  const users = useAtomValue(userStore);
  const fetchGetQuery = (queryString: string) => {
    return instance({
      url: `/album/imageview?${queryString}`,
      method: 'get',
      headers: {
        'X-AUTH-TOKEN': users?.accessToken as string,
      },
    });
  };
  const {
    data: albumData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<AxiosResponse, AxiosError, any[]>(
    ['albumns', id],
    ({ pageParam = 0 }) => fetchGetQuery(fetchQuery({ page: pageParam })),
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

  console.log(albumData);

  return (
    <>
      {albumData ? (
        <>
          <HomeAlbum data={albumData?.pages || []} />
          <div ref={setTarget} />
        </>
      ) : (
        <NoneContent contentType="main" />
      )}
    </>
  );
};

export default HomePage;
