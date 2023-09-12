import type { User } from "../types/user";
import { atom } from "jotai";

export const userStore = atom<User | null>(null)