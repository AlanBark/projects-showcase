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
</style>

<svelte:head>
  <link rel="icon" type="image/svg" href={"/favicon.svg"} />
</svelte:head>
<!-- Header Desktop has to be inside the slot, and bg has to be mostly unstyled to play nice with parallax effects. Unfortunately means cant use layouts for it -->
<div>
  <HeaderMobile />
  <slot />
</div>
