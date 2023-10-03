import type { Album } from '../types/album';
import { atom } from 'jotai';

export const albumDetailStore = atom<Album | null>(null);
