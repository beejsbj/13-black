<script setup>
const naee = "hi";
</script>

<template>
  <section class="dot-pattern">
    <inner-column>
      <text-content>
        <h1 class="booming-voice">
          The Leading Inregrated Web3 Growth Consultancy
        </h1>
        <p class="notice-voice">
          We align your content, ecosystem and developer experience to ignite
          growth
        </p>
      </text-content>

      <button class="button loud-voice">Get in Touch</button>
    </inner-column>

    <div class="spade-bg">
      <!-- <img src="" /> -->
    </div>
    <div class="clubs-bg"></div>
  </section>
</template>

<style scoped>
section {
  position: relative;

  overflow: hidden;
  /* background: var(--points); */
}

inner-column {
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: start;
  align-items: end;
  min-height: 85vmin;
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-3xl);
}

text-content {
  display: grid;
  gap: var(--space-s);
  justify-items: start;
  align-items: start;
  max-width: 1000px;
  margin: var(--space-l) 0;
}

.clubs-bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 300px;
  rotate: 40deg;
  animation: rotate -4s 10s infinite linear alternate-reverse;
  background: var(--points);
  clip-path: var(--club-clip);
}

.spade-bg {
  position: absolute;
  bottom: 100px;
  right: 20px;
  width: 500px;
  height: 500px;
  animation: rotate 10s infinite linear alternate-reverse;
  rotate: -40deg;

  background: linear-gradient(0deg, transparent 0%, var(--paper) 60%),
    var(--points);
  clip-path: var(--spade-clip);
  /* background-size: 30px; */
}

@keyframes rotate {
  0% {
    /* transform: perspective(1000px) rotateY(0deg); */
    transform: perspective(1000px) rotateX(45deg) rotateY(-35deg);

    background-position: 10% 10%;
  }

  100% {
    /* transform: perspective(1000px) rotateY(0deg); */
    transform: perspective(1000px) rotateX(50deg) rotateY(-30deg);
    /* background-position: 100%; */
  }
}
</style>
