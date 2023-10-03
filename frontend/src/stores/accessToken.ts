import { atom } from 'jotai';
import { useGetAccessToken } from '../hooks/useGetAccessToken';

export const accessTokenStore = atom<string | null>(null);

export const restoreAccessTokenAtom = atom(
  (get) => get(accessTokenStore),
  async (get, set) => {
    if (!get(accessTokenStore)) return;
    const newAccessToken = await useGetAccessToken();

    set(accessTokenStore, newAccessToken);
    return newAccessToken;
  },
);
