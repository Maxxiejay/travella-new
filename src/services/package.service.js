
import apiClient from './axios';

export const packageService = {
  async createPackage(packageData) {
    const response = await apiClient.post('/packages', packageData);
    return response.data;
  },

  async getPackage(id) {
    const response = await apiClient.get(`/packages/${id}`);
    return response.data;
  },

  async getAllPackages() {
    const response = await apiClient.get('/packages');
    return response.data;
  },

  async getAllPackagesAdmin() {
    const response = await apiClient.get('/packages/admin/all');
    return response.data;
  },

  async updatePackage(id, packageData) {
    const response = await apiClient.put(`/packages/${id}`, packageData);
    return response.data;
  },

  async deletePackage(id) {
    const response = await apiClient.delete(`/packages/${id}`);
    return response.data;
  }
};
