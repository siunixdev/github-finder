import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
export const axiosClient = axios.create({
  baseURL: `${API_URL}/`
})

export const apiClient = {

  get: (url) => {
    return axiosClient.get(url)
  },

  post: (url, data) => {
    return axiosClient.post(url, data)
  },

  delete: (url) => {
    return axiosClient.delete(url)
  },

  put: (url, data) => {
    return axiosClient.put(url, data)
  },

  patch: (url, data) => {
    return axiosClient.patch(url, data)
  },
}