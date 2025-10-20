<script setup lang="ts">
import { ref } from 'vue'

const navOpen = ref(false)
function toggleNav() {
  navOpen.value = !navOpen.value
}
</script>

<template>
  <header>
    <div class="top-bar">
      <a class="logo" href="/" aria-label="Retour à l'accueil">
        <img class="logo-img" src="/icon.jpg" alt="Logo USR Volley" />
      </a>
      <button class="hamburger" aria-label="Ouvrir le menu" :aria-expanded="navOpen ? 'true' : 'false'"
        @click="toggleNav">
        <span></span><span></span><span></span>
      </button>
    </div>
    <nav class="menu" :class="{ open: navOpen }" aria-label="Navigation principale">
      <a href="#club" @click="navOpen = false">Le club</a>
      <a href="/actualites" @click="navOpen = false">Actualités</a>
      <a href="#infos" @click="navOpen = false">Infos pratiques</a>
      <a href="#contact" @click="navOpen = false">Contact</a>
    </nav>
  </header>

  <router-view />

  <footer>
    <div class="footer-links">
      <a href="#club">Le club</a>
      <a href="#actualites">Actualités</a>
      <a href="#infos">Infos pratiques</a>
      <a href="#contact">Contact</a>
    </div>
    <p>
      {{ new Date().getFullYear() }} USR Volley-Ball
    </p>
  </footer>
</template>

<style scoped></style>
