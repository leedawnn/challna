import { useAtom, useSetAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useMutation } from '@tanstack/react-query';
import { IS_VALID_TOKEN, restoreAcccessToken } from '../api/auth';

import { AuthToken } from '../types/user';
import { HTTP_STATUS } from '../constants/api';
import { accessTokenStore } from '../stores/accessToken';

export async function useGetAccessToken() {
  const [accessToken, setAccessToken] = useAtom(accessTokenStore);

  const refreshTokenAtom = atomWithStorage('REFRESH_TOKEN', '');
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  try {
    const result = useMutation(
      IS_VALID_TOKEN,
      (data: AuthToken) =>
        restoreAcccessToken({
          headers: {
            'X-AUTH-TOKEN': accessToken,
          },
          data,
        }),
      {
        onSuccess: (res) => {
          if (res.status === HTTP_STATUS.OK) {
            console.log('res: ', res); // 추후 엑세스 토큰이 만료되었을 때, 함수 호출이 잘 되는지 확인 후 제거 필요
            setAccessToken(res.data?.data.accessToken);
            setRefreshToken(res.data?.data.refreshToken);
          }
        },
      },
    );

    const newAccessToken = result.data?.data.refreshToken;
    return newAccessToken;
  } catch (error) {
    localStorage.removeItem('REFRESH_TOKEN');
    console.error('Refresh Token Error:', error);
    throw error;
  }
}
