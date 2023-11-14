import { atom } from 'jotai';
import type { Guest } from '../types/user';

type GuestAlbum = {
  id: number;
  name: string;
  previewUrl: string;
  file: File;
};

export const guestFileStore = atom<GuestAlbum[] | null>(null);

export const guestAuthStore = atom<Guest | null>(null);
