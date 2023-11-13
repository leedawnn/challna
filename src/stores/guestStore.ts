import { atom } from 'jotai';
import type { Guest } from '../types/user';

export const guestFileStore = atom<FileList | null>(null);

export const guestAuthStore = atom<Guest | null>(null);
