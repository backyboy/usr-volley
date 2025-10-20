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
        window.location.href = `mailto:contact@usr-volley.fr?subject=${subject}&body=${body}`
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
    <main id="top">
        <section id="contact">
            <div class="contact">
                <div>
                    <h2>Contact</h2>
                    <ul>
                        <li><strong>Email :</strong>guillaume.noinville@wanadoo.fr</li>
                        <li>
                            <strong>Téléphone :</strong>
                            <template v-if="isMobile">
                                <a href="tel:+33682580684">06 82 58 06 84</a>
                            </template>
                            <template v-else>
                                06 82 58 06 84
                            </template>
                        </li>
                    </ul>
                </div>
                <div>
                    <form @submit="onSubmit">
                        <label for="nom">Nom</label>
                        <input id="nom" name="nom" v-model="form.nom" type="text" placeholder="Votre nom" required />

                        <label for="email">Email</label>
                        <input id="email" name="email" v-model="form.email" type="email" placeholder="nom@exemple.fr"
                            required />

                        <label for="message">Message</label>
                        <textarea id="message" name="message" v-model="form.message" placeholder="Votre demande..."
                            required />

                        <button type="submit" :disabled="submitting">Envoyer</button>
                        <p v-if="status === 'ok'" class="form-status ok">
                            Ouverture de votre messagerie… Si rien ne s'ouvre, écrivez-nous à
                            contact@usr-volley.fr
                        </p>
                        <p v-if="status === 'error'" class="form-status error">
                            Merci de renseigner un nom, un email valide et un message.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped></style>
