<template>
  <hero-section></hero-section>
  <the-main></the-main>
  <the-footer></the-footer>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import TheMain from "./components/layouts/TheMain.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
</script>

<style>
body {
  overflow-x: hidden;
}
</style>
