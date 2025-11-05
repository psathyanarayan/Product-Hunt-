<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProducts } from '../store/useProducts'

const route = useRoute()
const jobId = computed(() => route.params.id ?? '')
const productStore = useProducts()
// debug log (reactive value accessed with .value)
onMounted(() => {
    productStore.fetchProductById(jobId.value)

})
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
        <div v-if="productStore.loading" class="text-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        </div>

        <div v-else-if="productStore.error" class="text-center py-12 text-red-600">
            {{ productStore.error }}
        </div>

        <div v-else class="bg-white rounded-lg shadow-sm overflow-hidden">
            <div class="relative h-64 md:h-96 bg-gray-100">
                <img :src="productStore?.product?.image" :alt="productStore?.product?.name"
                    class="w-full h-full object-cover" />
                <button @click="$router.go(-1)"
                    class="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-full hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
            </div>

            <div class="p-6 md:p-8">
                <div class="flex flex-wrap items-start justify-between gap-4">
                    <div class="flex-1">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-900">
                            {{ productStore?.product?.name }}
                        </h1>
                        <p class="mt-4 text-lg text-gray-600">
                            {{ productStore?.product?.description }}
                        </p>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="text-3xl font-bold text-indigo-600">
                            ${{ productStore?.product?.price.toFixed(2) }}
                        </div>
                        <button
                            class="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <!-- Additional Details -->
                <div class="mt-8 pt-8 border-t">
                    <h2 class="text-xl font-semibold mb-4">Product Details</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-medium text-gray-900">Features</h3>
                            <ul class="mt-2 space-y-2 text-gray-600">
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    High-quality materials
                                </li>
                                <li class="flex items-center">
                                    <svg class="h-5 w-5 text-indigo-500 mr-2" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                    Premium finish
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-medium text-gray-900">Specifications</h3>
                            <dl class="mt-2 space-y-2 text-gray-600">
                                <div class="flex justify-between">
                                    <dt>Category</dt>
                                    <dd>Electronics</dd>
                                </div>
                                <div class="flex justify-between">
                                    <dt>Stock</dt>
                                    <dd>Available</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>