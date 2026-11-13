import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('jackson_admin_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      localStorage.removeItem('jackson_admin_token');
    }
    return Promise.reject(error);
  }
);

export const authApi = {
  login: (payload) => apiClient.post('/auth/login', payload).then((res) => res.data),
  me: () => apiClient.get('/auth/me').then((res) => res.data)
};

export const bannerApi = {
  getActive: () => apiClient.get('/banners/active').then((res) => res.data),
  getAllAdmin: () => apiClient.get('/banners/admin').then((res) => res.data),
  create: (payload) => apiClient.post('/banners/admin', payload).then((res) => res.data),
  update: (id, payload) => apiClient.put(`/banners/admin/${id}`, payload).then((res) => res.data),
  updateStatus: (id, status) =>
    apiClient.patch(`/banners/admin/${id}/status`, { status }).then((res) => res.data),
  updateOrder: (id, displayOrder) =>
    apiClient.patch(`/banners/admin/${id}/order`, { displayOrder }).then((res) => res.data),
  remove: (id) => apiClient.delete(`/banners/admin/${id}`).then((res) => res.data)
};

export const enquiryApi = {
  submit: (payload) => apiClient.post('/enquiries', payload).then((res) => res.data),
  getStats: (params) => apiClient.get('/enquiries/admin/stats', { params }).then((res) => res.data),
  getList: (params) => apiClient.get('/enquiries/admin', { params }).then((res) => res.data),
  updateStatus: (id, status) =>
    apiClient.patch(`/enquiries/admin/${id}/status`, { status }).then((res) => res.data),
  softDelete: (id) => apiClient.patch(`/enquiries/admin/${id}/delete`).then((res) => res.data),
  restore: (id) => apiClient.patch(`/enquiries/admin/${id}/restore`).then((res) => res.data)
};

export const contactApi = {
  submit: (payload) => apiClient.post('/contact', payload).then((res) => res.data)
};
