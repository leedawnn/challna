import { useAtom, useSetAtom } from 'jotai';
import { accessTokenStore } from '../stores/accessToken';
import { useMutation } from '@tanstack/react-query';
import { IS_VALID_TOKEN, restoreAcccessToken } from '../api/auth';
import { HTTP_STATUS } from '../constants/api';

interface ReissueReqData {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: Date;
}

export async function getAccessToken() {
  // const setAccessToken = useSetAtom(accessTokenStore);
  const [accessToken, setAccessToken] = useAtom(accessTokenStore);

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
            // setAccessToken(res.data?.data.accessToken);
            // setAccessToken('refresh_token'); // 임의의 리프레시 토큰
            console.log('refresh!!!!!');
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
