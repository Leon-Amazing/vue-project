<template>
  <div class="top-container">
    <ul class="movies">
      <li v-for="(item) in moviesList" :key="item.id" @click="toDetails(item.id)">
        <img :src="item.images.small" alt="">
        <p>
          <span v-for="child in item.genres" :key="child">{{child}}</span>
        </p>
        <b>{{item.title}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFutureMoviesList } from '@/api/movie'
import { setCookie } from '@/utils/cookie'

export default {
  name: 'Top',
  data () {
    return {
      moviesList: []
    }
  },
  computed: {
    cities () {
      return this.$store.state.cities
    }
  },
  created () {
    this.getMovies()
  },
  methods: {
    getMovies (start) {
      getFutureMoviesList(start).then(res => {
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
  .top-container {
    .movies {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 1;
        margin: 0 4px 10px 4px;
        span {
          font-size: 14px;
          margin-right: 8px;
        }
        img {
          width: 175px;
          height: 245px;
        }
        b {
          font-size: 16px;
          margin: 5px 0;
        }
      }
    }
  }
</style>
