import { useAtomValue } from 'jotai';
import HomeAlbum from '../components/home/HomeAlbum';
import NoneContent from '../components/layout/NoneContent';
import useInfinityAlbum from '../hooks/api/useInfinityAlbum';
import useInfinityObserver from '../hooks/common/useInfinityObserver';
import { userStore } from '../stores/userStore';

const AlbumPage = () => {
  const users = useAtomValue(userStore)!;

  const { data: albumData, fetchNextPage, hasNextPage } = useInfinityAlbum(users.accessToken);

  const { setTarget } = useInfinityObserver({
    hasNextPage,
    fetchNextPage,
  });
  return albumData ? (
    <>
      <HomeAlbum data={(albumData?.pages as any[]) ?? []} />
      <div ref={setTarget} />
    </>
  ) : (
    <NoneContent contentType="main" />
  );
};

export default AlbumPage;
