<style lang="scss">

.face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  box-sizing: border-box;
}

.cube {
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
}

.wrap {
  height: 100vh;
  width: 100%;
  perspective: 600px;
  margin-top: 100px;
}

.front {
  background: #f00;
}

.top {
  background: #0f0;
  transform: rotateX(90deg) translateZ(50px);
}

.left {
  background: #00f;
  transform: rotateY(-90deg) translateZ(50px);
}


</style>

<div class="wrap">
  <div class="cube">
    <div class="face front"></div>
    <div class="face top"></div>
    <div class="face left"></div>
  </div>
</div>