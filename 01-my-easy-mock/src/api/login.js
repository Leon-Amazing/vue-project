import service from '@/axios'

export default function loginByUsername (username, password) {
  return service({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
