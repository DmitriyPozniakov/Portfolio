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
    <span>
      <span class="skill nuxt">Nuxt</span> / 
      <span class="skill vue">Vue</span> / 
      <span class="skill vue">Vuex</span> /
      <span class="skill pinia">Pinia</span> /
      <span class="skill typeScript">TypeScript</span> /
      <span class="skill javaScript">JavaScript</span> /
      <span class="skill node">Node.js</span> /
      <span class="skill git">Git</span> /
      <span class="skill html">HTML5</span> /
      <span class="skill css">CSS3</span> /
      <span class="skill tailwind">Tailwind</span> /
      <span class="skill gsap">GSAP</span> /
      <span class="skill swiper">Swiper</span> /
      <span class="skill lenis">Lenis</span> 
    </span>
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

.skill {
  display: inline-block;
  border-radius: 6px;
  padding: 3px;
  transition: all 0.3s ease;
}

.skill:hover {
  transform: scale(1.1);
  color: #fff;
}

.skill.nuxt:hover { background: #00dc82; }    
.skill.vue:hover { background: #41b783; }     
.skill.vuex:hover { background: #41b783; }    
.skill.pinia:hover { background: #ffd859; }   
.skill.typeScript:hover { background: #3178c6; }
.skill.javaScript:hover { background: #f7df1e; color: #000; } 
.skill.node:hover { background: #68a063; }    
.skill.git:hover { background: #f14e32; }     
.skill.html:hover { background: #e34f26; }    
.skill.css:hover { background: #264de4; }     
.skill.tailwind:hover { background: #38bdf8; } 
.skill.gsap:hover { background: #0AE448; color: #000; } 
.skill.swiper:hover { background: #6332f6; }  
.skill.lenis:hover { background: #ff98a3; }     

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
  cursor: default;
  
  color: #6e6e6e;
  .stack-special {
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
    padding: 30px 0 0 20px;
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