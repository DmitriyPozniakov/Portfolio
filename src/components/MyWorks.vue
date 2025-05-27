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
        <base-card :img-src="dolas" :url="'https://dolas-shop.netlify.app/'">
          <template #heading>
            <p class="heading">Dolas</p>
          </template>
          <template #stack>Vue / Vuex / JavaScript / HTML5 / CSS3</template>
        </base-card>

        <base-card
          :img-src="abain"
          :url="'https://dmitriypozniakov.github.io/abain/'"
        >
          <template #heading>
            <p class="heading">Abain</p>
          </template>
          <template #stack>JavaScript / HTML5 / CSS3</template>
        </base-card>

        <base-card
          :img-src="timeNow"
          :url="'https://dmitriypozniakov.github.io/Time-now/'"
        >
          <template #heading>
            <p class="heading">TimeNow</p>
          </template>
          <template #stack>JavaScript / HTML5 / CSS3</template>
        </base-card>

        <base-card
          :img-src="aiAgent"
          :url="'https://dmitriypozniakov.github.io/Ai-agents/'"
        >
          <template #heading>
            <p class="heading">Ai Agent</p>
          </template>
          <template #stack>JavaScript / HTML5 / CSS3</template>
        </base-card>

        <base-card :img-src="Renoteck1" :url="'https://renoteck.netlify.app/'">
          <template #heading>
            <p class="heading">Renoteck</p>
          </template>
          <template #stack
            >Vue / Vuex / JavaScript / HTML5 / SCSS / CSS3</template
          ></base-card
        >
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
</script>

<style lang="scss" scoped>
// ОШИБКИ ПРИ АДАПТИВЕ -- ОШИБКИ ПРИ АДАПТИВЕ -- ОШИБКИ ПРИ АДАПТИВЕ
.wrapper {
  display: flex;
  justify-content: center;
  padding-bottom: 170rem;

  @media (max-width: 1452px) {
    padding-bottom: 300rem;
  }
}

#my-works {
  width: 95%;
  background: #fff;
  border-radius: 40px;
  padding: 40px 40px 0 40px;
  max-height: 70rem;
  overflow: visible;
}

.heading-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
}

.works {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 100px;
}
</style>