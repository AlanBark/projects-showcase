import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { IProject } from '$lib/typedef/IProject';
 
export const load = (async ({ fetch, params }) => {
  const res = await fetch(`/api/projects`);
  
  let projects: { [key: string]: IProject[] };
  projects = await res.json();

  return {
    projects
  }
}) satisfies PageLoad;