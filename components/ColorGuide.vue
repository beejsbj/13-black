<script setup>
const colors = ref([
  [
    {
      name: "Paper",
      variable: "--paper",
    },
    {
      name: "Ink",
      variable: "--ink",
    },
  ],
  [
    {
      name: "Gray",
      variable: "--gray",
    },
    {
      name: "Gray Light",
      variable: "--gray-light",
    },
    {
      name: "Gray Lighter",
      variable: "--gray-lighter",
    },
    {
      name: "Gray Dark",
      variable: "--gray-dark",
    },
    {
      name: "Gray Darker",
      variable: "--gray-darker",
    },
  ],

  [
    {
      name: "Primary",
      variable: "--color",
    },
  ],
  [
    {
      name: "Primary Light",
      variable: "--color-light",
    },
    {
      name: "Primary Lighter",
      variable: "--color-lighter",
    },
    {
      name: "Primary Lightest",
      variable: "--color-lightest",
    },
  ],
  [
    {
      name: "Primary Dark",
      variable: "--color-dark",
    },
    {
      name: "Primary Darker",
      variable: "--color-darker",
    },
    {
      name: "Primary Darkest",
      variable: "--color-darkest",
    },
  ],

  [],
  [
    {
      name: "Gradient Dark",
      variable: "--gradient-dark",
    },
    {
      name: "Gradient Light",
      variable: "--gradient-light",
    },
    {
      name: "Gradient Color",
      variable: "--gradient-color",
    },
  ],
  [
    {
      name: "Points",
      class: "points",
    },
    {
      name: "Radial Points",
      class: "radial-points",
    },
  ],
]);

const hue = ref(160);

watch(hue, (newVal, oldVal) => {
  document.documentElement.style.setProperty("--hue", `${newVal}`);
  document.documentElement.style.setProperty(
    "--hue-rotate",
    `${newVal - 160}deg`
  );
});

function getColorCode(color) {
  //   return getComputedStyle(document.documentElement).getPropertyValue(color);
}
</script>

<template>
  <section>
    <inner-column>
      <div class="color-guide">
        <h2 class="attention-voice">Colors</h2>
        <p>
          These are the colors used in the app. They are defined in
          <code>settings.css</code> and are available as CSS variables which are
          used throughout the app.
        </p>

        <ul class="colors" v-for="colorGroup in colors">
          <li v-for="color in colorGroup" :key="color.name">
            <template v-if="!color.class">
              <div
                class="pallete"
                :style="`background: var(${color.variable})`"
              />
              <div class="color-name">
                <code>{{ color.variable }}</code>
              </div>
            </template>
            <template v-else>
              <div class="pallete" :class="color.class" />
              <div class="color-name">
                <code>.{{ color.class }}</code>
                <code>{{ getColorCode(color.variable) }}</code>
              </div>
            </template>
          </li>
        </ul>
      </div>
    </inner-column>
  </section>
</template>

<style scoped lang="scss">
.colors {
  margin-top: var(--space-xl);
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
div.pallete {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: var(--corners);
  margin-bottom: var(--space-2xs);
  //   text-align: center;
}
form-field {
  max-width: 50%;
}
</style>
