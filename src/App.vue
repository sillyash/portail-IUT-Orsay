<script setup>

import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

</script>

<template>
  <AppHeader />

  <main id="mainApp">
    <RouterView />
  </main>

  <AppFooter />
</template>

<style>
@import '@/styles/main.css';

#mainApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh
    - var(--header-height) - var(--footer-height)
    - 2* var(--header-padding) - 2 * var(--footer-padding)
  );
}

</style>
