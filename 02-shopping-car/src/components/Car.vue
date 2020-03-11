<template>
  <div class="car-container">
    <h1>我的购物车</h1>
    <ul>
      <li>
        <b>全部商品2</b>
      </li>
      <li>
        <span>
          <input id="all" type="checkbox" v-model="isAllChecked">
          <label for="all">全选</label>
        </span>
        <span>商品</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>操作</span>
      </li>
      <li class="list" v-for="(item, i) in list" :key="i">
        <span>
          <input type="checkbox" v-model="item.isChecked">
        </span>
        <span>
          <img :src="item.url" style="width: 80px; height: 80px;vertical-align: middle;" alt="">
          <font style="vertical-align: middle;">{{item.name}}</font>
        </span>
        <span>
          {{item.price}}
        </span>
        <span>
          <button type="button" @click="reduce(i)">-</button>
          <input type="text" v-model="item.count">
          <button type="button" @click="plus(i)">+</button>
        </span>
        <span>
          {{item.total}}
        </span>
        <span>
          <button class="delete" type="button" @click="del(i)">删除</button>
        </span>
      </li>
      <li>
        <span>
          <!-- <input type="checkbox" id="all2">
          <label for="all2">全选</label> -->
        </span>
        <span>
          <button type="button" @click="allDelete">全部删除</button>
        </span>
        <span>{{sum}}</span>
        <button type='button' @click="pay">结算</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Car',
  computed: {
    list () {
      return this.$store.state.car
    },
    sum () {
      return this.list.reduce((val, cur) => {
        return Number(val) + Number(cur.total)
      }, 0)
    },
    isAllChecked () {
      if (this.list.length > 0) {
        return this.list.every(item => item.isChecked)
      } else {
        return false
      }
    }
  },
  methods: {
    reduce (i) {
      if (this.list[i].count > 0) {
        this.list[i].count--
        this.list[i].total = this.list[i].count * this.list[i].price
      }
      if (this.list[i].count === 0) {
        this.list[i].isChecked = false
      }
    },
    plus (i) {
      this.list[i].isChecked = true
      this.list[i].count++
      this.list[i].total = this.list[i].count * this.list[i].price
    },
    del (i) {
      this.$store.commit('DELETE_CAR', i)
    },
    allDelete () {
      this.$store.commit('ALL_DELETE_CAR')
    },
    pay () {
      if (Math.random() > 0.5) {
        alert('支付成功')
        this.$store.commit('ALL_DELETE_CAR')
        this.$router.push('/')
      } else {
        alert('么钱还想买电脑？？？')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.car-container {
  h1 {
    text-align: center;
    margin-bottom: 50px
  }
  ul {
    li {
      display: flex;
      &:last-child {
        display: block;
        margin-top: 10px;
        button {
          background: #fff;
          color: #333;
          border: 1px solid #ccc;
          margin: 0 10px;
          padding: 5px 10px;
        }
      }
      &:first-child {
        height: 35px;
        color: #E2231A;
        font-size: 18px;
        b {
          width: 90px;
          border-bottom: 2px solid #E2231A;
        }
      }
      &:nth-of-type(2) {
        font-size: 16px;
        padding: 15px 10px;
        background: #f3f3f3;
      }
      > span {
        flex: 1;
        input[type=text] {
          width: 40px;
          height: 30px;
          text-align: center;
          border: 1px solid #ccc;
        }
        &:nth-of-type(2) {
          flex: 4;
        }
      }
    }
    li.list {
      background: #fff4e8;
      height: 120px;
      padding: 10px;
      margin-bottom: 10px;
      button {
        width: 20px;
        height: 30px;
        background: #fff;
        color: #333;
        border: 1px solid #ccc;
      }
      button.delete {
        width: 60px;
      }
    }
  }
}
</style>
