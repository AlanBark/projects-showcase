<script lang="ts">
  import { page } from "$app/stores";

  let open = false;

</script>

<style>
  .header-desktop, .header-mobile {
    width: auto;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
    background: none;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  .header-mobile {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.4rem 0.5rem 0.2rem 1rem;
    margin-top: 2rem;
    background-color: #f1af8c;
    right: auto;
  }
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .nav a {
    text-decoration: none;
    color: black;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
  .is-active {
    color: rgb(12, 124, 119);
  }
  .nav a:hover {
    color: rgb(14, 156, 149);
  }
  .git {
    width: 2.5rem;
    height: auto;
  }
  @media only screen and (max-width: 768px) {
    .header-desktop {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .header-mobile {
      display: none;
    }
  }
  .nav-icon {
    cursor: pointer;
  }
  .sidebar-mobile {
    width: 0%;
    background-color: #f1af8c;
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
    gap: 4rem;
  }
  .sidebar-mobile a {
    text-decoration: none;
    color: black;
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
</style>

<div> 
  <div class="header-desktop">
    <p>Alec Parkes</p>
    <nav class="nav">
      <a href="/" class:is-active={$page.url.pathname === "/"}>Home</a>
      <a href="/projects" class:is-active={$page.url.pathname === "/projects"}>Projects</a>
      <a href="/contact" class:is-active={$page.url.pathname === "/contact"}>Contact</a>
    </nav>
    <a href="https://github.com/AlanBark" target="_blank" rel="noreferrer">
      <svg class="git" viewBox="0 0 98 96" width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
    </a>
  </div>
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
</div>