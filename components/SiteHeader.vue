import { NuxtLink } from '#build/components';
<template>
  <header>
    <inner-column class="wide">
      <mast-head>
        <picture class="logo">
          <img src="@/assets/images/logo.svg" alt="13Black" />
        </picture>
        <nav>
          <ul>
            <li>
              <NuxtLink class="text" href="#about-section">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink class="text" href="#speaker-section">About</NuxtLink>
            </li>
            <li><NuxtLink class="text" href="#register">Contact</NuxtLink></li>
            <li class="toggle">
              <!-- <ToggleLight /> -->
            </li>
          </ul>
        </nav>
      </mast-head>
    </inner-column>
  </header>
</template>

<style scoped>
header {
  /* background: var(--black); */
}

inner-column {
  padding: var(--space-s); /* a loose default */
}

mast-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  gap: var(--space-l);
  justify-content: space-between;
}

nav a {
  color: var(--white);

  @media (max-width: 500px) {
    font-size: var(--step--1);
  }
}
</style>
