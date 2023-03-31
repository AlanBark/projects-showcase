<script lang="ts">
  import { page } from "$app/stores";
  let open = false;
</script>

<style lang="scss">
  $highlight: #1e9c74;

  .header-mobile {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    color: #000000;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.4rem 0.5rem 0.2rem 1rem;
    margin-top: 2rem;
    background-color: $highlight;
    right: auto;
  }
  .nav-icon {
    cursor: pointer;
  }
  .sidebar-mobile {
    width: 0%;
    background-color: $highlight;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 100;
    overflow-x: hidden;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
  .sidebar-mobile a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
  .open {
    width: 100%;
  }
  .close-icon {
    position: absolute;
    top: 2rem;
    left: 1rem;
    cursor: pointer;
    opacity: 0%;
    transition: 0.5s;
  }
  .open .close-icon {
    opacity: 100%;
  }
  @media only screen and (min-width: 768px) {
    .header-mobile {
      display: none;
    }
  }
</style>

<div class="header-mobile">
  <div class="sidebar-mobile" class:open="{open === true}">
    <div class="close-icon" on:click={() => open = false} on:keydown={() => open = false}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </div>
    <a href="/" on:click={() => open = !open} class:is-active={$page.url.pathname === "/"}>Home</a>
    <a href="/projects" on:click={() => open = !open} class:is-active={$page.url.pathname === "/projects"}>Projects</a>
    <a href="/contact" on:click={() => open = !open} class:is-active={$page.url.pathname === "/contact"}>Contact</a>
  </div>
  <div class="nav-icon" on:click={() => open = !open} on:keypress={() => open = !open}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
  </div>
</div>