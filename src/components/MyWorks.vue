<template>
  <div class="wrapper">
    <div id="my-works">
      <div class="heading-wrapper">
        <p class="heading">
          See My <span class="special">Work</span><span class="dot">.</span>
        </p>
        <base-button :backgroundColor="'#242424'">Get in touch</base-button>
      </div>
      <div class="works">
        <base-card
          v-for="(work, index) in works"
          :key="index"
          :img-src="work.img"
          :url="work.url"
        >
          <template #heading>
            <p class="heading">{{ work.title }}</p>
          </template>
          <template #stack>{{ work.stack }}</template>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCard from "./base/BaseCard.vue";
import dolas from "@/assets/images/dolas.png";
import abain from "@/assets/images/Abain.png";
import timeNow from "@/assets/images/TimeNow.png";
import aiAgent from "@/assets/images/ai-agent-hero.png";
import Renoteck1 from "@/assets/images/Renoteck-1.png";
import Zede from "@/assets/images/Zede.png"

const works = [
  {
    img: dolas,
    url: "https://dolas-shop.netlify.app/",
    title: "Dolas",
    stack: "Vue / Vuex / JavaScript / HTML5 / CSS3",
    aos: "fade-right",
  },
  {
    img: Zede,
    url: "https://deze.netlify.app/",
    title: "Zede",
    stack: "Vue / JavaScript / GSAP / HTML5 / CSS3",
    aos: "fade-left",
  },
  {
    img: abain,
    url: "https://dmitriypozniakov.github.io/abain/",
    title: "Abain",
    stack: "JavaScript / HTML5 / CSS3",
    aos: "fade-left",
  },
  {
    img: timeNow,
    url: "https://dmitriypozniakov.github.io/Time-now/",
    title: "TimeNow",
    stack: "JavaScript / HTML5 / CSS3",
    aos: "fade-right",
  },
  {
    img: aiAgent,
    url: "https://dmitriypozniakov.github.io/Ai-agents/",
    title: "Ai Agent",
    stack: "JavaScript / HTML5 / CSS3",
    aos: "fade-left",
  },
  {
    img: Renoteck1,
    url: "https://renoteck.netlify.app/",
    title: "Renoteck",
    stack: "Vue / Vuex / JavaScript / HTML5 / SCSS / CSS3",
    aos: "fade-up",
  },
];
</script>


<style lang="scss" scoped>
// ОШИБКИ ПРИ АДАПТИВЕ -- ОШИБКИ ПРИ АДАПТИВЕ -- ОШИБКИ ПРИ АДАПТИВЕ
.wrapper {
  display: flex;
  justify-content: center;
  padding-bottom: 155rem;

  @media (max-width: 1452px) {
    padding-bottom: 320rem;
  }
}

#my-works {
  width: 95%;
  background: #fff;
  border-radius: 40px;
  padding: 40px 40px 0 40px;
  max-height: 70rem;
}

.heading-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
}

.heading {
  color: #0f0f0f;
  font-family: "Neutral-Regular";
  font-size: 6.4rem;

  .special {
    font-family: "Instrumental";
    font-style: italic;
  }

  .dot {
    color: #ff5100;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
}

.works {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 100px;
  max-width: 100%;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 768px) {
  .heading {
    text-align: center;
  }
  #my-works {
    padding: 10px 10px 0 10px;
  }
}
</style>