"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

/**
 * True after hydration, false during SSR/first paint. Built on
 * useSyncExternalStore rather than useState+useEffect so it can differ
 * between server and client render without ever calling setState from
 * inside an effect body (which trips the "no setState in effect"
 * lint rule and, worse, causes an extra render pass on every mount).
 * Used to gate client-only enhancements that would otherwise ship a
 * broken or invisible SSR/no-JS state.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
