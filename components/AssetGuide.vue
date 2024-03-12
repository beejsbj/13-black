<script setup>
const assets = [
  {
    name: "Logo",
    image: "/images/logo.svg",
  },
  {
    name: "Logo Icon",
    image: "/images/logo-icon.svg",
  },
  {
    name: "Logo Text",
    image: "/images/logo-text.svg",
  },
  {
    name: "Noise",
    image: "/images/noise.svg",
  },
  {
    name: "Menu Icon",
    image: "/images/interface/menu.svg",
  },
  {
    name: "Spade",
    image: "/images/background/spade.svg",
    class: "spade",
    isMask: true,
  },
  {
    name: "Clubs",
    image: "/images/background/clubs.svg",
    class: "clubs",
    isMask: true,
  },
];

function downloadSVG(asset) {
  const svg = document.createElement("a");
  svg.href = asset.image;
  svg.download = `${asset.name}.svg`;
  svg.click();
}
</script>

<template>
  <section>
    <inner-column>
      <div class="asset-guide">
        <h2 class="attention-voice">Decoration</h2>
        <p>These are the assets and decorations used in the app.</p>

        <ul class="asset-list">
          <li v-for="asset in assets" :key="asset.name">
            <div class="mask" :class="asset.class" v-if="asset.isMask" />

            <picture v-else>
              <img :src="asset.image" :alt="asset.name" />
            </picture>
            <p>{{ asset.name }}</p>
            <button class="button" @click="downloadSVG(asset)">
              Download SVG
            </button>
          </li>
        </ul>

        <div class="css-code">
          <p>CSS on how to implement the noise texture through the site</p>

          <pre>
			<code>
body {
	position: relative;

	background: var(--paper);
	color: var(--ink);

	/* Control contrast & brightess of grain texture for varying effects */
	filter: contrast(1.4) brightness(1.2) saturate(0.5);

	/* Change Blend Mode for varying effects */
	/* mix-blend-mode: luminosity; */
}

	body::before {
	content: "";
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: 100;
	background: var(--noise);
	background-attachment: fixed;
	opacity: 0.5;
}
			</code>
		  </pre>
        </div>
      </div>
    </inner-column>
  </section>
</template>

<style scoped lang="scss">
.asset-list {
  margin-top: var(--space-xl);
  display: grid;
  gap: var(--space-xl);
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}
li {
  display: grid;
  align-content: end;
  gap: var(--space-s);

  //   text-align: center;
}

div.mask {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--ink);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
}

div.spade {
  mask-image: url("/images/background/spade.svg");
}

div.clubs {
  mask-image: url("/images/background/clubs.svg");
}

.css-code {
  margin-top: var(--space-xl);
}
</style>
