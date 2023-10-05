import { atom } from 'jotai';
import type { Album } from '../types/album';

export const albumDetailStore = atom<Album | null>(null);
