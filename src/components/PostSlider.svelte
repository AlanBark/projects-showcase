<script lang="ts">
  export let categories: string[];
  export let active: string = "All";
</script>

<style lang="scss">
  $top: #9aa3a5;
  $left: #5b6c76;
  $highlight: #1e9c74;
  .PostSlider {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1.3rem;
  }
  p {
    color: $top;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    z-index: 2;
    transition: all 0.2s ease-in-out;
  }
  p:hover {
    color: white;
    border-bottom: 2px solid white;
  }
  .active, .active:hover {
    color: white;
    border-bottom: 2px solid $highlight;
  }
</style>

<div class="PostSlider">
  <p on:keydown on:click={() => active = 'All'} class:active="{active === 'All'}">All</p>
  {#each categories as category}
    <p on:keydown on:click={() => active = category} class:active="{active === category}">{category}</p>
  {/each}
</div>