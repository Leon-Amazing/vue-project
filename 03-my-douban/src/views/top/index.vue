<template>
  <div class="top-container" @scroll="scrollAbc">
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
import { getTopMoviesList } from '@/api/movie'
import { setCookie } from '@/utils/cookie'
import MyStar from '@/components/MyStar'
export default {
  name: 'Top',
  components: {MyStar},
  data () {
    return {
      moviesList: []
    }
  },
  created () {
    this.getMovies()
  },
  methods: {
    getMovies (start) {
      getTopMoviesList(start).then(res => {
        console.log(res)
        this.moviesList = res.data.subjects
      })
    },
    toDetails (id) {
      setCookie('id', id)
      this.$router.push('/details')
    },
    scrollAbc () {
      console.log(1111)
    }
  }
}
</script>

<style scoped lang='less'>
  .top-container {
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
