<script setup lang="ts">
</script>

<template>
  <section id="infos" class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24">
    <!-- Violet gradient overlays to match About -->
    <div aria-hidden class="absolute inset-0 -z-10 overflow-hidden">
      <div class="pointer-events-none absolute -top-24 -left-24 size-[36rem] rounded-full bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/10 blur-3xl"></div>
      <div class="pointer-events-none absolute -bottom-28 -right-24 size-[32rem] rounded-full bg-gradient-to-tr from-indigo-500/20 via-violet-500/20 to-transparent blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-2xl sm:text-3xl font-semibold text-white">Infos pratiques</h2>

      <div class="my-6">
        <h3 class="text-lg font-semibold text-white mb-2">Localisation</h3>
        <article class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div class="w-full overflow-hidden rounded-xl">
            <iframe
              class="w-full h-72 md:h-[420px] border-0 rounded-lg"
              title="Carte — Gymnase Paul TAVANO"
              src="https://www.google.com/maps?q=47.59725,0.916389&hl=fr&z=17&t=k&output=embed"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
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
