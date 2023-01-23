<script lang="ts">
  import type { PageData } from './$types';
  import type { IProject } from '../../lib/typedef/IProject';

  export let data: PageData;
</script>

<h1>Projects</h1>

<p>Here are some of my projects.</p>

{#each Object.entries(data.projects) as [category, projects]}
  <h2>{category}</h2>
  <ul>
    {#each projects as project}
      <li>
        <a href="/projects/{project.path}">{project.title}</a>
      </li>
    {/each}
  </ul>
{/each}