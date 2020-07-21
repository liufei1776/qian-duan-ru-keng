<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
            <router-link tag="li" to="/portfolio" active-class="active"><a>Portfolio</a></router-link>
            <router-link tag="li" to="/stocks" active-class="active"><a>Stocks</a></router-link>
        </ul>

        <p class="navbar-text pull-right"><strong>Funds: {{ funds | currency }}</strong></p>

        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click.prevent="endDay">End Day</a></li>
          <li class="dropdown" 
              :class="{'open' : isDropdown}"
              @click.prevent="isDropdown = !isDropdown">
            <a
              href="#"
              role="button"
              class="dropdown-toggle"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click.prevent="saveData">Save Data</a></li>
              <li><a href="#" @click.prevent="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            // we don't need jquery to toggle drop down (data-toggle="dropdown")
            // This cut down jquery script
            isDropdown: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    },
    methods: {
        ...mapActions(['randomizeStocks']),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            // Save data to server.
            // This doesn't change state, so we don't need action to implement
            const data = {
                funds: this.$store.getters.funds,
                stockCandidates : this.$store.getters.stockCandidates,
                stocksOwned: this.$store.getters.stocksOwned
            };

           this.$http.put('data.json', data);
        },
        loadData() {
            // This changes state, we need an action
            this.$store.dispatch('loadData');
        }
    }
}
</script>
