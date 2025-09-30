<template>
  <div class="logos">
    <div class="logos-slide">
      <template v-for="(logo, index) in logos" :key="index">
        <div class="logo-item">
          <img :src="logo.src" :alt="logo.name" />
          <p>{{ logo.name }}</p>
        </div>
        <!-- Сепаратор после каждого элемента -->
        <svg
          class="separator"
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="107"
          viewBox="0 0 3 107"
          fill="none"
        >
          <path
            d="M1.75 0.845154V106.572"
            stroke="url(#paint0_linear_107_4424)"
            stroke-width="2.29841"
          />
          <defs>
            <linearGradient
              id="paint0_linear_107_4424"
              x1="2.25"
              y1="0.845154"
              x2="2.25"
              y2="106.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F0F0F" />
              <stop offset="0.476847" stop-color="#363636" />
              <stop offset="1" stop-color="#0F0F0F" />
            </linearGradient>
          </defs>
        </svg>
      </template>
    </div>

    <div class="logos-slide">
      <template v-for="(logo, index) in logos" :key="'copy-' + index">
        <div class="logo-item">
          <img :src="logo.src" :alt="logo.name" />
          <p>{{ logo.name }}</p>
        </div>
        <svg
          class="separator"
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="107"
          viewBox="0 0 3 107"
          fill="none"
        >
          <path
            d="M1.75 0.845154V106.572"
            stroke="url(#paint0_linear_107_4424)"
            stroke-width="2.29841"
          />
          <defs>
            <linearGradient
              id="paint0_linear_107_4424"
              x1="2.25"
              y1="0.845154"
              x2="2.25"
              y2="106.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0F0F0F" />
              <stop offset="0.476847" stop-color="#363636" />
              <stop offset="1" stop-color="#0F0F0F" />
            </linearGradient>
          </defs>
        </svg>
      </template>
    </div>
  </div>
</template>



<script setup>
import nuxt from "@/assets/images/nuxt.png";
import vue from "@/assets/images/vue.png";
import javaScript from "@/assets/images/javaScript.svg";
import typeScript from "@/assets/images/typeScript.svg";
import node from "@/assets/images/node.svg";
import pinia from "@/assets/images/pinia.png";
import git from "@/assets/images/git.png";
import html from "@/assets/images/html.png";
import css from "@/assets/images/css.png";
import scss from "@/assets/images/scss.png";
import tailwind from "@/assets/images/tailwind.svg";
import gsap from "@/assets/images/gsap.png";
import swiper from "@/assets/images/swiper.svg";
import lenis from "@/assets/images/lenis.jpg";

const logos = [
  { src: nuxt, name: "Nuxt" },
  { src: vue, name: "Vue, Vuex" },
  { src: javaScript, name: "JavaScript" },
  { src: typeScript, name: "TypeScript" },
  { src: node, name: "Node.js" },
  { src: pinia, name: "Pinia" },
  { src: git, name: "Git" },
  { src: html, name: "HTML5" },
  { src: css, name: "CSS3" },
  { src: scss, name: "SCSS" },
  { src: tailwind, name: "Tailwind" },
  { src: gsap, name: "GSAP" },
  { src: swiper, name: "Swiper" },
  { src: lenis, name: "Lenis" },
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

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {
}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
  .logos {
    padding: 60px 0;
  }
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {
}
</style>