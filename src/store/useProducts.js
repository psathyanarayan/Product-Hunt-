import { defineStore } from "pinia";
import { ref } from "vue";

export const useProducts = defineStore("products", () => {
    const products = ref([]);       // list of all products
    const product = ref(null);      // single product
    const categories = ref([]);     // category list
    const loading = ref(false);
    const error = ref(null);

    const fetchProducts = async () => {
        loading.value = true; error.value = null;
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            products.value = await res.json();
        } catch (e) {
            error.value = e?.message || "Failed to load products";
        } finally {
            loading.value = false;
        }
    };

    const fetchProductById = async (id) => {
        loading.value = true; error.value = null;
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            product.value = await res.json();
        } catch (e) {
            error.value = e?.message || "Failed to load product";
        } finally {
            loading.value = false;
        }
    };

    const fetchCategories = async () => {
        loading.value = true; error.value = null;
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            categories.value = await res.json();
        } catch (e) {
            error.value = e?.message || "Failed to load categories";
        } finally {
            loading.value = false;
        }
    };

    return {
        // state
        products, product, categories, loading, error,
        // actions
        fetchProducts, fetchProductById, fetchCategories
    };
});