<template>
  <div class="filter-container">
    <p class="checked-list">
      <span v-for="(value, key) in checkedList" :key="key" @click="deleteFilter(key)">{{value.name}}</span>
    </p>
    <ul class="list">
      <li v-for="(item, i) in list" :key="item.title">
        <b>{{item.title}}</b>
        <span
          v-for="child in item.list"
          :key="child.name"
          :class="{active: child.isChecked}"
          @click="changeFilter(child, i)"
        >{{child.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductFilter',
  props: {
    list: {
      type: [Object, Array],
      default: () => []
    }
  },
  data () {
    return {
      checkedList: {}
    }
  },
  methods: {
    changeFilter (child, i) {
      this.list[i].list.forEach(item => {
        item.isChecked = false
      })
      child.isChecked = true
      this.$set(this.checkedList, i, child)
      this.$emit('change', this.checkedList)
      this.$store.commit('FILTER_LIST_BRAND', Object.values(this.checkedList))
    },
    deleteFilter (key) {
      this.list[key].list.forEach(item => {
        item.isChecked = false
      })
      this.$delete(this.checkedList, key)
      this.$store.commit('FILTER_LIST_BRAND', Object.values(this.checkedList))
    }
  }
}
</script>

<style lang="less" scoped>
.filter-container {
  padding-top: 40px;
  .checked-list {
    height: 32px;
    span {
      display: inline-block;
      font-size: 16px;
      padding: 7px 30px 7px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      position: relative;
      margin-right: 30px;
      &:after {
        content: 'x';
        position: absolute;
        right: 10px;
        font-size: 20px;
        top: 2px;
        cursor: pointer;
      }
    }
  }
  .list {
    padding: 10px;
    li {
      padding: 8px 5px;
      b {
        font-size: 16px;
      }
      span {
        display: inline-block;
        padding: 8px 25px;
        font-size: 14px;
        color: #8d2e2e;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
      .active {
        color: blue;
      }
    }
  }
}

</style>
