/*
* Stock.js generates and shows all the stocks you want to buy.
*/


import stockData from '../../data/stockdata.js';

const state = {
    stockCandidates: [] // save stock list you want to buy
};

const  mutations = {
    'SET_STOCKS': function(state, stockData) {
        state.stockCandidates = stockData;
    },
    'RND_STOCKS': function(state) {
        // END Day function
        state.stockCandidates.forEach(stock => {
            stock.price = Math.round( stock.price * (1 + Math.random() - 0.5) );
        });
    }
};

const actions = {
    buyStock({commit}, order) {
        // call portfolio module muations - BUY_STOCK
        // After you bought one stock, it'll be saved in portfolio for management
        commit('BUY_STOCK', order);
    },
    initStocks({commit}, order) {
        // Load(initialize) all the stocks you can buy
        commit('SET_STOCKS', stockData);
    },
    randomizeStocks({commit}) {
        commit('RND_STOCKS');
    }
};

const getters = {
    stockCandidates: state => {
        return state.stockCandidates;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}