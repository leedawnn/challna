import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import AlbumContents from '../components/home/Album/AlbumContents/AlbumContents';
import EmptyContent from './layout/EmptyContent';
import useInfinityAlbum from '../hooks/api/useInfinityAlbum';
import useInfinityObserver from '../hooks/common/useInfinityObserver';
import { useModal } from '../provider/ModalProvider';
import { userStore } from '../stores/userStore';

const AlbumPage = () => {
  const users = useAtomValue(userStore)!;
  const { closeModal } = useModal();

  const { data: albumData, fetchNextPage, hasNextPage } = useInfinityAlbum(users.accessToken);

  const { setTarget } = useInfinityObserver({
    hasNextPage,
    fetchNextPage,
  });

  useEffect(() => {
    closeModal();
  }, []);

  return albumData?.pages.length ? (
    <>
      <AlbumContents data={(albumData?.pages as any[]) ?? []} />
      <div ref={setTarget} />
    </>
  ) : (
    <EmptyContent contentType="main" />
  );
};

export default AlbumPage;
