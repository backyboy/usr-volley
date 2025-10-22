<script setup lang="ts">
import { news } from '../data/news'

const allNews = news
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <section>
      <h1 class="text-3xl font-bold">Actualités</h1>
      <div class="grid gap-4 mt-4">
        <article v-for="item in allNews" :key="item.id" class="p-4 rounded-xl border border-gray-200 bg-white">
          <div class="text-sm text-gray-500">
            <time :datetime="item.date">{{ new Date(item.date).toLocaleDateString('fr-FR') }}</time>
          </div>
          <h2 class="mt-1 mb-2 text-xl font-semibold text-gray-900">{{ item.title }}</h2>
          <template v-if="item.image">
            <img class="w-full h-auto block rounded-lg my-2" :src="item.image" :alt="item.imageAlt || item.title" />
          </template>
          <template v-else>
            <div class="h-40 my-2 grid place-items-center rounded-xl border border-gray-300 bg-gray-100 text-gray-500"
              aria-hidden="true">
              Visuel à venir
            </div>
          </template>
          <p class="text-gray-700">{{ item.excerpt }}</p>
          <div class="mt-2 space-y-2">
            <p v-for="(p, idx) in item.body" :key="idx">{{ p }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>

</template>

<style scoped></style>
