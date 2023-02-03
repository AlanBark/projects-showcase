<script lang="ts">

</script>
<style>
  .content {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section.full {
    height: 100vh;
    width: 100vw;
  }
  .parallax-container {
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 1px;
    transform-style: preserve-3d;
  }
  .parallax-layer {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    min-height: 100px;
  }
  .parallax-far {
    background-color: burlywood;
    height: 80%;
    width: 100%;
    top: 0px;
    z-index: 0;
  }
  .parallax-layer.l1 {
    height: 100rem;
    background-color: red;
    transform: translateZ(0);
    scale: 1;
  }
  .parallax-layer.l2 {
    background-color: yellow;
    transform: translateZ(-1px);
    top: 10rem;
    scale: 1;
  }
  .parallax-layer.l3 {
    background-color: green;
    transform: translateZ(-2px);
    top: 50rem;
    scale: 1;
  }
  .showcase {
    background-color: blue;
  }
  .message {
    background-color: green;
  }
  .footer {
    background-color: black;
  }
</style>

<div class="content">
  <section class="splash full">
    <div class="parallax-far"></div>
    <div class="parallax-container">
      <div class="parallax-layer l1"></div>
      <div class="parallax-layer l2"></div>
      <div class="parallax-layer l3"></div>
      <div class="parallax-content">
        <h1>Parallax test</h1>
      </div>
    </div>
  </section>
  <!-- <section class="showcase full">

  </section>
  <section class="message full">

  </section>
  <section class="footer full">

  </section> -->
</div>



