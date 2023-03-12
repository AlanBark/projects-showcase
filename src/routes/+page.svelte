<script lang="ts">

</script>
<style lang="scss">
@use "sass:math";

$perspective: 1px;
$close: #111818;
//#04724D #B8DBD9
$far: #04724D;

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
  transform-style: preserve-3d;
  background-color: rgb(253, 251, 229);
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: -50%;
  left: 0;
}

.parallax_cover{
  background: $close;
  display: block;
  position: absolute;
  top: 400%;
  left: 0;
  right: 0;
  height: 2000px;
  z-index: 2;
  transform: translateZ(-2px) scale(3);
}

$layers: 2;

@for $i from 0 through $layers {
  $x: math.div($layers - $i, 2);
  $color: mix($close, $far, math.div($i, $layers) * 100 * 1%);
  .layer_#{$i}{
    transform: translateZ(-2 * $x - 2px) scale($layers - $i + 3);
    // background-image: linear-gradient(135deg, transparent 66%, $color 66.01%), linear-gradient(45deg, $color 34%, transparent 34.01%);
    //   background-position: $x*200px $x*120*-1px;
    //   background-size: 200px 100%;
    //   background-repeat:repeat-x;
  }
}

</style>

<div class="parallax">
  <div class="layer layer_0">
    <img src="/atop.svg" alt="abot" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <div class="layer layer_1">
    <img src="/abot.svg" alt="abot" style="width: 100%; height: 100%; object-fit: cover;">
  </div>
  <!-- <div class="layer layer_2">
  </div>
  <div class="layer layer_3">
  </div>
  <div class="layer layer_4">
  </div> 
  <div class="layer layer_5">
  </div>
  <div class="layer layer_6">
  </div> -->
  <div class="parallax_cover">
    <section>
      <h1>Parallax</h1>
      <p>Scroll down to see the effect</p>
    </section>
  </div>
</div> 



