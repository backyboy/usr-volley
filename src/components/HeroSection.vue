<script setup lang="ts">
</script>

<template>
  <section class="relative isolate overflow-hidden border-b border-gray-200 ">
    <!-- Pastel background gradients -->
    <div aria-hidden
      class="absolute inset-0 -z-10 overflow-hidden bg-linear-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/10 blur-3xl">
      <div class="pointer-events-none absolute -top-24 -left-24 size-112 rounded-full ">
      </div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 size-96 rounded-full">
      </div>
    </div>
    <div class="mx-auto max-w-5xl text-center px-4 py-10">
      <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Union Sportive Renaudine Volley Ball</h1>
      <img
        class="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg block ring-1 ring-black/5"
        src="/icon.jpg" alt="Logo USR Volley" loading="eager" decoding="async" />
      <div class="mt-4 grid grid-cols-2 gap-3">
        <RouterLink
          class="flex items-center justify-center text-center w-full h-full rounded-lg px-4 py-2 font-semibold text-white bg-violet-700 hover:bg-violet-900"
          to="/actualites">
          Voir toutes les actualités
        </RouterLink>
        <RouterLink
          class="flex items-center justify-center text-center w-full h-full rounded-lg px-4 py-2 font-semibold text-white bg-violet-700 hover:bg-violet-900"
          to="/contact">
          Nous contacter
        </RouterLink>
      </div>
    </div>
  </section>
</template>
