import { atom } from 'jotai';
import { userStore } from './userStore';
import { getAccessToken } from '../hooks/getAccessToken';

export const accessTokenStore = atom<string | null>(null);

export const restoreAccessTokenAtom = atom(
  (get) => get(accessTokenStore),
  async (get, set) => {
    if (!get(accessTokenStore)) return;
    const newAccessToken = await getAccessToken();

    set(accessTokenStore, newAccessToken);
    return newAccessToken;
  },
);
