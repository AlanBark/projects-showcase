<script lang="ts">

import { onMount } from 'svelte';
import HeaderDesktop from '../components/HeaderDesktop.svelte';

let parallax: HTMLElement;
// layers are hidden until the page scrolls, otherwise you get a 'snap'
let layerVisible: boolean = false;
// controls for recenter button visibility. Since both user scrolling and the recenter trigger the scroll event, this gets a little messy
let setup = false;
let recenterVisible = false;
let recentering = false;
let aligned = 0;
// percentage of the total height of the parallax div that the layers should be aligned to
const coefficient = 0.2494;

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

// handle recenter button click and initial animation
function alignLayers() {
  recentering = true;
  recenterVisible = false;
  smoothScroll(aligned, parallax);
}

// handle when to show recenter button
function handleScroll() {
  // never show on initial animation. Give some leeway to account for rounding errors
  if (!setup && parallax.scrollTop > aligned - 10 && parallax.scrollTop < aligned + 10) {
    setup = true;
    recentering = false;
    console.log('centered')
  }
  // hide when aligned after initial animation. 
  if (setup && recentering && parallax.scrollTop > aligned - 10 && parallax.scrollTop < aligned + 10) {
    recentering = false;
    console.log('recentered')
  }
  // show when not aligned after initial animation
  if (setup && !recentering && !recenterVisible && (parallax.scrollTop < aligned - 10 || parallax.scrollTop > aligned + 10)) {
    recenterVisible = true;
    console.log('recenter visible')
  }
}

onMount(() => {
  aligned = Math.floor(parallax.clientHeight * coefficient);
  // Starting further down the page gives the effect of layers 'falling' down as you scroll up.
  parallax.scrollTo(0, 1000);
  layerVisible = true;
  alignLayers();

  window.addEventListener('resize', () => {
    aligned = Math.floor(parallax.clientHeight * coefficient);
  });

  return () => {
    window.removeEventListener('resize', () => {
      aligned = Math.floor(parallax.clientHeight * coefficient);
    });
  }
});

</script>
<style lang="scss">

$perspective: 1px;
// Height of parallax. This is smaller than the value due to the 3d effect.
$cover_start: 500vh;

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
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  background: red;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0%;
  left: 0;
  width: 100vw;
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
}

.layer.visible {
  visibility: visible;
  opacity: 1;
}

// Layer that comes 'after' the parallax. To prevent multiple scroll bars, this is actually still within the parallax element.
// Bulk of page content goes here. Change 3d z and top to taste, for different points of where the cover crosses the parallax layers.
.parallax_cover{
  display: block;
  position: absolute;
  top: $cover_start;
  left: 0;
  right: 0;
  height: 2000px;
  z-index: 2;
  transform: translateZ(-2px) scale(3);
  background-color: $bg;
}

.background_layer {
  background-color: $bg;
  transform: translateZ(-2px) scale(3);
  background: linear-gradient(0, #001927, #000000);
  height: 150vh;
  bottom: -50%;
  width: 100vw;
  bottom: 0;
  z-index: -1;
}

// Layer distance from 'camera'
.layer_0 {
  transform: translateZ(-2px) scale(3);
  transition: opacity 1s;
}
.layer_1 {
  transform: translateZ(-4px) scale(5);
  transition: opacity 1.3s;
}
.layer_2 {
  transition: opacity 1s;
}
.layer_3 {
  transform: translateZ(-1px) scale(2);
  transition: opacity 0.6s;
}
.layer_4 {
  transform: translateZ(-2px) scale(3);
  transition: opacity 0.9s;
}
.layer_5 {
  transform: translateZ(-3px) scale(4);
  transition: opacity 0.2s;
}
.layer_6 {
  transition: opacity 1s;
}
.layer_7 {
  transform: translateZ(-1px) scale(2);
  transition: opacity 0.6s;
}
.text_layer {
  transform: translateZ(-2px) scale(3);
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
  height: 78%;
  align-items: end;
}
.button_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150%;
  width: 100%;
  text-align: center;
  z-index: 3000;
}
.mybutton {
  background-color: $highlight;
  color: $bg;
  border: none;
  border-radius: 1.5rem;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
}
.mybutton:hover {
  background-color: #21cc9b;
}

@media only screen and (max-width: 768px) {
  .text_container {
    width: 100%;
    height: 75%;
  }
  .text_right {
    height: 70%;
  }
}
.personal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.info-card {
  background-color: $top;
  padding: 1rem;
  height: 100px;
  width: 300px;
}
.info-card h2 {
  font-size: 1.5rem;
  font-weight: 900;
  color: $bg;
}
</style>

<!-- You could definitely make a component per layer, but the boilerplate looks uglier than this -->
<div class="parallax" bind:this={parallax} on:scroll={handleScroll}>
  <HeaderDesktop />
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container">
      <h1>Hello, I'm</h1>
    </div>
  </div>
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container text_right">
      <h1>I make things that (sometimes) matter</h1>
    </div>
  </div>
  <div class="layer background_layer visible">
  </div>
  <div class="layer layer_0" class:visible="{layerVisible === true}">
    <img src="/a1dark.svg" alt="left A" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_1" class:visible="{layerVisible === true}">
    <img src="/a2dark.svg" alt="right A" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_2" class:visible="{layerVisible === true}">
    <img src="/l1dark.svg" alt="left L" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_3" class:visible="{layerVisible === true}">
    <img src="/l2dark.svg" alt="right L" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_4" class:visible="{layerVisible === true}">
    <img src="/e1dark.svg" alt="Left E" style="width: 80%; height: 100%; object-fit: contain;">
  </div> 
  <div class="layer layer_5" class:visible="{layerVisible === true}">
    <img src="/e2dark.svg" alt="Right E" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_7" class:visible="{layerVisible === true}">
    <img src="/c2dark.svg" alt="Left C" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_6" class:visible="{layerVisible === true}">
    <img src="/c1dark.svg" alt="Right C" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer text_layer" class:visible="{recenterVisible === true}">
    <div class="button_container">
      <button class="mybutton" on:click={alignLayers}>center</button>
    </div>
  </div>
  <div class="parallax_cover">
    <!-- <section class="personal" role="contentinfo" aria-label="Education, work and Personal achievements">
      <div class="info-card">
        <h2>Education</h2>
        <h3>Bachelor</h3>
      </div>
      <div class="info-card">
        <h2>Work</h2>
      </div>
      <div class="info-card">
        <h2>Personal Achievements</h2>
      </div>
    </section>
    <section>
    </section> -->
  </div>
</div> 



