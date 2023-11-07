import { useLocation, useNavigate } from 'react-router-dom';

import { useAtomValue } from 'jotai';
import { useCallback } from 'react';
import { HTTP_STATUS } from '../constants/api';
import { deleteBoardData } from '../api/album';
import { getDeleteUrl } from '../utils';
import { userStore } from '../stores/userStore';

const useBoardDelete = (boardId: number) => {
  const user = useAtomValue(userStore)!;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleBoardDelete = useCallback(async () => {
    if (!user?.accessToken || !boardId) return;
    try {
      const url = getDeleteUrl(pathname, boardId);
      const response = await deleteBoardData(user?.accessToken, url);

      if (response.status === HTTP_STATUS.OK) {
        navigate(-1);
      }
    } catch {
      throw new Error('삭제 관련 에러 발생');
    }
  }, [user?.accessToken, boardId]);

  return handleBoardDelete;
};

export default useBoardDelete;
