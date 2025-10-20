<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Mobile detection to decide whether phone is clickable
const isMobile = ref(false)
function updateIsMobile() {
  if (typeof window !== 'undefined') {
    isMobile.value = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches
  }
}
onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile)
})
</script>

<template>
  <main id="top">
    <section class="hero">
      <div class="hero-inner">
        <h1>Volleyball à Château-Renault, USR</h1>
        <div class="cta-group">
          <a class="cta secondary" href="/actualites">Voir toutes les actualités</a>
          <a class="cta primary" href="mailto:guillaume.noinville@wanadoo.fr">Nous contacter</a>
        </div>
        <div class="media-placeholder hero-media" aria-hidden="true">Visuel à venir</div>
      </div>
    </section>

    <section id="club">
      <div class="about">
        <div>
          <h2>Le club</h2>
          <p>
            Equipes Senior présentes dans le <a href="https://volley37-ufolep-fsgt.fr/">championnat ufolep</a>
          </p>
          <ul>
            <li>
              Equipe 1: <a target="_blank" href="https://volley37-ufolep-fsgt.fr/?page_id=21">Résultats</a>
            </li>
            <li>
              Equipe 2: <a target="_blank" href="https://volley37-ufolep-fsgt.fr/?page_id=25">Résultats</a>
            </li>
          </ul>
          <div class="visuals" aria-hidden="true">
            <div class="media-placeholder">Photo équipe</div>
            <div class="media-placeholder">Salle / Match</div>
          </div>
        </div>
      </div>
    </section>

    <section id="actualites">
      <div class="news">
        <h2>Actualités</h2>
        <p>Découvrez les dernières annonces du club.</p>
        <p>
          <a class="cta secondary" href="/actualites">Voir toutes les actualités</a>
        </p>
      </div>
    </section>

    <section id="infos">
      <div class="info">
        <h2>Infos pratiques</h2>
        <div class="info-item">
          <h3 class="info-heading">Entraînements et horaires</h3>
          <article class="info-card">
            <ul>
              <li>Mardi 19h30 - 22h30</li>
              <li>Vendredi 20h00 - 23h00</li>
            </ul>
          </article>
        </div>
        <div class="info-item">
          <h3 class="info-heading">Localisation</h3>
          <article class="info-card">
            <p>
              Gymnase Paul TAVANO — coordonnées: 47°35'50.1"N 0°54'59.0"E
            </p>
            <div class="map-embed">
              <iframe class="map-frame" title="Carte — Gymnase Paul TAVANO"
                src="https://www.google.com/maps?q=47.59725,0.916389&hl=fr&z=17&t=k&output=embed" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
            </div>
          </article>
        </div>
        <div class="info-item">
          <h3 class="info-heading">Nous rejoindre</h3>
          <article class="info-card">
            <p class="todo">Formulaire d'inscription</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
