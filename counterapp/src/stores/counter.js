import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    // Reactivity data
    count: 0,
  }),

  // Like methods
  actions: {
    decreaseCounter() {
      this.count--;
    },

    increaseCounter() {
      this.count++;
    }
  },

  // Like computed
  // It need to pass the state
  getters: {
    oddOrEven: (state) =>  {
      return state.count % 2 === 0 ? 'even' : 'odd';
    },
  },

})
