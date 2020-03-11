<template>
  <div class="collect-container">
    <header>{{title}}</header>
    <ul>
      <li v-for="item in details" :key="item.id" class="clearfix">
        <div class="fl">
          <img :src="item.images.small" alt="">
        </div>
        <div class="fr">
          <h3>{{item.title}}</h3>
          <p style="margin-top: 10px;">{{item.year}}</p>
          <p>
            <span v-for="child in item.geners" :key="child">{{child}}</span>
          </p>
          <p>{{item.summary}}</p>
          <my-star :score="item.rating.average"></my-star>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import MyStar from '@/components/MyStar'
export default {
  name: 'Collect',
  components: {
    MyStar
  },
  computed: {
    title () {
      if (this.$route.params.collect === 'want') {
        return '想看'
      } else {
        return '看过'
      }
    }
  },
  data () {
    return {
      details: null
    }
  },
  created () {
    const pathName = this.$route.params.collect
    if (pathName === 'want') {
      this.$set(this, 'details', Object.values(this.$store.state.wantList))
    } else if (pathName === 'watched') {
      this.$set(this, 'details', Object.values(this.$store.state.watchedList))
    }
  }
}
</script>

<style scoped lang="less">
.collect-container {
  header {
    line-height: 50px;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 20px;
    padding-left: 20px;
    text-align: center;
    color: #fff;
    background: rgb(65, 172, 82);
  }
  ul {
    padding: 10px;
    li {
      padding: 5px;
      box-shadow: 0 0 5px 5px #dbdbdb;
      div:first-child {
        width: 32%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:last-child.fr {
        width: 65%;
        p:nth-of-type(3) {
          font-size: 14px;
          margin-top: 10px;
          text-indent: 2em;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
