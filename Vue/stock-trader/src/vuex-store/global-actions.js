import Vue from 'vue';

export const loadData = ({commit}) => {
    Vue.http.get('data.json')
            .then(response => response.json())  // Resolves the body as parsed JSON object
            .then(data => {
                if(data)
                {
                    const stockCandidates = data.stockCandidates;
                    const funds = data.funds;
                    const stocksOwned = data.stocksOwned;

                    // call mutations
                    commit('SET_STOCK', stockCandidates);
                    commit('SET_PORTFOLIO',{ funds, stocksOwned });
                }
            });
}