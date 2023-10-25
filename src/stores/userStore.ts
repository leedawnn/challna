import { atomWithDefault } from 'jotai/utils';
import { HTTP_STATUS } from '../constants/api';
import type { User } from '../types/user';
import { getReissueAccessToken } from '../api/auth';

const getCheckUserLogin = async () => {
  try {
    const { data, status } = await getReissueAccessToken();

    if (status === HTTP_STATUS.OK) {
      return {
        ...data.kakaoUserInfoDto,
        ...data.token,
      };
    }
  } catch {
    return null;
  }
};

export const userStore = atomWithDefault<User | Promise<User> | null>(getCheckUserLogin);
