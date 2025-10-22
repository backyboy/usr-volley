<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

function formatLabel(name: unknown): string {
  if (typeof name !== 'string') return ''
  const s = name.replace(/[-_]/g, ' ')
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const isHome = computed(() => route.name === 'home' || route.path === '/')

const crumbs = computed(() => {
  // Always start with home
  const list: Array<{ label: string; to?: string }> = [
    { label: 'Accueil', to: '/' },
  ]

  // Build from matched records (skip root '/'), supports nesting later
  const records = route.matched.filter((r) => r.path !== '/')
  records.forEach((record, idx) => {
    const label = (record.meta?.breadcrumb as string) || formatLabel(record.name)
    const isLast = idx === records.length - 1
    if (label) list.push(isLast ? { label } : { label, to: record.path })
  })

  return list
})
</script>

<template>
  <nav v-if="!isHome" class="bg-gray-50 border-b border-gray-200 py-2">
    <ol class="mx-auto max-w-7xl px-4 flex items-center gap-2 text-sm text-gray-600">
      <li>
        <RouterLink class="hover:text-gray-900" to="/">Accueil</RouterLink>
      </li>
      <li v-for="(c, idx) in crumbs.slice(1)" :key="idx" class="flex items-center gap-2">
        <span class="text-gray-400">/</span>
        <span v-if="c.to">
          <RouterLink class="hover:text-gray-900" :to="c.to">{{ c.label }}</RouterLink>
        </span>
        <span v-else class="text-gray-700">{{ c.label }}</span>
      </li>
    </ol>
  </nav>
</template>
