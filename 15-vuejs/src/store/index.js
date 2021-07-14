import { createStore } from 'vuex'

export default createStore({
  state: {
    ingredients: {
      salade: [
          ['épinards', 5],
          ['salade verte', 3],
          ['laitue', 3],
      ],
      topping: [
          ['topping1', 0],
          ['topping1', 1],
          ['topping2', 2],
          ['topping3', 3],
          ['topping4', 4],
      ],
      boisson: [
          ['coca', 4],
          ['fanta', 4],
          ['vodka', 17],
          ['redbull', 7],
      ],
      dessert: [
          ['milles-feuilles', 7],
          ['fondant au chocolat', 12],
          ['éclair à la pistache', 5],
          ['flamby', 3],
      ]
  },
  commande:  [
      
  ]
  },
  mutations: {
    ADD_COMMANDE(state, payload){
      state.commande.push(payload)
      console.log(state.commande)
    },
  },
  actions: {
    addCommande(context, payload) {
      context.commit('ADD_COMMANDE', payload)
    },
  },
  modules: {
  },
  getters: {
    ingredients(state) {
        return state.ingredients
    },
    Live(state) {
        return state.commande
    }
  }
})
