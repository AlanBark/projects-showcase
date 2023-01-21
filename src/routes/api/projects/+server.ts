import { json } from "@sveltejs/kit";
import { fetchProjects } from "../../../lib/utils/fetchProjects";

export const GET = async () => {
  const projects = await fetchProjects();

  return json(projects);
};