<script lang="ts">
  import HeaderDesktop from '../../../components/HeaderDesktop.svelte';
  import type { PageData } from './$types';
  import '$lib/styles/prismjs.css';
  import Footer from '../../../components/Footer.svelte';
  export let data: PageData;
</script>
<style lang="scss">
  $bg: #000000;
  $top: #9aa3a5;
  $highlight: #1e9c74;

  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 3rem 20% 6rem 20%;
    @media screen and (max-width: 768px) {
      padding: 3rem 5% 6rem 20%;
    }
  }
  .blog {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }
  .date {
    font-size: 1rem;
    color: $top;
    margin-bottom: 1.5rem;
  }
  .content :global(p) {
    margin: 0.75rem 0;
  }
  .content :global(a) {
    color: $highlight;
  }
</style>

<HeaderDesktop />
<div class="page">
  <article class="blog">
    <p class="title">{data.title}</p>
    <p class="date">{data.date}</p>
    <div class="content">
      <svelte:component this={data.content} />
    </div>
  </article>
</div>
<Footer />