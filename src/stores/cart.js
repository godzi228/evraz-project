import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: []
  }),

  actions: {
    addCartItem(product) {
      for (let cartItem of this.cartItems) {
        if (cartItem.name === product.name) {
          this.increaseCartItem(cartItem)
          return
        }
      }
      this.cartItems.push({
        ...product,
        quantity: 1,
      })
    },
    increaseCartItem(product) {
      product.quantity += 1
    },
    decreaseCartItem(product) {
      if(product.quantity > 1) {
        product.quantity -= 1
      }
    }
  }
})


