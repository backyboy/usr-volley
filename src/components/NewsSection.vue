<script setup lang="ts">
import { news as allNews } from '@/data/news'

const latest = allNews.slice(0, 3)
</script>

<template>
  <section id="actualites" class="relative isolate overflow-hidden py-16 sm:py-24">
    <!-- Subtle pastel gradient background -->
    <div aria-hidden class="absolute inset-0 -z-10 overflow-hidden">
      <div class="pointer-events-none absolute -top-24 -left-24 size-128 rounded-full "></div>
      <div class="pointer-events-none absolute -bottom-24 -right-24 size-112 rounded-full "></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty  sm:text-5xl">Actualités</h2>
        <p class="mt-2 text-lg/8 ">Découvrez les dernières annonces du club.</p>
      </div>
      <div
        class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="item in latest" :key="item.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="w-full">
            <img v-if="item.image"
              class="w-full aspect-auto object-cover rounded-2xl bg-gray-800 ring-1 ring-inset ring-gray-700"
              :src="item.image" :alt="item.imageAlt || item.title" />
            <div v-else
              class="w-full aspect-auto grid place-items-center rounded-2xl border border-gray-700 bg-gray-800 "
              aria-hidden="true">
              Visuel à venir
            </div>
          </div>

          <div class="mt-4 flex items-center gap-x-4 text-xs">
            <time :datetime="item.date" class="">{{ new Date(item.date).toLocaleDateString('fr-FR')
            }}</time>
          </div>

          <div class="group relative grow">
            <h3 class="mt-3 text-lg/6 font-semibold  group-hover:">
              <a href="/actualites">
                <span class="absolute inset-0"></span>
                {{ item.title }}
              </a>
            </h3>
            <p class="mt-3 line-clamp-3 text-sm/6 ">{{ item.excerpt }}</p>
          </div>
        </article>
      </div>
      <div class="mt-10 sm:mt-12 flex justify-center">
        <a class="inline-block rounded-lg px-4 py-2 font-semibold  bg-violet-600 hover:bg-violet-700"
          href="/actualites">Voir toutes les actualités</a>
      </div>
    </div>
  </section>
</template>
