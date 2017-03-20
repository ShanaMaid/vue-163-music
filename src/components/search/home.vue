<template>
    <div class="search">
      <h1>搜索<span class="searchname">"{{searchName}}"</span><span v-if="count > 0">，找到{{this.$store.state.search.searchResult.count}}{{tail[topName]}}</span></h1>
      <dl>
        <router-link to="/search/single"><dd :class="{choosed: topName =='single'}">单曲</dd></router-link>
        <router-link to="/search/singer"><dd :class="{choosed: topName =='singer'}">歌手</dd></router-link>
        <router-link to="/search/ablum"><dd :class="{choosed: topName =='ablum'}">专辑</dd></router-link>
        <router-link to="/search/mv"><dd :class="{choosed: topName =='mv'}">MV</dd></router-link>
        <router-link to="/search/songlist"><dd :class="{choosed: topName =='songlist'}">歌单</dd></router-link>
        <!-- <router-link to="/search/word"><dd :class="{choosed: topName =='word'}">歌词</dd></router-link> -->
        <router-link to="/search/station"><dd :class="{choosed: topName =='station'}">主播电台</dd></router-link>
        <router-link to="/search/user"><dd :class="{choosed: topName =='user'}">用户</dd></router-link>
      </dl>
      <router-view />
    </div>
</template> 
<script>
export default{
  data () {
    return {
      names: '1',
      tail: {
        'single': '首单曲',
        'station': '个节目',
        'singer': '位歌手',
        'ablum': '张专辑',
        'mv': '首mv',
        'songlist': '个歌单',
        'word': '首单曲',
        'user': '位用户'
      }
    }
  },
  computed: {
    topName: function () {
      let path = this.$route.path
      path = path.substr(path.lastIndexOf('/') + 1)
      return path
    },
    count: function () {
      return this.$store.state.search.searchResult.count
    },
    searchName: function () {
      return this.$store.state.search.searchName
    }
  }
}
</script>
<style scoped>
.search{
  overflow-y: scroll;
  height: 100%;
}
h1{
  font-size: 14px;
  font-weight: normal;
  padding: 30px;
}

dl{
  overflow: hidden;
  padding: 0px 30px;
  border-bottom: 1px rgb(198,47,47) solid;
}

dl dd{
  float: left;
  width: 80px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  border: 1px rgb(225,225,226) solid;
  border-bottom: none;
  margin-right: 5px;
  font-size: 13px;
  cursor: pointer;
  color: black;
}

dd.choosed{
  color: white !important;
  background-color: rgb(198,47,47) !important;
  border: none !important;
  border-bottom: 1px rgb(198,47,47) solid !important;
}

dd:hover{
  background-color: rgb(242,242,242);
}

.searchname{
  color: rgb(12,115,194)
}
</style>
