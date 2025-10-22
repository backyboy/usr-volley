<script setup lang="ts">
import NavbarSection from './components/NavbarSection.vue'
import BreadcrumbSection from '@/components/BreadcrumbSection.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <NavbarSection />

    <BreadcrumbSection />

    <router-view />

    <footer class="mt-10 px-4 py-6 border-t border-gray-200 bg-white text-gray-700">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-wrap gap-4 mb-2">
          <a class="text-gray-700 hover:text-gray-900" href="/#club">Le club</a>
          <a class="text-gray-700 hover:text-gray-900" href="/actualites">Actualités</a>
          <a class="text-gray-700 hover:text-gray-900" href="/#infos">Infos pratiques</a>
          <a class="text-gray-700 hover:text-gray-900" href="/contact">Contact</a>
        </div>
        <p>{{ new Date().getFullYear() }} USR Volley-Ball</p>
      </div>
    </footer>
  </div>

</template>

<style scoped></style>
