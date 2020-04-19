import typesPortfolio from "./type"

const state = {
  funds: 1000,
  stocks: []
}

const getters = {
  stocks(state) {
    return state.stocks
  },
  funds (state) {
    return state.funds
  }
}

const mutations = {
  [typesPortfolio.BUY_STOCK] (state,{ id, name, quantity, price }) {
    let isExist = state.stocks.some(el => el.id == id)
    if(isExist) {
      const index = state.stocks.findIndex( el => el.id === id )
      console.log(quantity)
      state.stocks[index].quantity += quantity
    }else{
      state.stocks = [...state.stocks,{ id, name,quantity,price }]
    }
    state.funds -= price * quantity
    
  },
  [typesPortfolio.SELL_STOCK] (state,{ id, quantity, price }) {
    const record = state.stocks.find(element => element.id == id)
    if(record.quantity > quantity) {
      record.quantity -= quantity
    }else {
      state.stocks.splice(state.stocks.indexOf(record),1)
    }
    state.funds += price * quantity
  }
}

const actions = {
  sellStock({commit},order) {
    commit(typesPortfolio.SELL_STOCK, order)
  },
  buyStock({commit}, payload) {
    commit(typesPortfolio.BUY_STOCK, payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}