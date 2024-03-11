import { NuxtLink } from '#build/components';
<template>
  <header>
    <inner-column class="wide">
      <mast-head>
        <picture class="logo">
          <img src="@/assets/images/logo.svg" alt="13Black" />
        </picture>
        <SiteNav />
      </mast-head>
    </inner-column>
  </header>
</template>

<style scoped>
header {
  /* background: var(--black); */
}

inner-column {
  padding: var(--space-l) var(--space-s); /* a loose default */
}

mast-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-width: 130px;

  @media (min-width: 768px) {
    max-width: 300px;
  }
}
</style>
