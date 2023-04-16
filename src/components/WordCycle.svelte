<script lang="ts">
  export let words: string[];
  export let sentence: string;
</script>

<style lang="scss">
  
  .cycle {
    display: grid;
    gap: 1rem;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    text-transform: uppercase;
    color: white;
    width: 100%;
  }

  .cycle__items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: cycle 6s infinite;
  }

  @keyframes cycle {
    0% {
      transform: translateY(40%);
    }
    23% {
      transform: translateY(40%);
    }
    33% {
      transform: translateY(13.3%);
    }
    56% {
      transform: translateY(13.3%);
    }
    66% {
      transform: translateY(-13.3%);
    }
    90% {
      transform: translateY(-13.3%);
    }
    100% {
      transform: translateY(-40%);
    }
  }

  .cycle__items h1 {
    text-align: right;
    opacity: 0;
    animation: fade 6s infinite;
  }
  .cycle__items h1:nth-child(1) {
    animation-delay: 4s;
  }
  .cycle__items h1:nth-child(2) {
    animation-delay: 0s;
  }
  .cycle__items h1:nth-child(3) {
    animation-delay: 2s;
  }
  .cycle__items h1:nth-child(4) {
    animation-delay: 4s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    23% {
      opacity: 0;
    }
    33% {
      opacity: 1;
    }
    56% {
      opacity: 1;
    }
    66% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(165, 165, 165);
  }

  .cycle__items h1:nth-child(4) {
    animation: repeated 6s infinite;
    animation-delay: 0s;
  }
  @keyframes repeated {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<div class="cycle">
  <div class="cycle__items">
    {#each words as word}
      <h1>{word}</h1>
    {/each}
    <h1>{words[0]}</h1>
  </div>
  <div class="right">
    <h1>
      {sentence}
    </h1>
  </div>
</div>