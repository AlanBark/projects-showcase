export const fetchProjects = async () => {

  const projects = import.meta.glob('/src/routes/projects/*.md');
  const projectNames = Object.entries(projects);

  const allProjects = await Promise.all(
    projectNames.map(async ([path, module]) => {
      const { metadata } = await module() as { metadata: { title: string, date: string } };
      const projectPath = path.replace('/src/routes/projects/', '').replace('.md', '');
      return {
        ...metadata,
        path: projectPath
      }
    })
  )

  return allProjects;
}