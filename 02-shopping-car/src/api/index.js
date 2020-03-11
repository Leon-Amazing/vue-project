import request from '@/axios'

export function getFilterList () {
  return request({
    url: '/getFilterList',
    method: 'get'
  })
}

export function getProductList () {
  return request({
    url: '/getProductList',
    method: 'get'
  })
}
