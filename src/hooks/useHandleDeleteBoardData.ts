import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { MAIN_ALBUM_KEY, deleteBoardData } from '../api/album';

import { HTTP_STATUS } from '../constants/api';
import { activeSliderStore } from '../stores/activeSliderStore';
import { albumDetailStore } from '../stores/albumDetailStore';
import { getDeleteUrl } from '../utils';
import { useModal } from '../provider/ModalProvider';
import { userStore } from '../stores/userStore';

const useHandleDeleteBoardData = () => {
  const users = useAtomValue(userStore)!;
  const albumDetailInfo = useAtomValue(albumDetailStore);
  const setActiveSlider = useSetAtom(activeSliderStore);
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const { closeModal } = useModal();

  const handleDeleteBoardData = useCallback(async () => {
    if (!users?.accessToken || !albumDetailInfo?.imageId) return;

    try {
      const url = getDeleteUrl(pathname, albumDetailInfo.imageId);
      const response = await deleteBoardData(users?.accessToken, url);

      if (response.status === HTTP_STATUS.OK) {
        queryClient.setQueryData(MAIN_ALBUM_KEY, (old: any) => {
          return {
            ...old,
            pages: old.pages.map((page: any) => ({
              ...page,
              data: {
                ...page.data,
                content: page.data.content.filter((album: any) => album.imageId !== albumDetailInfo.imageId),
              },
            })),
          };
        });

        if (albumDetailInfo.activeIndex || albumDetailInfo.activeIndex === 0) {
          const changeIndex = albumDetailInfo.activeIndex + 1;
          setActiveSlider(changeIndex);
        }

        closeModal();
      }
    } catch {
      //  추후 에러 처리 추가
      throw new Error('삭제 관련 에러 발생');
    }
  }, [users?.accessToken, albumDetailInfo]);

  return handleDeleteBoardData;
};

export default useHandleDeleteBoardData;
