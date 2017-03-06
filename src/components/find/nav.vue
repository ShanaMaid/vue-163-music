<template>
  <div id="mains">
    <div class="navigation">
      <dl>
        <router-link to="/home/recommend"><dd :class="{choosed:$route.name=='recommend'}">个性推荐</dd></router-link>
        <router-link to="/home/song"><dd :class="{choosed:$route.name=='song'}">歌单</dd></router-link>
        <router-link to="/home/station"><dd :class="{choosed:$route.name=='station'}">主播电台</dd></router-link>
        <router-link to="/home/rank"><dd :class="{choosed:$route.name=='rank'}">排行榜</dd></router-link>
        <router-link to="/home/singer"><dd :class="{choosed:$route.name=='singer'}">歌手</dd></router-link>
        <router-link to="/home/new"><dd :class="{choosed:$route.name=='new'}">最新音乐</dd></router-link>
     </dl>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default{
  name: 'navigation'
}
</script>
<style scoped>
*{
    box-sizing: border-box;
}

#mains{
  height: 100%;
  width: 80%;
  float: right;
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
  color: 
}
</style>
