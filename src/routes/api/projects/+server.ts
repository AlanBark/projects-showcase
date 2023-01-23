import { json } from "@sveltejs/kit";
import { fetchProjects } from "../../../lib/utils/fetchProjects";

export const GET = async () => {
  const projects = await fetchProjects();


  interface ISorted {
    [key: string]: [{ title: string, date: string, category: string, path: string }];
  }

  let sortedProjects: ISorted = {};

  projects.forEach((project) => {
    if (sortedProjects.hasOwnProperty(project.category)) {
      sortedProjects[project.category].push(project);
    } else {
      sortedProjects[project.category] = [project];
    }
  });
  return json(sortedProjects);
};