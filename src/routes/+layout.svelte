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

<div class="bg">
  <HeaderMobile />
  <slot />
</div>
