import { useQuery } from "@tanstack/react-query";

import {
  getStoredValue,
  removeStoredValue,
  setToLocalStorage,
} from "@/utils/localStorage";

export type Session = { token: string; username: string } | null;

export const AUTH_TOKEN_STORAGE_KEY = "authToken";
export const USER_STORAGE_KEY = "user";

export const readSessionFromStorage = (): Session => {
  const token = getStoredValue(AUTH_TOKEN_STORAGE_KEY);
  const username = getStoredValue(USER_STORAGE_KEY);
  if (!token || !username) return null;
  return { token, username };
};

export const writeSessionToStorage = (session: Exclude<Session, null>) => {
  setToLocalStorage(AUTH_TOKEN_STORAGE_KEY, session.token);
  setToLocalStorage(USER_STORAGE_KEY, session.username);
};

export const clearSessionStorage = () => {
  removeStoredValue(AUTH_TOKEN_STORAGE_KEY);
  removeStoredValue(USER_STORAGE_KEY);
};

export const useSession = () =>
  useQuery({
    queryKey: sessionQueryKey(),
    queryFn: readSessionFromStorage,
    staleTime: Infinity,
    gcTime: Infinity,
    initialData: readSessionFromStorage,
  });

export const sessionQueryKey = () => ["session"] as const;
