import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  baseURL: 'http://192.168.100.194/api'
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(response => {
  if (response.status === 500) {

  } else if (response.status === 200) {
    return Promise.resolve(response)
  }
}, error => {
  return Promise.reject(error)
})

export default service
