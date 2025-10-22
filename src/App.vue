<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const navOpen = ref(false)
function toggleNav() {
  navOpen.value = !navOpen.value
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div class="mx-auto max-w-7xl flex items-center justify-between gap-2 px-4 py-3">
        <a class="inline-flex items-center gap-2 text-gray-900 font-semibold min-w-0" href="/"
          aria-label="Retour à l'accueil">
          <img class="w-8 h-8 rounded-lg object-cover ring-1 ring-black/5" src="/icon.jpg" alt="Logo USR Volley" />
          <span class="sr-only">USR Volley</span>
        </a>
        <button class="inline-flex flex-col gap-1.5 p-2 border border-gray-200 bg-white rounded-lg md:hidden"
          aria-label="Ouvrir le menu" :aria-expanded="navOpen ? 'true' : 'false'" @click="toggleNav">
          <span class="block w-5 h-0.5 bg-gray-900"></span>
          <span class="block w-5 h-0.5 bg-gray-900"></span>
          <span class="block w-5 h-0.5 bg-gray-900"></span>
        </button>
      </div>
      <nav :class="[
        navOpen ? 'grid gap-2' : 'hidden',
        'md:flex md:items-center md:gap-6 px-4 py-2 md:px-0 md:py-0 bg-white md:bg-transparent border-b md:border-0'
      ]" aria-label="Navigation principale">
        <a class="py-2 text-gray-700 hover:text-gray-900" href="#club" @click="navOpen = false">Le club</a>
        <a class="py-2 text-gray-700 hover:text-gray-900" href="/actualites" @click="navOpen = false">Actualités</a>
        <a class="py-2 text-gray-700 hover:text-gray-900" href="#infos" @click="navOpen = false">Infos pratiques</a>
        <a class="py-2 text-gray-700 hover:text-gray-900" href="/contact" @click="navOpen = false">Contact</a>
      </nav>
    </header>

    <Breadcrumb />

    <router-view />

    <footer class="mt-10 px-4 py-6 border-t border-gray-200 bg-white text-gray-700">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap gap-4 mb-2">
          <a class="text-gray-700 hover:text-gray-900" href="#club">Le club</a>
          <a class="text-gray-700 hover:text-gray-900" href="#actualites">Actualités</a>
          <a class="text-gray-700 hover:text-gray-900" href="#infos">Infos pratiques</a>
          <a class="text-gray-700 hover:text-gray-900" href="/contact">Contact</a>
        </div>
        <p>{{ new Date().getFullYear() }} USR Volley-Ball</p>
      </div>
    </footer>
  </div>

</template>

<style scoped></style>
