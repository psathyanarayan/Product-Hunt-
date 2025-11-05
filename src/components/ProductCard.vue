<script setup>
defineProps({
    id: {
        type: [String, Number],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: '$'
    },
    buttonText: {
        type: String,
        default: 'View'
    }
})
</script>

<template>
    <div class="product-card h-full">
        <router-link :to="`/job/${id}`" class="block h-full">
            <div
                class="h-full bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                <!-- Fixed height image container -->
                <div class="h-48 bg-gray-100">
                    <img :src="image" :alt="name" class="w-full h-full object-cover" />
                </div>

                <!-- Content with flex-grow -->
                <div class="p-4 flex flex-col h-[calc(100%-12rem)]">
                    <h2 class="text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors truncate">
                        {{ name }}
                    </h2>

                    <p class="text-sm text-gray-600 mt-2 line-clamp-2 flex-grow">{{ description }}</p>

                    <div class="mt-4 flex items-center justify-between">
                        <div class="flex items-baseline space-x-1">
                            <span class="text-sm text-gray-500">{{ currency }}</span>
                            <span class="text-lg font-bold text-indigo-600">{{ price.toFixed(2) }}</span>
                        </div>
                        <button
                            class="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            {{ buttonText }}
                        </button>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
