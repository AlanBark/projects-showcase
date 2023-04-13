<script lang="ts">
  import type { PageData } from './$types';
  import Slider from '../../components/Slider.svelte';
    import HeaderDesktop from '../../components/HeaderDesktop.svelte';

  export let data: PageData;
</script>

<style lang="scss">
  $bg: #000102;
  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>

<svelte:head>
    <title>Alec Parkes | Projects</title> 
</svelte:head>
<div class="page">
  <HeaderDesktop />
  {#each Object.entries(data.projects) as [category, projects]}
    <Slider category={category} projects={projects} />
  {/each}
</div>