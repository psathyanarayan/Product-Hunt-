<script setup>
import { ref } from 'vue'
const currentYear = new Date().getFullYear()
const mobileMenuOpen = ref(false)
</script>

<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- Navbar -->
        <header class="bg-white shadow-sm">
            <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div class="w-full py-4">
                    <div class="flex items-center justify-between">
                        <!-- Logo -->
                        <div class="flex items-center">
                            <router-link to="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700">
                                JobSearch
                            </router-link>
                        </div>

                        <!-- Desktop Navigation -->
                        <!-- <div class="hidden md:flex items-center space-x-8">
                            <router-link to="/" class="text-base font-medium text-gray-700 hover:text-indigo-600">
                                Home
                            </router-link>
                            <a href="#" class="text-base font-medium text-gray-700 hover:text-indigo-600">
                                Categories
                            </a>
                          
                           
                        </div> -->

                        <!-- Mobile menu button -->
                        <div class="md:hidden">
                            <button @click="mobileMenuOpen = !mobileMenuOpen" type="button"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                                aria-controls="mobile-menu" :aria-expanded="mobileMenuOpen">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Mobile Navigation -->
                <div v-show="mobileMenuOpen" class="md:hidden pb-3" id="mobile-menu">
                    <div class="pt-2 pb-3 space-y-1">
                        <router-link to="/"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                            Home
                        </router-link>
                        <a href="#"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                            Categories
                        </a>
                        <a href="#"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
                            About
                        </a>
                        <button
                            class="w-full text-left px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
                            Post a Job
                        </button>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="flex-grow">
            <router-view />
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t">
            <div class="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                
                <p class="text-base text-gray-500 text-center">
                    &copy; {{ currentYear }} JobSearch. All rights reserved.
                </p>
           
            </div>
        </footer>
    </div>
</template>