<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useProducts } from '../store/useProducts'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'

const productStore = useProducts()
const searchQuery = ref('')

onMounted(() => {
    productStore.fetchProducts();
    productStore.fetchCategories();
})

watch(() => productStore.products, (newProducts) => {
    console.log('Products updated:', newProducts);
});

const filteredProducts = computed(() => {
    const q = (searchQuery.value || '').trim().toLowerCase()
    if (!q) return productStore.products
    return productStore.products.filter(p => {
        const name = (p.name || '').toLowerCase()
        const desc = (p.description || '').toLowerCase()
        return name.includes(q) || desc.includes(q)
    })
})
</script>


<template>
    <div class="max-w-6xl mx-auto px-4 py-8">
        <SearchBar :search-query="searchQuery" @update:search="searchQuery = $event" @search="searchQuery = $event" />
        <div v-if="productStore.loading" class="text-center text-gray-600">Loading...</div>
        <div v-else-if="productStore.error" class="text-center text-red-600">{{ productStore.error }}</div>
        <div v-else>
            <h1 class="text-3xl font-extrabold mb-6">Products</h1>
            <div v-if="filteredProducts.length === 0" class="text-center text-gray-500 py-8">No products found.</div>
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProductCard v-for="product in filteredProducts" :key="product.id" :id="product.id" :name="product.name"
                    :description="product.description" :image="product.image" :price="product.price" />
            </div>
        </div>
    </div>
</template>