import { atom } from 'jotai';
import type { Guest } from '../types/user';
import type { GuestAlbum } from '../types/album';

export const guestFileStore = atom<GuestAlbum[] | null>(null);

export const guestAuthStore = atom<Guest | null>(null);
