<script setup lang="ts">
type Team = {
  id: number
  name: string
  link: string
}

const teams: Team[] = [
  {
    id: 1,
    name: 'Équipe 1',
    link: 'https://volley37-ufolep-fsgt.fr/?page_id=21',
  },
  {
    id: 2,
    name: 'Équipe 2',
    link: 'https://volley37-ufolep-fsgt.fr/?page_id=25',
  },
]
</script>

<template>
  <section id="club" class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
    <!-- Gradient overlays -->
    <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="pointer-events-none absolute -top-24 -left-24 size-144 rounded-full bg-linear-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/10 blur-3xl">
      </div>
      <div
        class="pointer-events-none absolute -bottom-28 -right-24 size-128 rounded-full bg-linear-to-tr from-indigo-500/20 via-violet-500/20 to-transparent blur-3xl">
      </div>
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p class="uppercase tracking-wider text-xs text-violet-300 mb-2">Le club</p>
        <h2 class="text-4xl sm:text-5xl font-semibold text-white leading-tight">Union Sportive Renaudine — Volley-Ball
        </h2>
        <p class="mt-3 text-lg/8 text-gray-300">
          Équipes senior engagées dans le
          <a class="underline underline-offset-2 text-violet-300 hover:text-white"
            href="https://volley37-ufolep-fsgt.fr/" target="_blank" rel="noopener nofollow">championnat UFOLEP</a>
          d'Indre-et-Loire.
        </p>
      </div>

      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <aside class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 shadow-sm" aria-labelledby="a-propos-titre">
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300">ℹ️</span>
            <h3 id="a-propos-titre" class="text-white text-lg font-semibold">À propos du club</h3>
          </div>
          <p class="mt-3 text-gray-300">
            Club convivial basé à Château-Renault. Entraînements hebdomadaires, compétitions UFOLEP et accueil des
            nouveaux joueuses et joueurs.
          </p>
          <ul class="mt-3 space-y-1 text-sm text-gray-300 list-disc pl-5">
            <li>Mardi 19:30 – 22:30</li>
            <li>Vendredi 20:00 – 23:00</li>
          </ul>
        </aside>

        <article v-for="team in teams" :key="team.id"
          class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 shadow-sm transition-colors hover:bg-white/10">
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300">🏐</span>
            <h3 class="text-white text-lg font-semibold">{{ team.name }}</h3>
          </div>
          <p class="mt-3 text-gray-300">
            Suivez les résultats, le calendrier des rencontres et le classement.
          </p>
          <p class="mt-4">
            <a class="inline-block rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700"
              :href="team.link" target="_blank" rel="noopener nofollow"
              :aria-label="`Voir les résultats de ${team.name} (nouvelle fenêtre)`">
              Voir les résultats
            </a>
          </p>
        </article>
      </div>
    </div>
  </section>

</template>
