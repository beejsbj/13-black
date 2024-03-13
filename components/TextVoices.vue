<script setup>
//convert to object

const fontFamilies = [
  {
    name: "Unbounded",
    fontFamily: "Unbounded",
    link: "https://fonts.google.com/specimen/Unbounded",
  },
  // lato
  {
    name: "Lato",
    fontFamily: "Lato",
    link: "https://fonts.google.com/specimen/Lato",
  },
];

const voices = ref([
  {
    name: "micro-voice",
  },
  {
    name: "whisper-voice",
  },
  {
    name: "calm-voice",
  },
  {
    name: "notice-voice",
  },
  {
    name: "firm-voice",
  },
  {
    name: "attention-voice",
  },
  {
    name: "teaser-voice",
  },
  {
    name: "loud-voice",
  },
  {
    name: "booming-voice",
  },
]);

function getFontSize() {
  voices.value.forEach((voice) => {
    const $voice = document.querySelector(`voice-card .${voice.name}`);
    voice.fontSize = window.getComputedStyle($voice).fontSize;
  });
}

function getFontFamily() {
  voices.value.forEach((voice) => {
    const $voice = document.querySelector(`voice-card .${voice.name}`);
    voice.fontFamily = window.getComputedStyle($voice).fontFamily;
  });
}

onMounted(() => {
  getFontSize();
  getFontFamily();
  window.addEventListener("resize", () => {
    getFontSize();
  });
});
</script>

<template>
  <section>
    <inner-column>
      <div class="font-families">
        <h2 class="attention-voice">Font Families</h2>
        <p>These are the font families used in the app.</p>
        <div class="grid-2">
          <div class="family-card unbounded">
            <h4 class="attention-voice">
              {{ fontFamilies[0].name }}
            </h4>
            <a :href="fontFamilies[0].link" class="text"> Google Fonts Link </a>
          </div>
          <div class="family-card lato">
            <h4 class="attention-voice">
              {{ fontFamilies[1].name }}
            </h4>
            <a :href="fontFamilies[1].link" class="text"> Google Fonts Link </a>
          </div>
        </div>
      </div>
      <div class="text-voices">
        <h2 class="attention-voice">Text Voices</h2>
        <ul>
          <li v-for="voice in voices">
            <voice-card :class="voice.name">
              <code>
                {{ voice.name }}
              </code>
              <p :class="voice.name">
                The font family is
                <code> {{ voice.fontFamily }} </code>.
              </p>
              <p :class="voice.name">
                The font size is <code>{{ voice.fontSize }}</code>
              </p>

              <p :class="voice.name">
                this is a <em>regular emphasis</em> sentence.
              </p>
              <p :class="voice.name">
                This is a <strong>strong emphasis</strong> sentence.
              </p>
              <p :class="voice.name">
                This is a
                <strong><em>strong and regular emphasis</em></strong> sentence.
              </p>
              <p :class="voice.name">
                This is a sentence with a
                <mark class="highlight">highlight </mark>.
              </p>
              <p :class="voice.name">
                these <a href="?page=style-guide#"> are links </a> in the
                paragraph.
              </p>
              <p :class="voice.name" class="wrap">
                This is a paragraph that should wrap to the next line. lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
                lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac
                quam viverra nec consectetur ante hendrerit.
              </p>
              <p :class="voice.name" class="wrap">
                Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
                Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
                gravida lorem. Ut turpis felis, pulvinar a semper sed,
                adipiscing id dolor. Pellentesque auctor nisi id magna consequat
                sagittis. Curabitur dapibus enim sit amet elit pharetra
                tincidunt feugiat nisl imperdiet.
              </p>
            </voice-card>
          </li>
        </ul>
      </div>
    </inner-column>
  </section>
</template>

<style scoped lang="scss">
.family-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-top: var(--space-xl);
  h4 {
    margin-bottom: var(--space-xs);
  }
  a {
    color: var(--color-ink);
  }

  background: var(--);
}

.grid-2 {
  display: grid;
  gap: var(--space-3xl);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.unbounded h4.attention-voice {
  font-family: var(--font-heading);
}

.lato h4.attention-voice {
  font-family: var(--font-body);
}

div.text-voices {
  margin-top: var(--space-3xl);
}

ul {
  display: grid;
  margin-top: var(--space-s);
  gap: var(--space-xl);

  li + li {
    padding-top: var(--space-s);
    border-top: var(--border-highlight);
  }

  P + p {
    margin-top: var(--space-2xs);
  }

  p.wrap {
    text-wrap: balance;
  }

  voice-card.booming-voice {
    display: none;

    @media (min-width: 450px) {
      display: block;
    }
  }
}
</style>
