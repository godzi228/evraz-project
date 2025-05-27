import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
  }),
  getters: {
    getUserName: state => {
      return state.user.name || ''
    },
    getUserMoney: state => {
      return state.user.money || ''
    }
    }
})
