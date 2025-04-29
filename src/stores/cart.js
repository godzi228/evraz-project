import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),

  actions: {
    addCartItem(product) {
      this.cartItems.push(product)
    }
  }
})
