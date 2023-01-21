<script>
  import { page } from '$app/stores';
</script>

<h1>Oops!</h1>
<p>Looks like something went wrong.</p>
<h1>{$page.status}: {$page.error?.message}</h1>