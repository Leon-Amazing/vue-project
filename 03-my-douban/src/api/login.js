import request from '../axios'

export function loginByUserInfo (userName, pwd) {
  const data = {
    userName,
    pwd
  }
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
