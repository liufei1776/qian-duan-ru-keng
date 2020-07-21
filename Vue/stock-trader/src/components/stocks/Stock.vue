<template>
    <div class="col-sm-6 col-md-4">
        <div :class="['panel', isInsufficientFunds ? 'panel-danger' : 'panel-success' ]">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control" 
                        placeholder="Quanlity" 
                        v-model="quantity">
                </div>
                <div class="pull-right">
                    <button :class="['btn', isInsufficientFunds ? 'btn-danger' : 'btn-success']" 
                        @click="buyStock"
                        :disabled="isBuyButtonDisabled">
                       Buy
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
            quantity: 0  // It's string obtained from input, should parse it to Integer
        }
    },
    computed: {
        isBuyButtonDisabled(){
            return parseInt(this.quantity) <= 0 || !Number.isInteger(Number(this.quantity)) || this.isInsufficientFunds;
        },
        isInsufficientFunds() {
            return this.stock.price * parseInt(this.quantity) > this.$store.getters.funds;
        }
    },
    methods: {
        buyStock() {
            // which stock you bought
            const order = {
                stockId: this.stock.id,
                stockName: this.stock.name,
                stockPrice: this.stock.price,
                stockQuantity: parseInt(this.quantity) 
            };

            // Dispatch request to Actions
            this.$store.dispatch('buyStock', order);

            // reset quantiyt
            this.quantity = 0;
        }
    }
}
</script>


