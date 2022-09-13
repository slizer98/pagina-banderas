import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({commit}) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        // console.log(data)
        commit('setPaises', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
