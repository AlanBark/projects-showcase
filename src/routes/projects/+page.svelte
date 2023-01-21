<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>Projects</h1>

<p>Here are some of my projects.</p>

{#each data.projects as project}
  <h2><a href="projects/{project.path}">{project.title}</a></h2>
{/each}