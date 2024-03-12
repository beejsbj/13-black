<script setup>
// const ui = useInterfaceStore();

const links = [
  {
    name: "Home",
    link: "#hero-landing",
  },
  {
    name: "About",
    link: "#about-section",
  },
  {
    name: "Events",
    link: "#event-section",
  },
  {
    name: "Speakers",
    link: "#speaker-section",
  },
  {
    name: "Register",
    link: "#register",
  },
];
</script>

<template>
  <nav class="desktop">
    <ul>
      <li v-for="link in links" :key="link.name">
        <NuxtLink class="text" :href="link.link">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>

  <nav class="mobile">
    <picture class="menu-icon">
      <img src="@/assets/images/interface/menu.svg" alt="" />
    </picture>
  </nav>
</template>

<style scoped lang="scss">
nav ul {
  max-width: 250px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-m);
}

nav a {
  @media (max-width: 500px) {
    font-size: var(--step--1);
  }
}

.menu-icon {
  max-width: 30px;
}

@media (min-width: 768px) {
  nav.mobile {
    display: none;
  }
  nav.desktop {
    display: block;
  }
}

@media (max-width: 768px) {
  nav.desktop {
    display: none;
  }
  nav.mobile {
    display: block;
  }
}
</style>
