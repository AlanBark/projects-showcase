import { json } from "@sveltejs/kit";
import { fetchProjects } from "../../../lib/utils/fetchProjects";

export const GET = async () => {
  const projects = await fetchProjects();
  
    let categories: string[] = [];
  
    try {
      projects.forEach((project) => {
        project.category.forEach((category) => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
      });
    } catch {
      return json({ projects: [], categories: [] });
    }
  return json({projects: projects, categories: categories});
};