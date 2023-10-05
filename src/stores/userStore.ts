import { atom } from 'jotai';
import type { User } from '../types/user';

export const userStore = atom<User | null>(null);
