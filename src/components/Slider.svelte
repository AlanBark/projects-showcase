<script lang="ts">
  import type { IProject } from "../lib/typedef/IProject";
  export let projects: IProject[];
  export let category: string;
</script>

<style>
  .slider {
    display: flex;
  }
  .project-card {
    flex-grow: 1;
    border: 4px solid blue;
    border-radius: 8px;
  }
  .preview {
    width: 100%;
    height: 100px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<section>
  <h1>{category}</h1>
  <div class="slider">
    {#each projects as project}
      <a href={"projects/" + project.path}>
        <div class="project-card">
          <div class="preview">
            <img class="thumbnail" src={project.thumbnail} alt={project.title} />
          </div>
          <div class="card-info">
            <h2>
              {project.title}
            </h2>
            {project.date}
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>