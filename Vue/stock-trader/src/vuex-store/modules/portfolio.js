/*
* Portfolio.js shows and manages the stocks you have bought:
*    1. List stocks you have bought
*    2. Sell stocks
*/


const state = {
    funds: 10000,
    // save the stocks you have bought
    // Tell from stocks array in stocks.js
    stocksOwned: [] 
};

const mutations = {
    'BUY_STOCK'(state, order) {
        // order{stockId, stockName, stockQuantity, stockPrice})

        // Find the stock you have bought
        const record = state.stocksOwned.find(el => el.id == order.stockId);

        if(record)
        {
            // If you have bought it before.
            record.quantity += order.stockQuantity;
        }
        else
        {
            // Or you bought it at first time.
            state.stocksOwned.push({
                id: order.stockId,
                name: order.stockName,
                buyingPrice: order.stockPrice, 
                 // At the time of purchase, sellprice is equal to buying price.
                 // But it can be changed during trade
                currentPrice: order.stockPrice,
                quantity: order.stockQuantity
            });
        }

        // Your funds decreases.
        // It needs condition checking if funds change to negative.
        state.funds -= order.stockPrice * order.stockQuantity;
    },
    'SELL_STOCK'(state, order) {
         // order{stockId, stockName, stockQuantity, stockPrice})

        // Find the stock you want to sell by searching stock id.
        const record = state.stocksOwned.find(el => el.id == order.stockId);

        if(record.quantity > order.stockQuantity)
        {
            // IF you want to sell a part of stock
            record.quantity -= order.stockQuantity;
            state.funds +=  record.currentPrice * order.stockQuantity;
        }
        else
        {
            // Or you sell all quantity
            state.funds += record.currentPrice * record.quantity;
            // You don't own this stock any more.
            state.stocksOwned.splice(state.stocksOwned.indexOf(record), 1);
            
        }
    },
    'SET_PORTFOLIO'(state, {funds, stocksOwned  }) {
        // Load data from server and set them to local data
        state.funds = funds;
        state.stocksOwned = stocksOwned ? stocksOwned : [];
    }
};

const actions = {
    sellStock({commit}, order) {
        commit('SELL_STOCK', order);
    }
    // We don't define buyStock action, because it will be carried out in stocks.js
};

const getters = {
    stockPortfolio(state, getters) {

        return state.stocksOwned.map(stock => {
            // 类似于 数据库 的 join 操作
            const record = getters.stockCandidates.find(el => el.id == stock.id);
            return {
                id: stock.id,
                name: stock.name,
                quantity: stock.quantity,
                buyingPrice: stock.buyingPrice,   // show the price at the time of purchase
                currentPrice: record.price 
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}