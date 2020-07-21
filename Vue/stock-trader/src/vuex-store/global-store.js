import Vue from 'vue';
import Vuex from 'vuex';

import stocksModule from './modules/stocks.js';
import portfolioModule from './modules/portfolio.js';
import * as globalActions from './global-actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: globalActions,
    modules: {
        stocksModule,
        portfolioModule
    }
});