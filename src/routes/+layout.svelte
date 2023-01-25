<script lang="ts">
  import "../app.postcss";
  import Header from "../components/Header.svelte";
</script>

<style>
  :global(body) {
    background-color: #2F2F4C;
  }
</style>

<Header />

<slot />
