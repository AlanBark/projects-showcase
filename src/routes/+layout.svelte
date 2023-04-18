<script lang="ts">
  import "../app.postcss";
  import "@fontsource/quicksand";
  import HeaderMobile from "../components/HeaderMobile.svelte";
</script>

<style>
  :global(body) {
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
  }
  :global(h1) {
    font-size: 2rem;
  }
  :global(html) {
    scroll-behavior: smooth;
  }
  .bg {
    overflow: hidden;
  }
</style>

<svelte:head>
  <link rel="icon" type="image/svg" href={"/favicon.svg"} />
  <!-- HTML Meta Tags -->
  <title>Alec Parkes - Portfolio</title>
  <meta name="description" content="Project Showcase for Alec Parkes - Developer">

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://www.alec.parkes.dev/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Alec Parkes - Portfolio">
  <meta property="og:description" content="Project Showcase for Alec Parkes - Developer">
  <meta property="og:image" content="/full.png">

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta property="twitter:domain" content="alec.parkes.dev">
  <meta property="twitter:url" content="https://www.alec.parkes.dev/">
  <meta name="twitter:title" content="Alec Parkes - Portfolio">
  <meta name="twitter:description" content="Project Showcase for Alec Parkes - Developer">
  <meta name="twitter:image" content="/full.png">

</svelte:head>
<!-- Header Desktop has to be inside the slot, and bg has to be mostly unstyled to play nice with parallax effects. Unfortunately means cant use layouts for it -->
<div class="bg">
  <HeaderMobile />
  <slot />
</div>
