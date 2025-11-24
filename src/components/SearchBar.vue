<template>
    <div class="search-bar">
        <input v-model="localQuery" @input="onInput" type="text" placeholder="Search products..."
            class="search-input" />
        <button @click="onSearch" class="search-btn">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="#333" stroke-width="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="#333" stroke-width="2" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    emits: ['update:search', 'search'],
    props: {
        searchQuery: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            localQuery: this.searchQuery
        }
    },
    watch: {
        searchQuery(newVal) {
            // keep local in sync when parent changes externally
            if (newVal !== this.localQuery) this.localQuery = newVal || '';
        }
    },
    methods: {
        onInput(event) {
            this.localQuery = event.target.value;
            this.$emit('update:search', this.localQuery);
        },
        onSearch() {
            // emit the current local value
            this.$emit('search', this.localQuery);
        }
    }
}
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    padding: 0.5rem 1rem;
    width: 100%;
    max-width: 400px;
}

.search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    background: transparent;
}

.search-btn {
    background: #f5f5f5;
    border: none;
    border-radius: 50%;
    padding: 0.4rem;
    cursor: pointer;
    transition: background 0.2s;
}

.search-btn:hover {
    background: #e0e0e0;
}
</style>