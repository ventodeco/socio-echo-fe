import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export async function fetchSummaryData() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const token = sessionStorage.getItem('auth_token');
  if (!token) throw new Error('NO_TOKEN');
  const res = await fetch(`${BASE_URL}/v1/summary/city?cities=Jakarta,Solo`, {
    headers: { 'x-user-token': token },
  });
  const data = await res.json();
  if (data.errors?.[0]?.code === '401') throw new Error('TOKEN_EXPIRED');
  if (!data.success) throw new Error('API_ERROR');
  return data.data.cities;
}
