<template>
  <header>
    <the-navigation></the-navigation>
    <div class="hero-article">
      <div class="hero-text-container">
        <p class="hero-heading">
          From Figma to <span class="functional">Functional</span> — I Bring
          <span class="mazok">Frontends</span> to Life<span class="dot">.</span>
        </p>
        <p class="hero-preheading">
          Creating modern, responsive, and intuitive web apps using Vue.js,
          Vuex, and everything in between.
        </p>
      </div>
      <div class="hero-image-container">
        <div class="image-container">
            <img class="hero-image" src="@/assets/images/myself.png" alt="">
            <base-floating>Vue dev</base-floating>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import TheNavigation from "./layouts/TheNavigation.vue";
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding: 40px 80px;
  z-index: 1;
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
    align-items: center;
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
  font-size: 7rem;

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
}

.image-container {
    z-index: 0;
    overflow: hidden;
    width: 500px;
    height: 500px;
    border-radius: 50%;

}

.hero-image  {
    height: 67.5rem;
    z-index: 1;
}



</style>