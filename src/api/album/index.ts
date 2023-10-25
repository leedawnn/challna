import { HTTP_METHOD } from '../../constants/api';
import instance from '../axios';

export const MAIN_ALBUM_KEY = ['albums'];
export const ALBUM_MESSAGE_KEY = ['albums', 'message'];

export const getAlbumLists = (accessToken: string, queryString: string) => {
  return instance({
    url: `/album/imageview?${queryString}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const getAlbumMessage = (accessToken: string, boardId: number) => {
  return instance({
    url: `/board/${boardId}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const deleteBoardData = (accessToken: string, url: string) => {
  return instance({
    url,
    method: HTTP_METHOD.DELETE,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
