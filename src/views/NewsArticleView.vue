<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { news } from '@/data/news'

const route = useRoute()
const router = useRouter()

const article = computed(() => {
  const id = route.params.id
  if (typeof id !== 'string') {
    return undefined
  }
  return news.find((item) => item.id === id)
})

watchEffect(() => {
  if (!article.value) {
    router.replace({ name: 'news' })
  }
})
</script>

<template>
  <main v-if="article" class="mx-auto max-w-3xl px-4 py-8">
    <article>
      <div class="text-sm text-gray-500">
        <time :datetime="article.date">
          {{ new Date(article.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' }) }}
        </time>
      </div>
      <h1 class="mt-2 text-3xl font-bold text-gray-900">
        {{ article.title }}
      </h1>
      <template v-if="article.image">
        <img
          class="mt-6 w-full rounded-xl"
          :src="article.image"
          :alt="article.imageAlt || article.title"
        />
      </template>
      <div class="mt-6 space-y-4 text-gray-800">
        <p v-for="(paragraph, index) in article.body" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </article>
    <div class="mt-8">
      <RouterLink
        class="inline-flex items-center gap-2 rounded-lg border border-violet-600 px-4 py-2 font-semibold text-violet-600 hover:bg-violet-50"
        :to="{ name: 'news' }"
      >
        ← Retour aux actualités
      </RouterLink>
    </div>
  </main>
</template>
