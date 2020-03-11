<template>
  <div>
    <product-filter :list="filterList" @change="checkedList"></product-filter>
    <product-list :dataList="productList"></product-list>
  </div>
</template>

<script>
import ProductList from './ProductList'
import ProductFilter from './ProductFilter'
export default {
  name: 'Home',
  components: {
    ProductList,
    ProductFilter
  },
  data () {
    return {
      pp: ['huawei', 'lianxiang', 'xiaomi', 'Mac', 'huashuo', 'daier', 'hongji', 'huipu', 'shenzhou'],
      type: ['game', 'qb', '1-1', 'cg', 'jg'],
      checkedData: {}
    }
  },
  computed: {
    filterList () {
      const list = this.$store.state.filterList
      list.forEach((item, j) => {
        switch (j) {
          case 0:
            item.list = item.list.map((child, i) => {
              return {
                name: child,
                id: this.pp[i],
                isChecked: false
              }
            })
            break
          case 1:
            item.list = item.list.map((child, i) => {
              return {
                name: child,
                price: child,
                isChecked: false
              }
            })
            break
          case 2:
            item.list = item.list.map((child, i) => {
              return {
                name: child,
                type: this.type[i],
                isChecked: false
              }
            })
            break
          case 3:
            item.list = item.list.map((child, i) => {
              return {
                name: child,
                size: child,
                isChecked: false
              }
            })
            break
          default:
            item.list = item.list.map((child, i) => {
              return {
                name: child,
                CPU: child,
                isChecked: false
              }
            })
        }
      })
      return list
    },
    productList () {
      if (Object.keys(this.checkedData).length === 0) {
        return this.$store.state.productList
      } else {
        return this.$store.state.filterListBrand
      }
    }
  },
  methods: {
    checkedList (value) {
      this.checkedData = value
    }
  },
  created () {
    this.$store.dispatch('addFilterList').then(res => {
      console.log(res)
    })
    this.$store.dispatch('addProductList')
  }
}
</script>

<style lang="less" scoped>

</style>
