
import { defineStore } from 'pinia'
import { authService } from '../services/auth.service'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  
  actions: {
    checkAuth() {
      this.token = localStorage.getItem('token')
    },
    
    async login(credentials) {
      const data = await authService.signin(credentials)
      this.token = data.token
      this.user = data.user
    },
    
    logout() {
      localStorage.removeItem('token')
      this.token = null
      this.user = null
    }
  }
})
