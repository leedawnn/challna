import { AxiosRequestConfig } from 'axios';
import { HTTP_METHOD } from '../../constants/api';
import instance from '../axios';

export const IS_VALID_TOKEN = ['auth', 'isValidToken'];

export const getKaKaoUser = (queryString: string) => {
  console.log('qqqqq', queryString);
  return instance({ url: `/login?${queryString}`, method: HTTP_METHOD.GET });
};

/**
 * 💥 엑세스 토큰이 만료되었을 때, refreshToken을 요청하는 API
 *
 * @returns refreshToken과 토큰 정보(만료일, 에러 메시지 등)
 */

export const restoreAcccessToken = (config: AxiosRequestConfig) => {
  return instance({ url: `/reissue`, method: HTTP_METHOD.POST, ...config });
};
