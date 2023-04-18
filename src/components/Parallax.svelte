<script lang="ts">
  import HeaderDesktop from '../components/HeaderDesktop.svelte';
  
  let parallax: HTMLElement;

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
    smoothScroll(innerHeight, parallax);
  }
  
  </script>
  <style lang="scss">
  
  $perspective: 100px;
  // Height of parallax. This is smaller than the value due to the 3d effect.
  $cover_start: 100vh;
  
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
    transform: translateZ(0);
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
    // background-color: #00131e;
    background-color: #000000;
    border-radius: 20px 20px 0 0;
    display: block;
    position: absolute;
    top: $cover_start;
    left: 0;
    right: 0;
    z-index: 1;
    min-height: 100vh;
  }
  
  .background_layer {
    background-color: $bg;
    background: linear-gradient(0, #001927, #000000);
    width: 100vw;
    transform: translateZ(-400px) scale(5);
    height: $cover_start;
  }

  .invisible {
    opacity: 0;
  }
  
  // Layer distance from 'camera'
  .layer_a1 {
    transform: translate3d(0px,0px,-200px) scale(3);
    transition: opacity 1s;
  }
  .layer_a2 {
    transform: translate3d(0px,0px,-350px) scale(4.5);
    transition: opacity 1.3s;
  }
  .layer_l1 {
    transition: opacity 1s;
    transform: translate3d(0px,0px, -100px) scale(2);
  }
  .layer_l2 {
    transform: translate3d(0px,0px, -25px) scale(1.25);
    transition: opacity 0.6s;
  }
  .layer_e1 {
    transition: opacity 0.9s;
    transform: translate3d(0px,0px, -200px) scale(3);
  }
  .layer_e2 {
    transform: translate3d(0px,0px, -50px) scale(1.5);
    transition: opacity 0.2s;
  }
  .layer_c2 {
    transform: translate3d(0px,0px, -100px) scale(2);
    transition: opacity 1s;
  }
  .layer_c1 {
    transform: translate3d(0px,0px, 0px) scale(1);
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
    color: $top;
  }
  .text_right {
    justify-content: flex-end;
    width: 95%;
    height: 90%;
    align-items: end;
    font-size: 1.36rem;
  }
  .highlight {
    color: $highlight;
  }
  .arrow {
    transition: opacity 0.9s;
    top: 90%;
    cursor: pointer;
    pointer-events: all;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 768px) {
    .text_container {
      width: 100%;
      height: 75%;
    }
    .arrow {
      top: 77%;
    }
    .text_right {
      height: 72%;
      font-size: 1rem;
    }
    .parallax_cover {
      padding-top: 0px;
    }
  }
</style>

<div class="parallax" bind:this={parallax}>
  <HeaderDesktop background={false}/>
  <div class="layer background_layer">
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
  <div class="layer layer_a1"><img class="name-img" src="/a1dark.svg" alt="left A" ></div>
  <div class="layer layer_a2"><img class="name-img" src="/a2dark.svg" alt="right A" ></div>
  <div class="layer layer_l1"><img class="name-img" src="/l1dark.svg" alt="left L" ></div>
  <div class="layer layer_l2"><img class="name-img" src="/l2dark.svg" alt="right L" ></div>
  <div class="layer layer_e1"><img class="name-img" src="/e1dark.svg" alt="Left E" ></div> 
  <div class="layer layer_e2"><img class="name-img" src="/e2dark.svg" alt="Right E" ></div>
  <div class="layer layer_c2"><img class="name-img" src="/c2dark.svg" alt="Left C" ></div>
  <div class="layer layer_c1"><img class="name-img" src="/c1dark.svg" alt="Right C"></div>
  <div class="parallax_cover" id="content">
    <slot />
  </div>
</div> 