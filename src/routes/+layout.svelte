<script lang="ts">
  import "../app.postcss";
  import "@fontsource/quicksand";
  import Header from "../components/Header.svelte";
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
  .slot-container {
    margin: 1rem;
  }
</style>

<Header />

<div class="slot-container">
  <slot />
</div>
