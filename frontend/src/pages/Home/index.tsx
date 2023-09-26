import HomeAlbum from '../../components/home/HomeAlbum';
import NoneContent from '../../components/layout/NoneContent';
import { useAtomValue, useSetAtom } from 'jotai';
import useInfinityAlbum from '../../hooks/useInfinityAlbum';
import useIntersectionObserver from '../../hooks/useInfinityObserver';
import { userStore } from '../../stores/userStore';
import { atomWithStorage } from 'jotai/utils';

const HomePage = () => {
  // 임의의 엑세스 토큰 저장
  const accessTokenAtom = atomWithStorage('ACCESS_TOKEN', '');
  const setAccessToken = useSetAtom(accessTokenAtom);
  setAccessToken('access_token');

  const users = useAtomValue(userStore);

  const { data: albumData, fetchNextPage, hasNextPage } = useInfinityAlbum(users?.accessToken ?? '');

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      {albumData ? (
        <>
          <HomeAlbum data={(albumData?.pages as any[]) ?? []} />
          <div ref={setTarget} />
        </>
      ) : (
        <NoneContent contentType="main" />
      )}
    </>
  );
};

export default HomePage;
