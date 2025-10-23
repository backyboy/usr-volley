<script setup lang="ts">
</script>
<template>
  <section id="infos" class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
    <!-- Violet gradient overlays to match About -->
    <div aria-hidden class="absolute inset-0 -z-10 overflow-hidden">
      <div
        class="pointer-events-none absolute -top-24 -left-24 size-144 rounded-full bg-linear-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/10 blur-3xl">
      </div>
      <div
        class="pointer-events-none absolute -bottom-28 -right-24 size-128 rounded-full bg-linear-to-tr from-indigo-500/20 via-violet-500/20 to-transparent blur-3xl">
      </div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl sm:text-2xl lg:text-2xl font-semibold text-white">Infos pratiques</h2>
      <div class="mt-4 flex flex-wrap items-center gap-4 text-white">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
          class="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Facebook">
          <svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
              d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.325 24h11.495v-9.294H9.691V11.01h3.129V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.767v2.318h3.59l-.467 3.696h-3.123V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.675 0Z" />
          </svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
          class="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Instagram">
          <svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" stroke="currentColor" stroke-width="1.5"
              fill="none" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1.5" fill="none" />
            <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
          </svg>
        </a>
      </div>

      <div class="my-6">
        <h3 class="text-lg font-semibold text-white mb-2">Localisation</h3>
        <article class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div class="w-full overflow-hidden rounded-xl">
            <iframe class="w-full h-72 md:h-[420px] border-0 rounded-lg" title="Carte — Gymnase Paul TAVANO"
              src="https://www.google.com/maps?q=47.59725,0.916389&hl=fr&z=17&t=k&output=embed" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          </div>
          <p class="mt-3 text-gray-300">
            Gymnase Paul TAVANO — coordonnées: 47°35'50.1"N 0°54'59.0"E
          </p>
        </article>
      </div>

      <div class="my-6">
        <h3 class="text-lg font-semibold text-white mb-2">Nous rejoindre</h3>
        <article class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <p class="text-red-300">Formulaire d'inscription</p>
        </article>
      </div>
    </div>
  </section>
</template>
