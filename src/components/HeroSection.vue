<script setup lang="ts">
</script>

<template>
  <section class="border-b border-gray-200 bg-violet-50/60">
    <div class="mx-auto max-w-5xl text-center px-4 py-10">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Union Sportive Renaudine Volley Ball</h1>
      <img class="w-full h-auto rounded-lg block ring-1 ring-black/5" src="/icon.jpg" alt="Logo USR Volley"
        loading="eager" decoding="async" />
      <div class="mt-4 grid grid-cols-2 gap-3">
        <RouterLink
          class="flex items-center justify-center text-center w-full h-full rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700"
          to="/actualites"
        >
          Voir toutes les actualités
        </RouterLink>
        <RouterLink
          class="flex items-center justify-center text-center w-full h-full rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700"
          to="/contact"
        >
          Nous contacter
        </RouterLink>
      </div>
    </div>
  </section>
</template>
