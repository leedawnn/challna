import { useAtom, useSetAtom } from 'jotai';
import { accessTokenStore } from '../stores/accessToken';
import { useMutation } from '@tanstack/react-query';
import { IS_VALID_TOKEN, restoreAcccessToken } from '../api/auth';
import { HTTP_STATUS } from '../constants/api';
import { atomWithStorage } from 'jotai/utils';

interface ReissueReqData {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: Date;
}

export async function useGetAccessToken() {
  const [accessToken, setAccessToken] = useAtom(accessTokenStore);

  const refreshTokenAtom = atomWithStorage('REFRESH_TOKEN', '');
  const setRefreshToken = useSetAtom(refreshTokenAtom);

  try {
    const result = useMutation(
      IS_VALID_TOKEN,
      (data: ReissueReqData) =>
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
            setRefreshToken(res.data.data.refreshToken);
          }
        },
      },
    );

    const newAccessToken = result.data?.data.refreshToken;
    return newAccessToken;
  } catch (error) {
    console.error('Refresh Token Error:', error);
    throw error;
  }
}
