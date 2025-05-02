<template>
  <header>
    <the-navigation></the-navigation>
    <div class="hero-article">
      <div class="hero-text-container">
        <p class="hero-heading">
          <span id="typewriter-text">
            From Figma to <span class="functional">Functional</span> — I Bring
            <span class="mazok">Frontends</span> to Life<span class="dot"
              >.</span
            >
          </span>
        </p>
        <p class="hero-preheading">
          Creating modern, responsive, and intuitive web apps using Vue.js,
          Vuex, and everything in between.
        </p>
        <div class="buttons">
          <base-button :backgroundColor="'#fff'">Get in touch</base-button>
          <a href="">View my portfolio</a>
        </div>
      </div>

      <div class="hero-image-container">
        <base-floating class="first">#FrontendDeveloper</base-floating>
        <base-floating class="second">#VueDev</base-floating>
        <base-floating class="third">#VueJS</base-floating>
        <div class="image-container"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import TheNavigation from "./layouts/TheNavigation.vue";
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";

onMounted(() => {
  const typewriter = new Typewriter("#typewriter-text", {
    loop: true,
    delay: 80,
    html: true,
  });

  typewriter
    .typeString(
      `From Figma to <span class="functional">Functional</span> — I Bring <span class="mazok">Frontends</span> to Life<span class="dot">.</span>`
    )
    .pauseFor(3000)
    .deleteAll()
    .typeString(
      `I bring <span class="functional">designs</span> to life with Vue`
    )
    .pauseFor(3000)
    .deleteAll()
    .start();

  // Применение стилей после завершения
  setTimeout(() => {
    const functionalElements = document.querySelectorAll(".functional");
    const mazokElements = document.querySelectorAll(".mazok");
    const dotElements = document.querySelectorAll(".dot");

    functionalElements.forEach((el) => {
      el.style.fontFamily = '"Instrument"';
      el.style.fontStyle = "italic";
    });

    mazokElements.forEach((el) => {
      el.style.position = "relative";
      el.style.display = "inline-block";
      el.style.zIndex = "1";
    });

    dotElements.forEach((el) => {
      el.style.color = "#ff5100";
      el.style.fontFamily = '"Neutral-Regular"';
    });
  }, 5000);
});
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding: 40px 80px;
  z-index: 1;
  overflow-x: hidden;
}

header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-image: url("@/assets/images/background.png");
}

.hero-article {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 150px;
}

#typewriter-text {
  display: inline-block;
  min-height: 26rem; 
}

.hero-text-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 70rem;
}

.hero-heading {
  color: #fff;
  font-family: "Neutral-Regular";
  font-size: clamp(4rem, 6vw, 7rem);

  .functional {
    font-family: "Instrument";
    font-style: italic;
  }

  .mazok {
    position: relative;
    display: inline-block;
    z-index: 1;
  }

  .mazok::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-image: url("@/assets/images/mazok.svg");
  }

  .dot {
    color: #ff5100;
    font-family: "Neutral-Regular";
  }
}

.hero-preheading {
  color: #aaa;
  font-family: "Neutral-Regular";
  font-size: 1.8rem;
  width: 65%;
  margin-bottom: 50px;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 150px;

  a {
    font-family: "Neutral-Regular";
    color: #bebebe;
    font-size: 1.6rem;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ff5100;
  }
}

.hero-image-container {
  position: relative;
}

.image-container {
  z-index: 0;
  width: clamp(250px, 50vw, 500px);
  height: clamp(250px, 50vw, 500px);
  border-radius: 50%;
  position: relative;
  background: linear-gradient(180deg, #1f1f1f 0%, #000 100%);
}

.image-container::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: -150px;
  bottom: 0;
  z-index: 1;
  background-image: url("@/assets/images/myself.png");
  background-size: cover;
  border-radius: 50%;
}

.hero-image-container .first {
  top: 40%;
  left: -40%;
}

.hero-image-container .second {
  top: -40px;
  left: 80%;
}

.hero-image-container .third {
  bottom: 15%;
  left: 75%;
}

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {
}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
  header {
    padding: 20px !important;
  }
  .image-container::before {
    content: "";
    top: -100px;
  }
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
  header {
    padding: 40px;
  }
  .image-container::before {
    content: "";
    top: -100px;
  }
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
  .hero-article {
    flex-direction: column;
    align-items: center;
  }
  .image-container::before {
    content: "";
    top: -100px;
  }
  .hero-article {
    margin-top: 50px;
  }
  .hero-preheading {
    margin-bottom: 100px;
  }
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {
}
</style>