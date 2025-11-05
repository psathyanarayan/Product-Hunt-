<script setup>
import { onMounted, watch } from 'vue'
import { useProducts } from '../store/useProducts'
import ProductCard from '../components/ProductCard.vue'

const productStore = useProducts()

onMounted(() => {
    productStore.fetchProducts();
    productStore.fetchCategories();
})

watch(() => productStore.products, (newProducts) => {
    console.log('Products updated:', newProducts);
});
</script>


<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
        <div v-if="productStore.loading" class="text-center text-gray-600">Loading...</div>
        <div v-else-if="productStore.error" class="text-center text-red-600">{{ productStore.error }}</div>
        <div v-else>
            <h1 class="text-3xl font-extrabold mb-6">Products</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard v-for="product in productStore.products" :key="product.id" :id="product.id"
                    :name="product.name" :description="product.description" :image="product.image"
                    :price="product.price" />
            </div>
        </div>
    </div>
</template>