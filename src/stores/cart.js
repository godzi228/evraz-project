import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],

  }),

  getters: {
    getTotal: state => {
      let total = 0
      for (let cartItem of state.cartItems) {
        console.log()
        total += cartItem.quantity * cartItem.price
      }
      return total
    },
    getIcon: state => {
      let icon = 0
          for (let cartItem of state.cartItems) {
            icon = state.cartItems.length
            console.log(icon)
          }
          return icon

    }

  },

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
      if(product.quantity < 5) {
        product.quantity += 1
      }


    },
    decreaseCartItem(product) {
      if(product.quantity > 1) {
        product.quantity -= 1
      }
    },

  }
})


