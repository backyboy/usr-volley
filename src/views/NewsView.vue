<script setup lang="ts">
import { news } from '../data/news'

const allNews = news
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-8">
    <section>
      <h1 class="text-3xl font-bold">Actualités</h1>
      <div v-if="allNews.length" class="grid gap-4 mt-4">
        <article v-for="item in allNews" :key="item.id" class="p-4 rounded-xl border border-gray-200 bg-white">
          <div class="text-sm text-gray-500">
            <time :datetime="item.date">{{ new Date(item.date).toLocaleDateString('fr-FR') }}</time>
          </div>
          <h2 class="mt-1 mb-2 text-xl font-semibold text-gray-900">
            <RouterLink :to="{ name: 'news-article', params: { id: item.id } }">
              {{ item.title }}
            </RouterLink>
          </h2>
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
          <RouterLink class="mt-3 inline-flex items-center gap-1 font-semibold text-violet-600 hover:text-violet-700"
            :to="{ name: 'news-article', params: { id: item.id } }">
            Lire l’article
            <span aria-hidden>→</span>
          </RouterLink>
        </article>
      </div>
      <p v-else class="mt-6">
        Aucun article n’est disponible pour le moment. De nouveaux articles arrivent bientôt.
      </p>
    </section>
  </main>

</template>

<style scoped></style>
