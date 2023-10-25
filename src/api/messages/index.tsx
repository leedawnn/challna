import { HTTP_METHOD } from '../../constants/api';
import instance from '../axios';

export const MAIN_ALBUM_KEY = ['albums'];
export const ALBUM_MESSAGE_KEY = ['albums', 'message'];
export const MAIN_MESSAGE_KEY = ['message'];

export const getBoardList = (accessToken: string, queryString: string) => {
  return instance({
    url: `/board?${queryString}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const getBoardImage = (accessToken: string, boardId: number) => {
  return instance({
    url: `/board/image/${boardId}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const deleteBoardData = (accessToken: string, boardId: number) => {
  return instance({
    url: `/board/${boardId}`,
    method: HTTP_METHOD.DELETE,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
