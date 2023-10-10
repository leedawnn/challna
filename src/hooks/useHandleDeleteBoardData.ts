import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { HTTP_STATUS } from '../constants/api';
import { accessTokenStore } from '../stores/accessToken';
import { albumDetailStore } from '../stores/albumDetailStore';
import { deleteBoardData } from '../api/album';
import { getDeleteUrl } from '../utils';
import { useModal } from '../provider/ModalProvider';

const useHandleDeleteBoardData = () => {
  const accessToken = useAtomValue(accessTokenStore);
  const albumDetailInfo = useAtomValue(albumDetailStore);
  const { pathname } = useLocation();
  const { handleCloseModal } = useModal();

  const handleDeleteBoardData = useCallback(async () => {
    if (!accessToken || !albumDetailInfo?.image_Id) return;

    try {
      const url = getDeleteUrl(pathname, albumDetailInfo.image_Id);
      const response = await deleteBoardData(accessToken, url);

      if (response.status === HTTP_STATUS.OK) {
        handleCloseModal();
      }
    } catch {
      //  추후 에러 처리 추가
      throw new Error('삭제 관련 에러 발생');
    }
  }, [accessToken, albumDetailInfo]);

  return handleDeleteBoardData;
};

export default useHandleDeleteBoardData;
