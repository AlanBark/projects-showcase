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
      padding: 3rem 5% 6rem 5%;
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
    margin-bottom: 0.3rem;
  }
  .content :global(p) {
    margin: 0.75rem 0;
    color: $top;
    font-size: 1.4rem;
  }
  .content :global(a) {
    color: $highlight;
  }
  .content :global(h2) {
    margin: 5rem 0 1.5rem 0;
  }
  .content :global(h2) :global(a) {
    color: $highlight;
    text-decoration: none;
  }
  .content :global(ul) {
    color: $top;
    list-style-type: square;
    font-size: 1.4rem;
  }
  .content :global(ul) :global(li) {
    margin: 0.5rem 0;
  }
  .content :global(ul) :global(li)::marker {
    color: $highlight;
  }
  .content :global(img) {
    border-radius: 12px;
    margin: 0 0 1.5rem 0;
  }
</style>

<svelte:head>
  <title>{data.title} | Alec Parkes</title>
  <!-- HTML Meta Tags -->
  <meta name="description" content="{data.description}">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://www.alec.parkes.dev/projects/example">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{data.title}">
  <meta property="og:description" content="{data.description}">
  <meta property="og:image" content="{data.thumbnail}">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="alec.parkes.dev">
  <meta property="twitter:url" content="https://www.alec.parkes.dev/projects/example">
  <meta name="twitter:title" content="{data.title}">
  <meta name="twitter:description" content="{data.description}">
  <meta name="twitter:image" content="{data.thumbnail}">
</svelte:head>
<HeaderDesktop />
<div class="page">
  <article class="blog">
    <p class="date">{data.date}</p>
    <div class="content">
      <svelte:component this={data.content} />
    </div>
  </article>
</div>
<Footer />