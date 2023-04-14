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
  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .blog {
    margin: 3rem 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 768px) {
      margin: 3rem 5%;
    }
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
  .content {
    border-radius: 6px;
    padding: 1.5rem;
    background-color: #121414;
  }
  .content :global(p) {
    margin: 0.75rem 0;
  }
</style>

<div class="page">
  <HeaderDesktop />
  <article class="blog">
    <p class="title">{data.title}</p>
    <p class="date">{data.date}</p>
    <div class="content">
      <svelte:component this={data.content} />
    </div>
  </article>
  <Footer />
</div>