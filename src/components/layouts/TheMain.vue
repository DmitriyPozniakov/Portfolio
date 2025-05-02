<template>
  <main>
    <my-stack></my-stack>
    <my-works></my-works>
    <wok-process></wok-process>
  </main>
</template>

<script setup>
import MyStack from "../MyStack.vue";
import MyWorks from "../MyWorks.vue";
import WokProcess from "../WokProcess.vue";
</script>

<style lang="scss" scoped>
main {
  background: #0f0f0f;
}
</style>