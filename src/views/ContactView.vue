<template>
  <main id="top">
    <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75">
        </div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Nous contacter</h2>
        <p class="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
      </div>
      <form :action="formAction" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20" @submit.prevent="onSubmit"
        ref="formRef">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Prénom</label>
            <div class="mt-2.5">
              <input id="first-name" type="text" name="first-name" v-model="firstName" autocomplete="given-name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div>
            <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Nom</label>
            <div class="mt-2.5">
              <input id="last-name" type="text" name="last-name" v-model="lastName" autocomplete="family-name"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm/6 font-semibold text-gray-900">E-mail</label>
            <div class="mt-2.5">
              <input id="email" type="email" name="email" v-model="email" autocomplete="email"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Téléphone</label>
            <div class="mt-2.5">
              <div
                class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input id="phone-number" type="text" name="phone-number" v-model="phoneNumber"
                  placeholder="06 12 34 56 78"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
              </div>
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
            <div class="mt-2.5">
              <textarea id="message" name="message" v-model="message" rows="4"
                class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" :disabled="isSubmitting"
            class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            {{ isSubmitting ? 'Envoi…' : 'Envoyer' }}
          </button>
          <p v-if="submitSuccess" class="mt-4 text-sm text-green-600">Message envoyé. Merci !</p>
          <p v-if="submitError" class="mt-4 text-sm text-red-600">{{ submitError }}</p>
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped></style>
<script setup lang="ts">
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phoneNumber = ref('')
const message = ref('')

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref<string | null>(null)

const formRef = ref<HTMLFormElement | null>(null)
const formAction = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined) || '#'
const fallbackEmail = (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || 'h.t.liolio@hotmail.fr'

function buildMailto(): string {
  const subject = encodeURIComponent(`[Site web] Demande de contact - ${firstName.value} ${lastName.value}`.trim())
  const body = encodeURIComponent(
    [
      'Nouveau message de contact :',
      `Prénom: ${firstName.value}`,
      `Nom: ${lastName.value}`,
      `E-mail: ${email.value}`,
      `Téléphone: ${phoneNumber.value}`,
      '',
      'Message:',
      message.value,
    ].join('\n')
  )
  return `mailto:${fallbackEmail}?subject=${subject}&body=${body}`
}

async function onSubmit() {
  if (isSubmitting.value) return
  submitError.value = null
  submitSuccess.value = false

  if (!firstName.value || !lastName.value || !email.value || !message.value) {
    submitError.value = 'Merci de remplir les champs requis.'
    return
  }

  isSubmitting.value = true
  try {
    if (formAction && formAction !== '#') {
      const fd = new FormData()
      fd.append('first-name', firstName.value)
      fd.append('last-name', lastName.value)
      fd.append('email', email.value)
      fd.append('phone-number', phoneNumber.value)
      fd.append('message', message.value)

      const res = await fetch(formAction, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Échec de l’envoi (${res.status})`)

      submitSuccess.value = true
      firstName.value = ''
      lastName.value = ''
      email.value = ''
      phoneNumber.value = ''
      message.value = ''
    } else {
      window.location.href = buildMailto()
      submitSuccess.value = true
    }
  } catch (e) {
    submitError.value = e?.message || 'Erreur lors de l’envoi.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
