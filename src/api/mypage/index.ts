import { HTTP_METHOD } from '../../constants/api';
import { ROUTES_PATH } from '../../constants/routes';
import instance from '../axios';

export const USER_BOARD_COUNT = ['users', 'board-count'];

export const getUserBoardCount = (accessToken: string) => {
  return instance({
    url: ROUTES_PATH.mypage,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
