<template>
  <AppHeader id="header" />
  <h1 id="title">Portail - IUT Orsay</h1>

  <main id="mainApp">
    <RouterView />
  </main>

  <AppFooter id="footer" />
</template>

<script setup>

import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

</script>

<style>
@import '@/styles/main.css';

body {
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#title {
  text-align: center;
  margin: 20px 0;
}

#header {
  flex: 0 0 auto;
}

#footer {
  flex: 0 0 auto;
}

#mainApp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Changed to center */
  flex-grow: 1;
  overflow: auto; /* Added overflow for scrolling */
  padding: 20px;
}

</style>
