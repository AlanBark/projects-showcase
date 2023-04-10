<script lang="ts">

  // import { onMount } from 'svelte';
  import Footer from '../components/Footer.svelte';
  import HeaderDesktop from '../components/HeaderDesktop.svelte';
  
  let parallax: HTMLElement;
  // layers are hidden until the page scrolls, otherwise you get a 'snap'
  let layerVisible: boolean = false;
  // controls for recenter button visibility. Since both user scrolling and the recenter trigger the scroll event, this gets a little messy
  // let setup = false;
  // let recenterVisible = false;
  // let recentering = false;
  // let aligned = 0;
  
  // Smooth scroll within a div to a specific position
  function smoothScroll(y: number, element: HTMLElement) {
  
    let startY = element.scrollTop;
    let diff = y - startY;
    let duration = 1000;
    let start: number | null = null;
  
    function easeOutCubic(x: number): number {
      return 1 - Math.pow(1 - x, 3);
    }
  
    requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      let time = timestamp - start;
      let percent = Math.min(time / duration, 1);
      percent = easeOutCubic(percent);
      element.scrollTo(0, startY + diff * percent);
      if (time < duration) {
        requestAnimationFrame(step);
      }
    })
  }
  
  function scrollToContent() {
    // Scroll to the top of the content
    smoothScroll(innerHeight * 1.6, parallax);
  }
  
  // onMount(() => {
  //   // Starting further down the page gives the effect of layers 'falling' down as you scroll up.
  //   parallax.scrollTo(0, 1000);
  //   smoothScroll(0, parallax);
  //   layerVisible = true;
  // });
  
  </script>
  <style lang="scss">
  
  $perspective: 100px;
  // Height of parallax. This is smaller than the value due to the 3d effect.
  $cover_start: 150vh;
  
  $bg: #001927;
  // match 3d svg colors
  $top: #9aa3a5;
  $left: #5b6c76;
  $right: #2c3640;
  $highlight: #1e9c74;
  
  // Parallax setup
  .parallax {
    perspective: $perspective;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    pointer-events: none;

    .name-img {
      display: block;
      position: absolute;
      bottom: 0;
      width: 80%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      transform: translateX(10%);
    }
  }

  .parallax_cover{
    padding-top: 100px;
    margin-top: -10px;
    background-color: $bg;
    display: block;
    position: absolute;
    top: $cover_start;
    left: 0;
    right: 0;
    z-index: 1;
    border-top: 2px 
  }
  
  .background_layer {
    background-color: $bg;
    background: linear-gradient(0, #001927, #000000);
    height: $cover_start;
    bottom: -50%;
    width: 100vw;
    bottom: 0;
  }
  
  // Layer distance from 'camera'
  .layer_0 {
    transform: translate3d(0px,0px,-200px) scale(3);
    transition: opacity 1s;
  }
  .layer_1 {
    transform: translate3d(0px,0px,-100px) scale(2);
    transition: opacity 1.3s;
  }
  .layer_2 {
    transition: opacity 1s;
    transform: translate3d(0px,0px,-100px) scale(2);
  }
  .layer_3 {
    transform: translate3d(0px,0px,0px) scale(1);
    transition: opacity 0.6s;
  }
  .layer_4 {
    transition: opacity 0.9s;
    transform: translate3d(0px,0px,-200px) scale(3);
  }
  .layer_5 {
    transform: translate3d(0px,0px,0px) scale(1);
    transition: opacity 0.2s;
  }
  .layer_6 {
    transform: translate3d(0px,0px,0px) scale(1);
    transition: opacity 1s;
  }
  .layer_7 {
    transform: translate3d(0px,0px,-100px) scale(2);
    transition: opacity 0.6s;
  }
  .text_layer {
    transition: opacity 0.9s;
    display: block;
  }
  
  .text_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 25%;
    font-size: 10rem;
    font-weight: 900;
    letter-spacing: 0.1rem;
    text-align: center;
    color: $highlight;
  }
  .text_right {
    justify-content: flex-end;
    width: 95%;
    height: 90%;
    align-items: end;
    font-size: 2rem;
  }
  .highlight {
    color: white;
  }
  .arrow {
    transition: opacity 0.9s;
    top: 90%;
    cursor: pointer;
    pointer-events: all;
    left: 50%;
  }
  @media only screen and (max-width: 768px) {
    .text_container {
      width: 100%;
      height: 75%;
    }
    .text_right {
      height: 70%;
      font-size: 1.5rem;
    }
    .parallax_cover {
      top: 100vh;
      background: none;
    }
    .layer {
      transform: none;
    }
  }
</style>

<div class="parallax" bind:this={parallax}>
  <HeaderDesktop />
  <div class="layer background_layer visible">
  </div>
  <div class="layer text_layer">
    <div class="text_container">
      <h1>Hello, I'm</h1>
    </div>
  </div>
  <div class="layer text_layer">
    <div class="text_container text_right">
      <h2>I make <span class="highlight">web</span> things that matter</h2>
    </div>
  </div>
  <div class="layer arrow">
    <svg on:click={scrollToContent} on:keypress={scrollToContent} id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="21.3" height="34.3" viewBox="0 0 63.4 103"><defs><style>.cls-1{fill:none;stroke:#1e9c74;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><polyline class="cls-1" points="31.6 1.5 31.6 101.5 61.9 71.2"/><line class="cls-1" x1="31.6" y1="101.5" x2="1.5" y2="71.4"/></svg>
  </div>
  <div class="layer layer_0">
    <img class="name-img" src="/a1dark.svg" alt="left A" >
  </div>
  <div class="layer layer_1">
    <img class="name-img" src="/a2dark.svg" alt="right A" >
  </div>
  <div class="layer layer_2">
    <img class="name-img" src="/l1dark.svg" alt="left L" >
  </div>
  <div class="layer layer_3">
    <img class="name-img" src="/l2dark.svg" alt="right L" >
  </div>
  <div class="layer layer_4">
    <img class="name-img" src="/e1dark.svg" alt="Left E" >
  </div> 
  <div class="layer layer_5">
    <img class="name-img" src="/e2dark.svg" alt="Right E" >
  </div>
  <div class="layer layer_7">
    <img class="name-img" src="/c2dark.svg" alt="Left C" >
  </div>
  <div class="layer layer_6">
    <img class="name-img" src="/c1dark.svg" alt="Right C">
  </div>
  <div class="parallax_cover" id="content">
    <slot />
  </div>
</div> 