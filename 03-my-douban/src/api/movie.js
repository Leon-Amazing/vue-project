import request from '../axios'

export function getHotMoviesList (city, start = 1) {
  return request({
    url: '/api/in_theaters',
    method: 'get',
    params: {
      city,
      start
    }
  })
}

export function getTopMoviesList (start = 1) {
  return request({
    url: '/api/top250',
    method: 'get',
    params: {
      start
    }
  })
}

export function getFutureMoviesList (start = 1) {
  return request({
    url: '/api/coming_soon',
    method: 'get',
    params: {
      start
    }
  })
}

export function getMovieDetails (id) {
  return request({
    url: `/api/subject/${id}`,
    method: 'get'
  })
}
