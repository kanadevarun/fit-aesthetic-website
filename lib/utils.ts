// ============================================================
// Utility helpers
// ============================================================

import { clsx, type ClassValue } from "clsx";

/** Merge class names (handles conditional classes cleanly) */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
