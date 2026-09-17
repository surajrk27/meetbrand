"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

/**
 * TanStack Query is wired in now for one reason: it's the layer that
 * will front the future CMS/backend (case studies, insights, live
 * testimonials) without a rewrite. Nothing calls it yet because there
 * is no backend yet — that's honest, not decorative. When the CMS
 * lands, data fetching in lib/data/*.ts gets swapped for useQuery
 * hooks here, and every consuming component stays the same.
 */
export function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
