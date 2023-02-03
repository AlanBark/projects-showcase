<script lang="ts">
  import type { PageData } from './$types';
  import Slider from '../../components/Slider.svelte';

  export let data: PageData;
</script>

{#each Object.entries(data.projects) as [category, projects]}
  <Slider category={category} projects={projects} />
{/each}