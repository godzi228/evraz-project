import {defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // также может быть объявлено как
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})
