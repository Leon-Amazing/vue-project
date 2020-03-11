<template>
  <div class="hot-container">
    <ul class="cities">
      <li
        :class="i === index ? 'active' : ''"
        v-for="(item, i) in cities"
        :key="i"
        @click="switchActive(item, i)"
      >{{item}}</li>
    </ul>
    <ul class="movies">
      <li v-for="(item) in moviesList" :key="item.id" @click="toDetails(item.id)">
        <img :src="item.images.small" alt="">
        <my-star :score="item.rating.average"></my-star>
        <b>{{item.title}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { getHotMoviesList } from '@/api/movie'
import { setCookie } from '@/utils/cookie'
import MyStar from '@/components/MyStar'
export default {
  name: 'Hot',
  components: {MyStar},
  data () {
    return {
      moviesList: [],
      index: 0
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    }
  },
  created () {
    this.getMovies('北京', 1)
  },
  methods: {
    switchActive (city, i) {
      this.index = i
      this.getMovies(city, 1)
    },
    getMovies (city, start) {
      getHotMoviesList(city, start).then(res => {
        console.log(res)
        this.moviesList = res.data.subjects
      })
    },
    toDetails (id) {
      setCookie('id', id)
      this.$router.push('/details')
    }
  }
}
</script>

<style scoped lang='less'>
.hot-container {
  .cities {
    display: flex;
    li {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 10px 5px;
      font-size: 12px;
      padding: 5px 3px;
      text-align: center;
    }
    li.active {
      background: rgb(160, 222, 170);
      color: #fff;
    }
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1;
      margin: 0 4px 10px 4px;
      img {
        width: 175px;
        height: 245px;
      }
      b {
        font-size: 14px;
        margin: 5px 0;
      }
    }
  }
}
</style>
