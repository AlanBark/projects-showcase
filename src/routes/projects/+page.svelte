<script lang="ts">
  import type { PageData } from './$types';
  import HeaderDesktop from '../../components/HeaderDesktop.svelte';
  import PostSlider from '../../components/PostSlider.svelte';
    import WordCycle from '../../components/WordCycle.svelte';

  export let data: PageData;

  console.log(Object.entries(data.projects).length);

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
    margin: 3rem 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
      margin: 3rem 5%;
    }
    width: 100%;
    position: relative;
    top: 30vh;
  }
  .hero {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 35vh;
    background: linear-gradient(0, #000b11, #000000);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0 0 15px 15px;
  }
  .hero p {
    color: $top;
    margin-top: 0rem;
    margin-bottom: 3rem;
  }
  @media screen and (max-width: 768px) {
    .hero {
      display: none;
      visibility: hidden;
    }
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
    <PostSlider projects={data.projects} />
  </div>
</div>