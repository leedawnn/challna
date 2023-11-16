import { HTTP_METHOD } from '../../constants/api';
import { ROUTES_PATH } from '../../constants/routes';
import instance from '../axios';

export const HOST_USER_KEY = ['guest'];

export const getHostInformation = (id: string) => {
  return instance({
    url: `${ROUTES_PATH.guest}/host?host=${id}`,
    method: HTTP_METHOD.GET,
  });
};

export const putGuestAlbum = (accessToken: string, data: any) => {
  return instance({
    url: `${ROUTES_PATH.guest}/image`,
    method: HTTP_METHOD.PUT,
    data,
    headers: {
      'X-AUTH-TOKEN': accessToken,
      'Content-Type': 'mutipart/form-data',
    },
  });
};
