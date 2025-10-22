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
  <section id="club" class="mx-auto max-w-7xl px-4 py-8">
    <header class="relative overflow-clip rounded-xl border border-black/5 bg-linear-to-b from-violet-50 to-white">
      <div class="relative z-10 p-6 md:p-8">
        <p class="uppercase tracking-wider text-xs text-violet-700 mb-1">Le club</p>
        <h2 class="text-2xl md:text-3xl font-semibold leading-tight">Union Sportive Renaudine — Volley-Ball</h2>
        <p class="m-0 text-gray-600">
          Équipes senior engagées dans le
          <a class="underline underline-offset-2 text-violet-700 hover:text-violet-800"
            href="https://volley37-ufolep-fsgt.fr/" target="_blank" rel="noopener nofollow">championnat UFOLEP</a>
          d'Indre-et-Loire.
        </p>
      </div>
    </header>

    <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
      <aside class="rounded-xl border border-black/5 bg-linear-to-b from-violet-50 to-white p-4 shadow-sm"
        aria-labelledby="a-propos-titre">
        <h3 id="a-propos-titre" class="text-lg font-semibold mb-1">À propos du club</h3>
        <p class="text-gray-600 mb-2">
          Club convivial basé à Château-Renault. Entraînements hebdomadaires, compétitions
          UFOLEP et accueil des nouveaux joueuses et joueurs.
        </p>
        <ul class="flex flex-wrap gap-x-4 gap-y-3 text-sm list-disc pl-5 m-0">
          <li>Mardi 19:30 – 22:30</li>
          <li>Vendredi 20:00 – 23:00</li>
        </ul>
      </aside>
      <article v-for="team in teams" :key="team.id"
        class="rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg">
        <header class="mb-1">
          <h3 class="text-lg font-semibold">{{ team.name }}</h3>
        </header>
        <p class="text-gray-600 mb-3">
          Suivez les résultats, le calendrier des rencontres et le classement.
        </p>
        <p class="mt-auto">
          <a class="inline-block rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700"
            :href="team.link" target="_blank" rel="noopener nofollow"
            :aria-label="`Voir les résultats de ${team.name} (nouvelle fenêtre)`">Voir les résultats</a>
        </p>
      </article>
    </div>
  </section>

</template>
