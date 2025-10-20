<script setup lang="ts">
import { news } from '../data/news'

const allNews = news
</script>

<template>
  <main class="news-page">
    <section class="news">
      <h1>Actualités</h1>
      <div class="news-list">
        <article v-for="item in allNews" :key="item.id" class="news-card">
          <div class="news-meta">
            <time :datetime="item.date">{{ new Date(item.date).toLocaleDateString('fr-FR') }}</time>
          </div>
          <h2 class="news-title">{{ item.title }}</h2>
          <div class="media-placeholder news-media" aria-hidden="true">Visuel à venir</div>
          <p class="news-excerpt">{{ item.excerpt }}</p>
          <div class="news-body">
            <p v-for="(p, idx) in item.body" :key="idx">{{ p }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
