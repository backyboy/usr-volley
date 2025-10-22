<script setup lang="ts">
import FooterSection from './components/FooterSection.vue';
import NavbarSection from './components/NavbarSection.vue'
import BreadcrumbSection from '@/components/BreadcrumbSection.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <NavbarSection />

    <BreadcrumbSection />

    <router-view />

    <FooterSection />
  </div>

</template>

<style scoped></style>
