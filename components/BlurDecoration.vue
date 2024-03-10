<template>
  <div class="blob-cont">
    <div class="color blob"></div>
    <div class="highlight blob"></div>
  </div>
</template>

<style scoped>
/* backgrounds */

.blob-cont {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99;
  overflow: hidden;
}

.blob {
  border-radius: 50%;
  filter: blur(300px) opacity(0.4);
  aspect-ratio: 1/1;
  pointer-events: none;
  transform-origin: center;
}

.color {
  background-color: var(--color);
  position: absolute;
  bottom: -50px;
  left: 100px;
  width: 500px;
}

.highlight {
  background-color: var(--color);
  position: absolute;
  top: -500px;
  right: -400px;
  width: 700px;
}
</style>
