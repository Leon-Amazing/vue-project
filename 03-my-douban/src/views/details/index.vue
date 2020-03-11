<template>
  <div class="details-container">
    <div class="header-container">
      <header>{{title}}</header>
      <div class="breadcrumbs">
        <span><router-link tag="b" to="/" >首页</router-link><span class="bread"> / {{title}}</span></span>
      </div>
    </div>
    <div class="movie-info">
      <div class="info clearfix">
        <div class="left fl">
          <img :src="details.images.small" alt="">
        </div>
        <div class="right fl">
          <h3 style="margin-bottom: 10px;">{{details.title}}</h3>
          <p>({{details.year}})</p>
          <p style="margin: 10px 0;">
            <span>{{details.countries[0]}}</span> /
            <span v-for="item in details.genres" :key="item">{{item}}&nbsp;</span> /
            上映时间:
          </p>
          <p><span>{{details.pubdate ? details.pubdate : details.pubdates[0].slice(0, 10)}}</span> / 片长: <span>{{details.durations[0]}}</span></p>
          <button type="button" class="want" @click="addWant(details)">想看</button>
          <button type="button" class="watched" @click="addWatched(details)">看过</button>
        </div>
      </div>
      <div class="tags">
        <p style="white-space: nowrap;">
          <b>所属频道</b>
          <span v-if="details.tags.length">
            <span v-for="(tag, i) in details.tags" :key="i">{{tag}}</span>
          </span>
          <span v-else>
            <span v-for="(tag, i) in tags" :key="i">{{tag}}</span>
          </span>
        </p>
      </div>
    </div>
    <div class="brief">
      <h2>简介</h2>
      <p>{{details.summary}}</p>
    </div>
    <div class="actor">
      <h3>演员表</h3>
      <ul>
        <li v-for="item in details.casts" :key="item.id">
          <img :src="item.avatars ? item.avatars.small : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3516809727,1679689754&fm=26&gp=0.jpg'" alt="">
          <b>{{item.name}}</b>
          <p>{{item.name_en}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getMovieDetails } from '@/api/movie'
import { getCookie } from '@/utils/cookie'

export default {
  name: 'Details',
  data () {
    return {
      title: '详情',
      details: null,
      tags: ['爱情', '动作', '喜剧']
    }
  },
  beforeRouteEnter (to, from, next) {
    getMovieDetails(getCookie('id')).then(res => {
      to.meta.details = res.data
      next()
    })
  },
  created () {
    this.$set(this, 'details', this.$route.meta.details)
  },
  methods: {
    addWant (info) {
      this.$store.commit('ADD_WANT_LIST', info)
    },
    addWatched (info) {
      this.$store.commit('ADD_WATCHED_LIST', info)
    }
  }
}
</script>

<style scoped lang="less">
  .details-container {
    .header-container {
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
      .breadcrumbs {
        line-height: 40px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        text-indent: 20px;
        .bread {
          font-size: 14px;
          color: #ccc;
        }
      }
    }
    .movie-info {
      .info {
        padding: 10px;
        .left {
          width: 33%;
          margin-right: 10px;
          img {
            width: 100%;
          }
        }
        .right {
          font-size: 12px;
          span {
            font-size: 12px;
          }
          button {
            margin-top: 10px;
            margin-right: 20px;
            background: rgb(234, 244, 218);
            width: 60px;
            height: 30px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
        }
      }
    }
    .tags {
      padding: 10px;
      b {
        font-size: 14px;
      }
      p {
        > span {
          display: inline-block;
          width: calc(100% - 70px);
          overflow-x: scroll;
          vertical-align: middle;
          span {
            font-size: 14px;
            display: inline-block;
            padding: 8px 10px;
            background: #333333;
            color: #fff;
            border-radius: 20px;
            margin-right: 5px;
          }
        }
      }

    }
    .brief {
      padding: 10px;
      p {
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
    .actor {
      li {
        float: left;
        width: calc((100% - 10px) / 2);
        img {
          width: 100%;
          height: 250px;
        }
        &:nth-of-type(odd) {
          margin-right: 10px;
        }
      }
    }
  }
</style>
