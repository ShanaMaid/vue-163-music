<template>
  <div id="mains">
    <div class="navigation">
      <dl>
        <router-link to="/find/recommend"><dd :class="{choosed: topName =='recommend'}">个性推荐</dd></router-link>
        <router-link to="/find/song"><dd :class="{choosed: topName =='song'}">歌单</dd></router-link>
        <router-link to="/find/station"><dd :class="{choosed: topName =='station'}">主播电台</dd></router-link>
        <router-link to="/find/rank"><dd :class="{choosed: topName =='rank'}">排行榜</dd></router-link>
        <router-link to="/find/singer"><dd :class="{choosed: topName =='singer'}">歌手</dd></router-link>
        <router-link to="/find/new"><dd :class="{choosed: topName =='new'}">最新音乐</dd></router-link>
     </dl>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name: 'navigation',
  computed: {
    topName: function () {
      let path = this.$route.path
      path = path.substr(path.lastIndexOf('/') + 1)
      return path
    }
  }
}
</script>
<style scoped>
*{
    box-sizing: border-box;
}

#mains{
  height: 100%;
  padding: 0 20px;
  overflow-y: scroll;
}

.navigation{
  height: 40px;
  border-bottom: 1px solid rgb(225,225,226);
}


.navigation dl{
  width: 60%;
  margin: 0 auto;
  overflow: hidden;
}

.navigation dd{
  height: 40px;
  display: inline-block;
  float: left;
  width: 16.6%;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: black;
}

.navigation dd:hover{
  color: rgb(198,47,47);
  cursor: pointer;
}

dd.choosed{
  border-bottom: 2px solid rgb(198,47,47);
  color: rgb(198,47,47);
}

a{
  text-decoration: none;
  outline: none;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgb(245,245,247);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgb(225,225,226);
  background-color: rgb(225,225,226);
}
</style>
