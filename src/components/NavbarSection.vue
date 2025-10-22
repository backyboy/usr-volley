<template>
    <Disclosure as="nav" class="relative z-20 isolate overflow-hidden bg-gray-900 border-b border-white/10"
        v-slot="{ open }">
        <!-- Gradient overlays borrowed from AboutSection -->
        <div aria-hidden="true" class="absolute inset-0 -z-10 overflow-hidden">
            <div
                class="pointer-events-none absolute -top-20 -left-24 size-112 rounded-full bg-linear-to-tr from-violet-500/30 via-fuchsia-500/20 to-pink-500/10 blur-3xl">
            </div>
            <div
                class="pointer-events-none absolute -bottom-24 -right-20 size-96 rounded-full bg-linear-to-tr from-indigo-500/20 via-violet-500/20 to-transparent blur-3xl">
            </div>
        </div>
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
                        <XMarkIcon v-else class="block size-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex shrink-0 items-center">
                        <a href="/"><img class="h-8 w-auto rounded-2xl" src="/icon.jpg" alt="Logo USR Volley" /></a>
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <a v-for="item in navigation" :key="item.name" :href="item.href"
                                :class="[item.current ? 'bg-white/5 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pt-2 pb-3">
                <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                    :class="[item.current ? 'bg-white/5 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Le club', href: '/', current: true },
    { name: 'Actualités', href: '/actualites', current: false },
    { name: 'Infos pratiques', href: '/#infos', current: false },
    { name: 'Contact', href: '/contact', current: false },
]
</script>
