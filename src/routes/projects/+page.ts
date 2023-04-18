import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { IProject } from '$lib/typedef/IProject';
 
export const load = (async ({ fetch, params }) => {
  const res = await fetch(`/api/projects`);
  let data: { projects: IProject[], categories: string[] };
  data = await res.json();

  return {
    data
  }
}) satisfies PageLoad;