<script lang="ts">
    import { page } from "$app/stores";
</script>

<style>
  .is-active {
    color: red;
  }
  .nav-outer {
    width: auto;
  }
</style>

<div class="nav-outer">
  <nav class="nav">
    <a href="/" class:is-active={$page.url.pathname === "/"}>Home</a>
    <a href="/projects" class:is-active={$page.url.pathname === "/projects"}>Projects</a>
    <a href="/contact" class:is-active={$page.url.pathname === "/contact"}>Contact</a>
  </nav>
</div>