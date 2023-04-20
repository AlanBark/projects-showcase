<script lang="ts">
  import { ArrowForwardOutline } from "svelte-ionicons";
  export let title: string;
  export let text: string;
  export let link: string;
</script>
<style lang="scss">

  .info-card {
    background-color: rgb(6, 6, 8);
    background: linear-gradient(rgb(6, 6, 8), rgb(0, 0, 0));
    padding: 2.5rem;
    border: 1px solid #303131;
    border-radius: 6px;
    padding-top: 8rem;
    position: relative;
    z-index: 1;
    text-decoration: none;
    color:#9aa3a5;
  }

  .info-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgb(8, 8, 10) 50%, rgb(0, 0, 0));
    border-radius: 6px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    z-index: -1;
  }

  .info-card:hover::before {
    opacity: 1;
  }

  .info-card:hover {
    cursor: pointer;
  }

  .card-title {
    color: white;
    margin-top: 1rem;
  }
  .card-text {
    color: #9aa3a5;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }
  .card-link {
    color: #1e9c74;
    font-size: 1rem;
    text-decoration: none;
    margin-top: 1rem;
    padding-top: 1rem;
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-end;
  }
  .card-link a {
    color: #1e9c74;
    font-size: 1rem;
    text-decoration: none;
  }
  .card-link a:hover {
    text-decoration: underline;
  }
</style>

<a href={link} class="info-card">
  <slot />
  <h2 class="card-title">{title}</h2>
  <p class="card-text">{text}</p>
  <div class="card-link">
    <a href="/">Read more</a>
      <ArrowForwardOutline size="20"/>
  </div>
</a>