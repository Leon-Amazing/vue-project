import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: 'http://192.168.100.194:8080/api'
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  return Promise.resolve(response)
}, error => {
  return Promise.reject(error)
})

export default service
