<script lang="ts">

import { onMount } from 'svelte';
import Footer from '../components/Footer.svelte';
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

function scrollToContent() {
  // Scroll to the top of the content
  smoothScroll(innerHeight * 1.6, parallax);
}

onMount(() => {
  // Starting further down the page gives the effect of layers 'falling' down as you scroll up.
  parallax.scrollTo(0, 1000);
  smoothScroll(0, parallax);
  layerVisible = true;
});

</script>
<style lang="scss">

$perspective: 100px;
// Height of parallax. This is smaller than the value due to the 3d effect.
$cover_start: 230vh;

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
  background: $bg;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -0.5%;
  left: 0;
  width: 100vw;
  visibility: hidden;
  opacity: 0;
  display: flex;
  justify-content: center;
  z-index: 50;
  pointer-events: none;
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
  z-index: 51;
  background-color: $bg;
}

.background_layer {
  background-color: $bg;
  background: linear-gradient(0, #001927, #000000);
  height: 180vh;
  bottom: -50%;
  width: 100vw;
  bottom: 0;
  z-index: -1;
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
.personal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.info-card {
  background-color: none;
  border: 1px solid rgb(95, 95, 95);
  padding: 1rem;
  height: 100%;
  width: 300px;
  color: #9aa3a5;
  border-radius: 5px;
}
.info-card h2 {
  font-size: 1.5rem;
  font-weight: 900;
  color: white;
}
.highlight {
  color: white;
}
.arrow {
  transition: opacity 0.9s;
  top: 90%;
  cursor: pointer;
  z-index: 0;
  pointer-events: all;
}
.intro {
  color: $top;
  font-size: 1.7rem;
  text-align: center;
  margin: 0% 25% 0% 25%;
  margin-bottom: 3rem;
  margin-bottom: 100vh;
}
.intro a {
  color: $highlight;
  font-size: 1rem;
}
.intro-sec {
  margin-top: 3rem;
}
.intro .highlight {
  color: $highlight;
}
.intro-col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0% 10% 0% 10%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.col-left {
  text-align: left;
}
.col-right {
  text-align: right;
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
  .intro-sec {
    font-size: 1.2rem;
  }
  .intro {
    margin: 0% 5% 0% 5%;
    margin-bottom: 50vh;
  }
  .intro-col {
    font-size: 1rem;
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

<!-- You could definitely make a component per layer, but the boilerplate looks uglier than this -->
<div class="parallax" bind:this={parallax}>
  <HeaderDesktop />
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container">
      <h1>Hello, I'm</h1>
    </div>
  </div>
  <div class="layer text_layer" class:visible="{layerVisible === true}">
    <div class="text_container text_right">
      <h2>I make <span class="highlight">web</span> things that matter</h2>
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
  <div class="layer arrow" class:visible="{layerVisible === true}">
    <svg on:click={scrollToContent} on:keypress={scrollToContent} id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="21.3" height="34.3" viewBox="0 0 63.4 103"><defs><style>.cls-1{fill:none;stroke:#1e9c74;stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}</style></defs><polyline class="cls-1" points="31.6 1.5 31.6 101.5 61.9 71.2"/><line class="cls-1" x1="31.6" y1="101.5" x2="1.5" y2="71.4"/></svg>
  </div>
  <div class="parallax_cover" id="content">
    <section class="intro" role="contentinfo" aria-label="Intro about me">
      <p class="intro-sec"><span class="highlight">Alec Parkes</span> is a full stack Web Developer, Client Development Liason and tech enthusiast, currently based in Brisbane.</p>
      <div class="intro-sec">
        <div class="intro-col">
          <p class="highlight col-left">SDL Technology</p>
          <p class="col-right">Web Developer & Client Liason, 2020 - 2022</p>
        </div>
        <div class="intro-col">
          <p class="highlight col-left">QUT</p>
          <p class="col-right">Bachelor of IT, Major in CompSci (6.6), 2022 </p>
        </div>
      </div>
      <p class="intro-sec">My passion for technology and problem solving has led me to take on a wide variety of roles during my employment</p>
      <a href="/projects/workSDL">Read More</a>
    </section>
    <!-- <section class="personal" role="contentinfo" aria-label="Education, work and Personal achievements">
      <div class="info-card">
        <h2>Education</h2>
        <h3>Queensland University of Technology</h3>
        <h4>Bachelor of IT in Computer Science / Dec 2022</h4>
        <ul>
          <li>GPA 6.6</li>
          <li>Min Networks and Security</li>
        </ul>
      </div>
      <div class="info-card">
        <h2>Work</h2>
        <h3>SDL Technology - Full Stack Web Developer / 2020 - 2022</h3>
        <h4>Skills used here</h4>
        <h3>QUT - Tutor / 2023 - Current</h3>
      </div>
      <div class="info-card">
        <h2>Personal Skillset</h2>
        <ul>
          <li>Strong interpersonal & communication skills</li>
          <li>Real world experience maintaining and developing websites for 
            small, medium, and enterprise level businesses. 
          </li>
          <li>Comfortable with SVN, GIT, various Linux and Windows 
            (server) environments</li>
          <li>Experience with Agile development methodologies</li>
          <li>Experience with various full stack web technologies including HTML, CSS, 
            Js, PHP, and SQL</li>
        </ul>
      </div>
    </section> -->
    <section>
    </section>
    <Footer />
  </div>
</div> 



