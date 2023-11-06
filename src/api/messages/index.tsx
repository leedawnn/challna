import { HTTP_METHOD } from '../../constants/api';
import instance from '../axios';

export const MAIN_MESSAGES_KEY = ['messagees'];

export const getMessageLists = (accessToken: string, queryString: string) => {
  return instance({
    url: `/board?${queryString}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};

export const getBoardImage = (accessToken: string, queryString: number) => {
  return instance({
    url: `/board/image/${queryString}`,
    method: HTTP_METHOD.GET,
    headers: {
      'X-AUTH-TOKEN': accessToken,
    },
  });
};
