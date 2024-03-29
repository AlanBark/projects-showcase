import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (async ({ params }) => {
  try {

    const post = await import(`../${params.slug}.md`);
    const { title, date, thumbnail, description } = post.metadata;
    const content = post.default;
    
    return {
      content,
      title,
      date,
      thumbnail,
      description
    }
  } catch {
    throw error(404, 'Not found')
  }
  
}) satisfies PageLoad;