import { atom } from 'jotai';
import { message } from '../types/message';

export const MessageDetailStore = atom<message | null>(null);
