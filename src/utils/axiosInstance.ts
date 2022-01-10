import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})