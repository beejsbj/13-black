<script setup>
const navs = ref([
  {
    heading: "Navigation",
    links: [
      {
        name: "Home",
        link: "#hero-landing",
      },
      {
        name: "About",
        link: "#about-section",
      },
      {
        name: "Services",
        link: "#services-section",
      },
      {
        name: "Contact",
        link: "#contact-section",
      },
      {
        name: "Register",
        link: "#register",
      },
    ],
  },

  {
    heading: "Contact",
    links: [
      {
        name: "Email Form",
        link: "",
      },
      {
        name: "Presentation",
        link: "",
      },
    ],
  },
]);

const socials = ref({
  links: [
    {
      name: "X",
      link: "https://x.com/DeSciWorld",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/desciworld",
    },
    {
      name: "Discord",
      link: "https://discord.gg/3X5YzJ9",
    },
    {
      name: "Telegram",
      link: "https://t.me/DeSciWorld",
    },
  ],
});
</script>

<template>
  <footer>
    <section class="links">
      <inner-column>
        <nav v-for="nav in navs" :key="nav.heading">
          <h3 class="teaser-voice">{{ nav.heading }}</h3>
          <ul>
            <li v-for="link in nav.links" :key="link.name">
              <NuxtLink class="text" :href="link.link">{{
                link.name
              }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </inner-column>
    </section>
    <picture class="logo">
      <img src="@/assets/images/logo-text.svg" alt="13Black" />
    </picture>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(0deg, transparent, var(--paper) 60%),
    var(--points);
  filter: invert(1);
  /* background: var(--ink); */
  color: white;
  position: sticky;
  z-index: -1;
  bottom: 0;
  overflow: hidden;
}

.links inner-column {
  padding-top: var(--space-3xl);

  display: grid;
  gap: var(--space-xl);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

nav ul {
  margin-top: var(--space-s);
  display: grid;
  gap: var(--space-xs);
  justify-content: start;
}

picture.logo {
  width: 100%;

  position: relative;
  bottom: -10px;
  padding-top: var(--space-l);
}
</style>
