<script lang="ts">
  import type { PageData } from './$types';
  import HeaderDesktop from '../../components/HeaderDesktop.svelte';
  import PostSlider from '../../components/PostSlider.svelte';
  import WordCycle from '../../components/WordCycle.svelte';
  import type { IProject } from '$lib/typedef/IProject';
  import PostCard from '../../components/PostCard.svelte';
  import Footer from '../../components/Footer.svelte';
  export let data: PageData;

  let projects = data.data.projects;
  let categories = data.data.categories;

  let activeCategory = 'All';
</script>

<style lang="scss">
  $bg: #000102;
  $top: #9aa3a5;
  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
  }
  .content {
    margin: 0 20%;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
      margin: 0 5%;
    }
  }
  .hero {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    background: linear-gradient(0, #000b11, #000000);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 15px 15px;
  }
  @media screen and (max-width: 768px) {
    .hero {
      display: none;
      visibility: hidden;
    }
  }
  .projectList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;
  }
</style>

<svelte:head>
    <title>Alec Parkes | Projects</title> 
</svelte:head>
<div class="page">
  <HeaderDesktop />
  <div class="hero">
    <WordCycle words={["Passionate", "Personal", "Professional"]} sentence="Projects"/>
  </div>
  <div class="content">
    <PostSlider categories={categories} bind:active={activeCategory} />
    <div class="projectList">
      {#each projects as project}
        {#if activeCategory === 'All' || project.category.includes(activeCategory)}
          <PostCard project={project} />
        {/if}
      {/each}
    </div>
  </div>
  <Footer />
</div>
