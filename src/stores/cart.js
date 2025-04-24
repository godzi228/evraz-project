import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({countcart: 0, name: 'Павел'})
})
