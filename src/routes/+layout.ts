export const prerender = true;

import type { LayoutLoad } from './$types';

export const load = (({ url }) => {
  const current = url.pathname;

  return {
    current
  }
  
}) satisfies LayoutLoad;