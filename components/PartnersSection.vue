<script setup>
const partners = ref([
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
  {
    name: "Partner",
    link: "#",
    image: "",
  },
]);
</script>

<template>
  <section class="partners-section">
    <inner-column class="full">
      <h2 class="loud-voice">Our Partners</h2>

      <ul class="partners-list">
        <li v-for="partner in partners" :key="partner.name">
          <a :href="partner.link">
            <picture>
              <img
                src="@/assets/images/background/square.jpg"
                :src="partner.image"
                :alt="partner.name"
              />
            </picture>
          </a>
        </li>
      </ul>
    </inner-column>
  </section>
</template>

<style scoped lang="scss">
h2 {
  padding-left: var(--space-s);

  max-width: 1600px; /* could be a variable in settings */
  margin-right: auto;
  margin-left: auto;
}

ul.partners-list {
  margin-top: var(--space-m);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2px;

  li {
    aspect-ratio: 1 / 1;
  }

  img {
    filter: brightness(0.08);
  }
}
</style>
