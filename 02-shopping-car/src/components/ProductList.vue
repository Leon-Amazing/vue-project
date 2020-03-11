<template>
  <div>
    <ul class="list">
      <li
        v-for="(item, i) in dataList"
        :key="i"
        @click="add(item)"
        :class="{active: item.isAdd}"
      >
        <img :src="item.url" alt="">
        <p>￥{{item.price}}</p>
        <p>{{getBrand(item.id)}}&nbsp;&nbsp;{{item.name}}</p>
        <p>{{getType(item.type)}}</p>
      </li>
    </ul>
    <router-link tag="div" to="/car" class="addToCar">
      加入购物车
    </router-link>
  </div>
</template>

<script>
import { getType, getBrand } from '@/utils'
export default {
  name: 'ProductList',
  props: {
    dataList: {
      type: [Object, Array],
      default: () => []
    }
  },
  computed: {

  },
  data () {
    return {
      type: ''
    }
  },
  methods: {
    getType,
    getBrand,
    add (item) {
      item.isAdd = !item.isAdd
      if (item.isAdd) {
        this.$store.commit('ADD_CAR', item)
      } else {
        this.$store.commit('CANCLE_CAR', item)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
  *zoom: 1;
  &:after {
    content: '';
    display: block;
    clear: both;
  }
  li {
    float: left;
    padding: 5px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 5px;
    &:hover {
      border-color: rgb(200, 22, 35);
    }
  }
  li.active {
    border-color: rgb(200, 22, 35);
  }
}
.addToCar {
  font-size: 16px;
  width: 18px;
  position: fixed;
  right: 20px;
  top: 50%;
  margin-top: -50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: rgb(200, 22, 35);
  color: #fff;
  padding: 5px 8px;
  box-sizing: unset;
  cursor: pointer;
}
</style>
