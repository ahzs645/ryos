import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the base URL for static assets.
 * In development and Vercel: "/"
 * In GitHub Pages: "/ryos/"
 */
export const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prepend the base URL to a path for static assets.
 * Handles both absolute paths (starting with /) and relative paths.
 * @param path - The path to the asset (e.g., "/data/filesystem.json")
 * @returns The full URL with base path (e.g., "/ryos/data/filesystem.json")
 */
export function assetUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}${cleanPath}`;
}
