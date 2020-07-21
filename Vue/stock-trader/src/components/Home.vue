<template>
    <div class="well">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your data</p>
        <p>Click on 'End Day' to begin a new day</p>
        <hr>
        <p><strong>Your Funds: {{ funds | currency }}</strong></p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

