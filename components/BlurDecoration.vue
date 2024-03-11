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
  filter: blur(30vmin) opacity(0.4);
  aspect-ratio: 1/1;
  pointer-events: none;
  transform-origin: center;
}

.color {
  background-color: var(--color);
  position: absolute;

  bottom: -4.5vmin;
  left: 9vmin;
  width: 45vmin;
}

.highlight {
  background-color: var(--color);
  position: absolute;

  top: -45vmin;
  right: -37vmin;
  width: 65vmin;
}
</style>
