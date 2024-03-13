<script setup>
const buttons = ref([
  {
    name: "Primary",
    class: "button",
  },
  {
    name: "Text",
    class: "text",
  },
  {
    name: "Outline",
    class: "button-filled",
  },
  {
    name: "Outline Ink",
    class: "button-filled ink",
  },

  {
    name: "Disabled Button",
    class: "button",
    disabled: true,
  },
  {
    name: "Disabled Text",
    class: "text",
    disabled: true,
  },

  {
    name: "Disabled Outline",
    class: "button-filled",
    disabled: true,
  },

  {
    name: "Disabled Outline Ink",
    class: "button-filled ink",
    disabled: true,
  },
]);
</script>

<template>
  <section>
    <inner-column>
      <div class="buttons">
        <h2 class="attention-voice">Buttons and Anchors</h2>
        <p>These classes help style the buttons and anchors across the site.</p>
        <ul>
          <li v-for="button in buttons">
            <button :class="button.class" :disabled="button.disabled">
              {{ button.name }}
            </button>
          </li>
        </ul>
      </div>
    </inner-column>
  </section>
</template>

<style scoped lang="scss">
ul {
  margin-top: var(--space-xl);

  display: grid;
  align-items: center;
  justify-items: center;

  gap: var(--space-l);

  grid-template-columns: 1fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--space-xl);
  }
}
</style>
