<script lang="ts">

import { onMount } from 'svelte';

let parallax: HTMLElement;
let layerVisible: boolean = false;

// Smooth scroll to a position where all layers are aligned.
function alignLayers(alignedY: number, parallax: HTMLElement) {

  let startY = parallax.scrollTop;
  let diff = alignedY - startY;
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
    parallax.scrollTo(0, startY + diff * percent);
    if (time < duration) {
      requestAnimationFrame(step);
    }
  })
}



onMount(() => {
  // Change based on height of each layer. Resultion dictates how accurate the alignment will be.
  // Easiest to just align the layers manually, then divide the scroll pos by the total height.
  parallax.scrollTo(0, 1000);
  layerVisible = true;
  const coefficient = 0.2494;
  let aligned = Math.floor(parallax.clientHeight * coefficient);
  alignLayers(aligned, parallax);
});

</script>
<style lang="scss">
@use "sass:math";

$perspective: 1px;
$close: #111818;
//#04724D #B8DBD9
$far: rgb(196, 150, 120);

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
  background-color: rgb(253, 251, 229);
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -50%;
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

.parallax_cover{
  background: $close;
  display: block;
  position: absolute;
  top: 450%;
  left: 0;
  right: 0;
  height: 2000px;
  z-index: 2;
  transform: translateZ(-2px) scale(3);
}

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
  transform: translateZ(-4px) scale(5);
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
  color: $far;
  font-size: 10rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-align: center;
}

.text_right {
  justify-content: flex-end;
  width: 95%;
  height: 80%;
  align-items: end;
}

</style>

<!-- You could definitely make a component per layer, but the boilerplate looks uglier than this -->
<div class="parallax" bind:this={parallax}>
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container">
      <h1>Hello, I'm</h1>
    </div>
  </div>
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container text_right">
      <h1>I make things that matter (sometimes)</h1>
    </div>
  </div>
  <div class="layer layer_0" class:visible="{layerVisible === true}">
    <img src="/a1.svg" alt="left A" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_1" class:visible="{layerVisible === true}">
    <img src="/a2.svg" alt="right A" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_2" class:visible="{layerVisible === true}">
    <img src="/l1.svg" alt="left L" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_3" class:visible="{layerVisible === true}">
    <img src="/l2.svg" alt="right L" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_4" class:visible="{layerVisible === true}">
    <img src="/e1.svg" alt="Left E" style="width: 80%; height: 100%; object-fit: contain;">
  </div> 
  <div class="layer layer_5" class:visible="{layerVisible === true}">
    <img src="/e2.svg" alt="Right E" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_7" class:visible="{layerVisible === true}">
    <img src="/c2.svg" alt="Left C" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="layer layer_6" class:visible="{layerVisible === true}">
    <img src="/c1.svg" alt="Right C" style="width: 80%; height: 100%; object-fit: contain;">
  </div>
  <div class="parallax_cover">
    <section>
      <h1>Parallax</h1>
      <p>Scroll down to see the effect</p>
    </section>
  </div>
</div> 



