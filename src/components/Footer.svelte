<script lang="ts">
  export let inContainer: boolean = false;  
</script>
<style>
  .footer {
    background-color: #000000;
    color: #9aa3a5;
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    padding-bottom: 1rem;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
    background-color: #464a4b;

  }
  .links {
    padding: 0.5rem;
    border-bottom: 2px solid #464a4b;
    border-right: 1px solid #464a4b;
    border-radius: 0px 0px 4px 0px;
    margin: 0.5rem
  }
  ul {
    list-style: none;
    padding-top: 0.5rem;
    padding-left: 0px;
  }
  li {
    padding: 0.2rem 0;
  }
  a {
    color: #1e9c74;
    font-size: 1rem;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .copywrite {
    font-size: 0.8rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    font-style: italic;
}

</style>

<div class="footer">
  <div class="links">
    <h2>Pages</h2>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </div>
  <div class="links">
    <h2>Contact</h2>
    <ul>
      <li><a href="mailto:alec.parkes.f@gmail.com">Email</a></li>
      <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/alec-parkes-1754a817a/">LinkedIn</a></li>
      <li><a target="_blank" rel="noreferrer" href="https://github.com/AlanBark">GitHub</a></li>
    </ul>
  </div>
  <div class="links copywrite">
    <p>© 2023 Alec Parkes</p>
    <p>This website is hosted using <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a> and was made in <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">Sveltekit</a></p>
  </div>
</div>