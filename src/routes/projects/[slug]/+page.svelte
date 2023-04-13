<script lang="ts">
  import HeaderDesktop from '../../../components/HeaderDesktop.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>
<style lang="scss">
  $bg: #000102;
  .page {
    background-color: $bg;
    color: white;
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .blog {

  }
</style>

<div class="page">
  <HeaderDesktop />
  <section class="blog" role="contentinfo" aria-label="Blog Content">
    <h1>{data.title}</h1>
    <h2>{data.date}</h2>
    <hr />
    <svelte:component this={data.content} />
  </section>
</div>