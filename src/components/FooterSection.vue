<template>
    <footer class="mt-4 px-4 py-6 border-t border-gray-200 bg-white text-gray-700">
        <div class="mx-auto max-w-7xl flex items-center justify-between">
            <div class="flex flex-wrap gap-4">
                <a class="text-gray-700 hover:text-gray-900" href="/">Le club</a>
                <a class="text-gray-700 hover:text-gray-900" href="/actualites">Actualités</a>
                <a class="text-gray-700 hover:text-gray-900" href="/#infos">Infos pratiques</a>
                <a class="text-gray-700 hover:text-gray-900" href="/contact">Contact</a>
            </div>
            <p>{{ new Date().getFullYear() }} USR Volley-Ball</p>
        </div>
    </footer>
</template>


<script setup lang="ts"></script>
