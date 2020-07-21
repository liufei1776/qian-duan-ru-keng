<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                    <h3 class="panel-title">{{ stock.name }}</h3>
                    <div>Current Price: {{ stock.currentPrice }}</div>    
                    <div>Buying Price: {{ stock.buyingPrice }}</div>
                    <div>Quantity: {{ stock.quantity }}</div>          
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quanlity" 
                        v-model="quantity"
                        :class="{'danger' : isInsufficientQuantity}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-info" 
                        @click="sellStock"
                        :disabled="quantity <= 0 || !Number.isInteger(Number(quantity)) ||  isInsufficientQuantity">
                        Sell
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            // how many stocks you want to sell
            // // It's string obtained from input, should parse it to Integer
            quantity: 0  
        }
    },
    computed: {
        isInsufficientQuantity() {
            // You sell more stocks than ones you have
            return parseInt(this.quantity) > this.stock.quantity;
        }
    },
    methods: {
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockName: this.stock.name,
                stockPrice: this.stock.price,
                stockQuantity: parseInt(this.quantity)
            }

            this.$store.dispatch('sellStock', order);
            this.quantity = 0;
        }
    }
}
</script>

<style scoped>
    .danger
    {
        border: 1px solid red;
    }
</style>


