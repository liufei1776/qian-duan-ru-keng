<template>
    <div>
        <app-stock 
            v-for="stock in stockPortfolio" 
            v-bind:key="stock.id" 
            v-bind:stock="stock">
        </app-stock>
    </div>
</template>

<script>
import Stock from "./Stock.vue"
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stockPortfolio() {
            return this.$store.getters.stockPortfolio; 
        }
    }
}
</script>