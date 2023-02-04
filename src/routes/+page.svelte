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
  .parallax {
    overflow-y: auto;
    overflow-x: hidden;
    perspective: 100px;
    height: 100vh;
    background-color: burlywood;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .layer {
    height: 300px;
  }
  .content {
    height: 100rem;
    background-color: rebeccapurple;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 5;
    display: block;
    position: absolute;
  }
  .l1 {
    transform: translateZ(0px);
    background-color: blue;
  }
  .l2 {
    transform: translateZ(-100px);
    scale: 2;
    background-color: red;
  }
  .l3 {
    transform: translateZ(-200px);
    background-color: green;
    scale: 3;
  }
</style>

<div class="parallax">
  <div class="layer l3"></div>
  <div class="layer l2"></div>
  <div class="layer l1"></div>
  <div class="content">
    <h1>Hello World</h1>
  </div>
  <!-- <section class="showcase full">

  </section>
  <section class="message full">

  </section>
  <section class="footer full">

  </section> -->
</div>



