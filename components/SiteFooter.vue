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
    ],
  },

  {
    heading: "Contact",
    links: [
      {
        name: "Email Form",
        link: "https://desci.world/contact",
      },
      {
        name: "Presentation",
        link: "https://drive.google.com/file/d/1t4aTGJThBM_6ez_wcC_5gmh46j0IcLtn/view?usp=sharing",
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
    <picture class="logo">
      <img src="@/assets/images/footer-logo.svg" alt="13Black" />
    </picture>
  </footer>
</template>
<style scoped>
footer {
  background: linear-gradient(0deg, transparent, var(--paper) 80%),
    var(--points);
  /* color: white; */
  position: sticky;
  z-index: -1;
  /* position: relative; */
  bottom: 0;
  overflow: hidden;
}

.logo {
  width: 100%;

  position: relative;
  bottom: -10px;
}
</style>
