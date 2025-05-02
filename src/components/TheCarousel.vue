<template>
  <div class="logos">
    <div class="logos-slide">
      <div class="logo-item" v-for="(logo, index) in logos" :key="index">
        <img :src="logo.src" :alt="logo.name" />
        <p>{{ logo.name }}</p>
      </div>
    </div>
    <div class="logos-slide">
      <div
        class="logo-item"
        v-for="(logo, index) in logos"
        :key="'copy-' + index"
      >
        <img :src="logo.src" :alt="logo.name" />
        <p>{{ logo.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import nuxt from "@/assets/images/nuxt.png";
import vue from "@/assets/images/vue.png";
import pinia from "@/assets/images/pinia.png";
import javaScript from "@/assets/images/javaScript.png";
import git from "@/assets/images/git.png";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import scss from "@/assets/images/scss.png";

const logos = [
  { src: nuxt, name: "Nuxt" },
  { src: vue, name: "Vue, Vuex" },
  { src: pinia, name: "Pinia" },
  { src: javaScript, name: "JavaScript" },
  { src: git, name: "Git" },
  { src: html, name: "HTML5" },
  { src: css, name: "CSS3" },
  { src: scss, name: "SCSS" },
];
</script>


<style lang="scss" scoped>
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.logos {
  overflow: hidden;
  padding: 60px 0 120px 0;
  white-space: nowrap;
}

.logos-slide {
  display: inline-block;
  animation: 10s slide infinite linear;
}

.logo-item {
  display: inline-block;
  text-align: center;
  margin: 0 40px;
}

.logo-item img {
  height: 100px;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  pointer-events: auto;
  margin-bottom: 10px;
}

.logo-item p {
  color: #fff;
  opacity: 0.6;
  font-family: "Neutral-Regular";
  font-size: 1.7rem;
}

.logo-item img:hover {
  filter: grayscale(0%);
}

.logos:hover .logos-slide {
  animation-play-state: paused;
}

</style>