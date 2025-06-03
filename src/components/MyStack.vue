<template>
  <div class="wrapper" id="stack">
    <div class="left" data-aos="fade-down">
      <div class="image-container"></div>
      <p class="my-info" >
        Hi, I’m Dmytro — <span class="front">Frontend Developer</span
        ><span class="dot">.</span>
      </p>
    </div>
    <p class="description" data-aos="fade-up">
      I’m passionate about building clean, functional, and visually appealing
      websites. I focus on performance, user experience, and scalable code.
      Every project I take on is an opportunity to solve problems and create
      value through code.
    </p>
  </div>
  <the-carousel></the-carousel>
  <p class="stack">
    <span class="stack-special">My stack: </span>
    Nuxt / Vue / Vuex / Pinia / JavaScript / Git / HTML5 / CSS3 / SCSS
  </p>
</template>

<script setup>
import TheCarousel from "./TheCarousel.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  flex-wrap: wrap;
  padding: 40px 80px 80px 80px;
  overflow: hidden;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}

.image-container {
  height: 115px;
  width: 115px;
  background: #242424;
  padding-top: 10px;
  border-radius: 50%;
  position: relative;
}

.image-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("@/assets/images/MeSitting.png");
  background-size: cover;
  border-radius: 50%;
}

.my-info {
  color: #fff;
  font-family: "Neutral-Regular";
  font-size: clamp(3rem, 6vw, 6.4rem);
  max-width: 56rem;

  .front {
    font-family: "Instrumental";
    font-style: italic;
  }

  .dot {
    color: #ff5100;
  }
}

.description {
  max-width: 56rem;
  color: #aaa;
  font-size: clamp(1rem, 6vw, 1.8rem);
  font-family: "Neutral-Regular";
  line-height: 130%;
  text-align: left;
}

.stack {
  padding-left: 60px;
  font-size: 2rem;
  font-family: "Neutral-Medium";
  margin-bottom: 100px;
  
  color: #6e6e6e;
  span {
    color: #ff5100;
  }
}

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {
}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
  
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
 .stack {
    padding-left: 20px;
  }
  .wrapper {
    padding: 60px 20px 20px 20px;
  }
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
 
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {
}
</style>