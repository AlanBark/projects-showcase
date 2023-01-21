import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { assets } from '$app/paths';
 
export const load = (async ({ fetch, params }) => {
  const res = await fetch(`/api/projects`);
  const projects = await res.json();

  return {
    projects
  }
}) satisfies PageLoad;