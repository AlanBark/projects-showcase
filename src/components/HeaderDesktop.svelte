<script lang="ts">
  import { page } from "$app/stores";
  export let background: boolean = true;
</script>

<style lang="scss">

  $highlight: #1e9c74;

  .header-desktop {
    width: auto;
    display: flex;
    padding: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    align-items: center;
    justify-content: space-between;
    z-index: 100;
    position: relative;
    color: $highlight;
  }
  .nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }
  .nav a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
  .nav a.is-active {
    color: rgb(12, 124, 119);
  }
  .nav a:hover {
    color: rgb(14, 156, 149);
  }
  .git {
    width: 2.5rem;
    height: auto;
  }
  .outline svg {
    display: none;
  }
  .outline {
    font-size: 1rem;
    font-weight: 500;
    color: $highlight;
    text-decoration: none;
  }
  @media only screen and (max-width: 768px) {
    .nav {
      display: none;
    }
    .git {
      display: none;
    }
    .header-desktop {
      flex-direction: row-reverse;
      padding: 2.5rem 2rem;
    }
    .outline {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 0rem;
    }
    .outline svg {
      display: block;
    }
  }
  .background {
    background-color: #000000;
  }
</style>

<div class="header-desktop" class:background={background}>
  <a class="outline" href="/contact">
    <p>Alec Parkes</p>
    <!-- Redirect svg -->
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" width="20" height="20" viewBox="0 0 91.1 91.1"><defs><style>.cls-1{fill:none;stroke:#1e9c74;stroke-linecap:round;stroke-linejoin:round;stroke-width:5px;}</style></defs><polyline class="cls-1" points="81.4 43.8 81.4 89.6 1.5 89.6 1.5 9.6 46.7 9.6"/><polyline class="cls-1" points="41.4 49.6 89.6 1.5 89.6 34.6"/><line class="cls-1" x1="89.6" y1="1.5" x2="56.4" y2="1.5"/></svg>
  </a>
  <nav class="nav">
    <a href="/" class:is-active={$page.url.pathname === "/"}>Home</a>
    <a href="/projects" class:is-active={$page.url.pathname === "/projects"}>Projects</a>
    <a href="/contact" class:is-active={$page.url.pathname === "/contact"}>Contact</a>
  </nav>
  <a href="https://github.com/AlanBark" target="_blank" rel="noreferrer">
    <svg class="git" viewBox="0 0 98 96" width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
  </a>
</div>