import { HTTP_METHOD } from '../../constants/api';
import instance from '../axios';

export const MAIN_ALBUM_KEY = ['albums'];

export const getAlbumLists = (accessToken: string, queryString: string) => {
  return instance({
    url: `/album/imageview?${queryString}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const deleteAlbumImage = (accessToken: string, boardId: string) => {
  return instance({
    url: `/board/${boardId}`,
    method: HTTP_METHOD.DELETE,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
