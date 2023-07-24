import axios from 'axios'

// const producao = 'https://kitescolar-api.onrender.com'
// const dev = 'http://localhost:3333'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
})
