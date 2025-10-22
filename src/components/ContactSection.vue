<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted } from 'vue'

type ContactForm = {
  nom: string
  email: string
  message: string
}

const form = reactive<ContactForm>({ nom: '', email: '', message: '' })
const submitting = ref(false)
const status = ref<null | 'ok' | 'error'>(null)

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

function validateEmail(email: string) {
  return /.+@.+\..+/.test(email)
}

function onSubmit(e: Event) {
  e.preventDefault()
  status.value = null

  if (!form.nom || !validateEmail(form.email) || !form.message) {
    status.value = 'error'
    return
  }

  submitting.value = true
  try {
    const subject = encodeURIComponent('Contact USR Volley')
    const body = encodeURIComponent(
      `Nom: ${form.nom}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    )
    window.location.href = `mailto:guillaume.noinville@wanadoo.fr?subject=${subject}&body=${body}`
    status.value = 'ok'
  } catch (err) {
    console.error(err)
    status.value = 'error'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <section id="contact" class="mx-auto max-w-7xl px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 class="text-2xl font-semibold">Contact</h2>
        <ul class="mt-2 space-y-2">
          <li><strong>Email :</strong> guillaume.noinville@wanadoo.fr</li>
          <li>
            <strong>Téléphone: </strong>
            <template v-if="isMobile">
              <a class="text-violet-700 hover:text-violet-800" href="tel:+33682580684">0682580684</a>
            </template>
            <template v-else>
              0682580684
            </template>
          </li>
        </ul>
      </div>
      <div>
        <form class="grid gap-2" @submit="onSubmit">
          <label class="font-medium" for="nom">Nom</label>
          <input id="nom" name="nom" v-model="form.nom" type="text" placeholder="Votre nom" required
            class="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-300" />

          <label class="font-medium" for="email">Email</label>
          <input id="email" name="email" v-model="form.email" type="email" placeholder="nom@exemple.fr" required
            class="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-300" />

          <label class="font-medium" for="message">Message</label>
          <textarea id="message" name="message" v-model="form.message" placeholder="Votre demande..." required
            class="w-full min-h-36 resize-y px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-300" />

          <button type="submit" :disabled="submitting"
            class="mt-1 inline-flex items-center rounded-lg px-4 py-2 font-semibold text-white bg-violet-600 hover:bg-violet-700 disabled:opacity-70 disabled:cursor-not-allowed">
            Envoyer
          </button>
          <p v-if="status === 'ok'" class="text-sm text-emerald-700">
            Ouverture de votre messagerie… Si rien ne s'ouvre, écrivez-nous à
            guillaume.noinville@wanadoo.fr
          </p>
          <p v-if="status === 'error'" class="text-sm text-red-700">
            Merci de renseigner un nom, un email valide et un message.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
