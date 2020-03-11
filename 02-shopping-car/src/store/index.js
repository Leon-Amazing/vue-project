import Vue from 'vue'
import Vuex from 'vuex'

import { getFilterList, getProductList } from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterList: [],
    productList: [],
    filterListBrand: [],
    car: []
  },
  mutations: {
    ADD_FILTER_LIST (state, payload) {
      state.filterList = payload.result
    },
    ADD_PRODUCT_LIST (state, payload) {
      state.productList = payload.result
      state.filterListBrand = payload.result
    },
    ADD_CAR (state, payload) {
      payload = {
        ...payload,
        count: 1,
        isChecked: true,
        total: payload.price
      }
      state.car.push(payload)
    },
    DELETE_CAR (state, i) {
      state.car.splice(i, 1)
    },
    ALL_DELETE_CAR (state) {
      state.car = []
    },
    CANCLE_CAR (state, payload) {
      state.car.forEach((item, i) => {
        if (item.cid === payload.cid) {
          state.car.splice(i, 1)
        }
      })
    },
    FILTER_LIST_BRAND (state, payload) {
      let arr = []
      payload.forEach((item, i) => {
        let obj = {}
        if (item['id']) {
          obj.id = item.id
          arr.push(obj)
        } else if (item['price']) {
          obj.price = item.price
          arr.push(obj)
        } else if (item['type']) {
          obj.type = item.type
          arr.push(obj)
        } else if (item['size']) {
          obj.size = item.size
          arr.push(obj)
        } else if (item['CPU']) {
          obj.CPU = item.CPU
          arr.push(obj)
        }
      })
      arr.forEach(item => {
        const attr = Object.keys(item)[0]
        const value = Object.values(item)[0]
        if (arr.length === 1) {
          state.filterListBrand = state.productList.filter(item => item[attr] === value)
        } else {
          state.filterListBrand = state.filterListBrand.filter(item => {
            if (attr === 'price') {
              const price = value.split('-')
              if (isNaN(Number(price[0]))) {
                return item[attr] > parseInt(price[0])
              } else {
                return item[attr] > price[0] && item[attr] < price[1]
              }
            } else {
              return item[attr] === value
            }
          })
        }
      })
    }
  },
  actions: {
    addFilterList ({commit}) {
      getFilterList().then(res => {
        commit('ADD_FILTER_LIST', res.data)
      })
      return new Promise((resolve, reject) => {
        getFilterList().then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    },
    addProductList ({ commit }) {
      getProductList().then(res => {
        commit('ADD_PRODUCT_LIST', res.data)
      })
    }
  }
})
