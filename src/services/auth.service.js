
import apiClient from './axios';

export const authService = {
  async signup(userData) {
    const response = await apiClient.post('/auth/signup', userData);
    return response.data;
  },

  async signin(credentials) {
    const response = await apiClient.post('/auth/signin', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  async getProfile() {
    const response = await apiClient.get('/auth/profile');
    return response.data;
  },

  async verifyEmail(token) {
    const response = await apiClient.get(`/auth/verify-email/${token}`);
    return response.data;
  },

  async resendVerification(email) {
    const response = await apiClient.post('/auth/resend-verification', { email });
    return response.data;
  },

  async forgotPassword(email) {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response.data;
  },

  async resetPassword(token, newPassword) {
    const response = await apiClient.post(`/auth/reset-password/${token}`, { password: newPassword });
    return response.data;
  }
};
