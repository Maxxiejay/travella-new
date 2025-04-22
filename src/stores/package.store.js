
import { defineStore } from 'pinia'
import { packageService } from '../services/package.service'

export const usePackageStore = defineStore('package', {
  state: () => ({
    packages: [],
    currentPackage: null,
    loading: false,
    error: null
  }),

  getters: {
    getAllPackages: (state) => state.packages,
    getCurrentPackage: (state) => state.currentPackage,
    isLoading: (state) => state.loading
  },

  actions: {
    async fetchPackages() {
      this.loading = true
      try {
        const packages = await packageService.getAllPackages()
        this.packages = packages
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    },

    async createPackage(packageData) {
      this.loading = true
      try {
        const newPackage = await packageService.createPackage(packageData)
        this.packages.push(newPackage)
        return newPackage
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async getPackage(id) {
      this.loading = true
      try {
        const packageData = await packageService.getPackage(id)
        this.currentPackage = packageData
        return packageData
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async updatePackage(id, packageData) {
      this.loading = true
      try {
        const updatedPackage = await packageService.updatePackage(id, packageData)
        const index = this.packages.findIndex(p => p.id === id)
        if (index !== -1) {
          this.packages[index] = updatedPackage
        }
        return updatedPackage
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async deletePackage(id) {
      this.loading = true
      try {
        await packageService.deletePackage(id)
        this.packages = this.packages.filter(p => p.id !== id)
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    }
  }
})
