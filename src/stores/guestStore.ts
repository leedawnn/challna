import { atom } from 'jotai';
import type { Guest } from '../types/user';
import type { GuestAlbum } from '../types/album';

export const initialAlbumStore = {
  images: null,
  message: '',
};

export const guestAlbumStore = atom<GuestAlbum>(initialAlbumStore);

export const guestAuthStore = atom<Guest | null>(null);
