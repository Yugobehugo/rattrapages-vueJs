import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
        live:  [
            'ha'
        ]
    },
    mutations: {

    },
    actions: {

    },
    modules: {},
    getters: {
        ingredients(state) {
            return state.ingredients
        },
        Live(state) {
            return state.live
        }
    },
})