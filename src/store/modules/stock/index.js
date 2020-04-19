import stockTypes from "./type"
import { stocks } from "../../../mock"

const state = {
  stocks : []
}

const getters = {
  getStocks(state) {
    return state.stocks
  }
}

const mutations = {
  [stockTypes.SET_STOCK](state,payload) {
    state.stocks = payload
  },
  [stockTypes.RND_STOCK]() {

  }
}

const actions = {
  buyStock({commit},order) {
    commit(stockTypes.BUY_STOCK,order)
  },
  setStocks({commit}) {
    commit(stockTypes.SET_STOCK,stocks)
  },
  randomizeStock({commit}) {
    commit(stockTypes.RND_STOCK)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
