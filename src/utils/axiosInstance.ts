import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://storage.googleapis.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})