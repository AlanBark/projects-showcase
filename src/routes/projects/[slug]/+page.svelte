<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>{data.title}</h1>
<h2>{data.date}</h2>
<hr />
<svelte:component this={data.content} />