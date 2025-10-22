<script setup lang="ts">
import { news as allNews } from '@/data/news'

const latest = allNews.slice(0, 3)
</script>

<template>
  <section id="actualites" class="bg-gray-900 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">Actualités</h2>
        <p class="mt-2 text-lg/8 text-gray-300">Découvrez les dernières annonces du club.</p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="item in latest" :key="item.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="w-full">
            <img v-if="item.image"
              class="w-full aspect-video object-cover rounded-2xl bg-gray-800 ring-1 ring-inset ring-gray-700"
              :src="item.image" :alt="item.imageAlt || item.title" />
            <div v-else
              class="w-full aspect-video grid place-items-center rounded-2xl border border-gray-700 bg-gray-800 text-gray-400"
              aria-hidden="true">
              Visuel à venir
            </div>
          </div>

          <div class="mt-4 flex items-center gap-x-4 text-xs">
            <time :datetime="item.date" class="text-gray-400">{{ new Date(item.date).toLocaleDateString('fr-FR')
              }}</time>
          </div>

          <div class="group relative grow">
            <h3 class="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
              <a href="/actualites">
                <span class="absolute inset-0"></span>
                {{ item.title }}
              </a>
            </h3>
            <p class="mt-3 line-clamp-3 text-sm/6 text-gray-400">{{ item.excerpt }}</p>
          </div>
        </article>
      </div>
      <div class="mt-10 sm:mt-12 flex justify-center">
        <a class="inline-block rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700"
          href="/actualites">Voir toutes les actualités</a>
      </div>
    </div>
  </section>
</template>
