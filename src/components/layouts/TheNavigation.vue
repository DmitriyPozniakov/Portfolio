<template>
  <nav :class="{ open: isOpen }">
    <p class="logo">Pozniakov<span>.</span></p>
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#stack">Stack</a></li>
      <li><a href="#my-works">Portfolio</a></li>
      <li><a href="#work-process">Work process</a></li>
      <li><a href="#footer">Contacts</a></li>
    </ul>
    <base-button class="call-to-action" :backgroundColor="'#fff'"
      >Get in touch</base-button
    >
    <div class="burger-container">
      <button class="burger" @click="toggleBurger">
        <img src="@/assets/images/burger.svg" alt="" />
      </button>
    </div>
  </nav>
  <!-- burger-menu -->
  <div v-if="isOpen" class="burger-menu">
    <br />
    <ul class="burger-list">
      <li><a href="#hero">Home</a></li>
      <li><a href="#stack">Stack</a></li>
      <li><a href="#my-works">Portfolio</a></li>
      <li><a href="#work-process">Work process</a></li>
      <li><a href="#footer">Contacts</a></li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const isOpen = ref(false);

const toggleBurger = () => {
  isOpen.value = !isOpen.value;
};

// Автоматическое закрытие меню при ширине ≥ 1024px
const handleResize = () => {
  if (window.innerWidth >= 1024 && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  // Проверить при монтировании, если уже большая ширина
  handleResize();
});
</script>



<style lang="scss" scoped>
@keyframes slideFadeDown {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

nav,
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  gap: 24px;
}

nav {
  background: #242424;
  top: 16px;
  left: 4.5%;
  padding: 8px 8px 8px 16px;
  border-radius: 32px;
  pointer-events: auto;
  transform: scaleY(1);
  transition: all 0.4s ease;
  position: fixed;
  z-index: 1000;
  width: calc(90%)
}

nav.open {
  border-radius: 32px 32px 0px 0px;
}

.burger-container {
  display: none;
}

.logo {
  font-family: "Hikasami";
  color: #fff;
  font-size: clamp(2rem, 2.2vw, 2.6rem);

  text-transform: uppercase;

  span {
    font-family: "Hevena";
    color: #ff5100;
  }
}

ul li a {
  font-family: "Neutral-Regular";
  color: #fff;
  font-size: 1.8rem;
  transition: color 0.3s ease;
}

ul:hover li a {
  color: #7a7f7d;
}

ul li:hover a {
  color: #fff !important;
}

.burger-list {
  display: block;
}

.burger-menu {
  background: #242424;
  border-radius: 0px 0px 32px 32px;
  animation: slideFadeDown 0.4s ease forwards;
  transform-origin: top center;
  padding: 8px 8px 8px 16px;

  position: fixed;
  top: calc(4px + 64px);
  left: 4.5%;
  width: calc(90%);
  z-index: 999;
}

/* Стили для экранов шириной от 320px */
@media (max-width: 320px) {
}

/* Стили для экранов шириной от 480px */
@media (max-width: 480px) {
}

/* Стили для экранов шириной от 768px (планшеты) */
@media (max-width: 768px) {
}

/* Стили для экранов шириной от 1024px (десктопы) */
@media (max-width: 1024px) {
  ul:not(.burger-list),
  .call-to-action {
    display: none;
  }

  .burger-container {
    display: block;
  }
}

/* Стили для экранов шириной от 1440px (очень большие экраны) */
@media (max-width: 1440px) {
}
</style>