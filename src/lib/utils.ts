import { goto } from "$app/navigation";
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

export interface SummaryResponse {
  events_over_time: {
    distribution: Record<string, number>;
    total: number;
  };
  spoke_persons: {
    persons: Record<string, number>;
    total: number;
    other: number;
  };
  sentiment: {
    positive: number;
    negative: number;
    neutral: number;
    total: number;
  };
}

export async function fetchSummaryData(keyword = 'Jakarta', from = '2025-03-01', to = '2025-03-31') {
  const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080';
  const token = sessionStorage.getItem('auth_token');
  if (!token) throw new Error('NO_TOKEN');

  try {
    const res = await fetch(`${BASE_URL}/v1/summary?keyword=${keyword}&from=${from}&to=${to}`, {
      headers: { 'x-user-token': token },
    });

    // Check if response is ok
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    // Get the text first to debug if needed
    const text = await res.text();

    // Try to parse the JSON
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON response:', text);
      throw new Error('Invalid JSON response from server');
    }

    if (data.errors?.[0]?.code === '401') throw new Error('TOKEN_EXPIRED');
    if (!data.success) throw new Error(data.errors?.[0]?.message || 'API_ERROR');

    return data.data as SummaryResponse;
  } catch (error) {
    console.error('Error fetching summary data:', error);
    throw error;
  }
}

export async function handleLogout() {
  sessionStorage.removeItem('auth_token');
  goto('/login');
}
