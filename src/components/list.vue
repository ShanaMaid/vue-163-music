<template>
	<div id="list" name="list">
		<dl>
      <dt><span>推荐</span></dt>
      <router-link to="/find/recommend"><dd :class="{choosed: choosed == 'find'}"><span><img class="icon" src="../assets/music.png"> 发现音乐</span></dd></router-link>  
      <router-link to="/personal/"><dd to-link :class="{choosed: choosed == 'personal'}"><span><img class="icon" src="../assets/fm.png">私人FM</span></dd></router-link>  
      <router-link to="/mv/"><dd :class="{choosed: choosed == 'mv'}"><span><img class="icon" src="../assets/mv.png">MV</span></dd></router-link>  
      <router-link to="/friend/"><dd :class="{choosed: choosed == 'friend'}"><span><img class="icon" src="../assets/friend.png">朋友</span></dd></router-link>  
      <dt><span>我的音乐</span></dt>
      <router-link to="/local/"><dd :class="{choosed: choosed == 'local'}"><span><img class="icon" src="../assets/local_music.png">本地音乐</span></dd></router-link>  
      <router-link to="/download/"><dd :class="{choosed: choosed == 'download'}"><span><img class="icon" src="../assets/download.png">下载管理</span></dd></router-link>  
      <router-link to="/cloud/"><dd :class="{choosed: choosed == 'cloud'}"><span><img class="icon" src="../assets/cloud.png">我的音乐云盘</span></dd></router-link>  
      <router-link to="/singer/"><dd :class="{choosed: choosed == 'singer'}"><span><img class="icon" src="../assets/singer.png">我的歌手</span></dd></router-link>  
      <router-link to="/station/"><dd :class="{choosed: choosed == 'station'}"><span><img class="icon" src="../assets/station.png">我的电台</span></dd></router-link>
      <dt><span>创建的歌单</span></dt>
      <router-link to="/playlist/146135103"><dd :class="{choosed: choosed == '146135103'}"><span><img class="icon" src="../assets/heart.png">我喜欢的音乐</span></dd></router-link>
      <router-link to="/playlist/502018684"><dd :class="{choosed: choosed == '502018684'}"><span><img class="icon" src="../assets/list.png">light</span></dd></router-link>  
      <router-link to="/playlist/501130469"><dd :class="{choosed: choosed == '501130469'}"><span><img class="icon" src="../assets/list.png">每日歌曲推荐(2016.11.03)</span></dd></router-link>  
      <router-link to="/playlist/418621233"><dd :class="{choosed: choosed == '418621233'}"><span><img class="icon" src="../assets/list.png">少校</span></dd></router-link>  
      <dt><span>收藏的歌单</span></dt>
      <router-link to="/playlist/2511154"><dd :class="{choosed: choosed == '2511154'}"><span><img class="icon" src="../assets/list.png">B站收藏动漫曲年度排行榜1-50（经典 童年）</span></dd></router-link> 
      <router-link to="/playlist/144277359"><dd :class="{choosed: choosed == '144277359'}"><span><img class="icon" src="../assets/list.png">孤独、忧怨、哀伤、迷幻、飘渺、激昂、平静</span></dd></router-link> 
      <router-link to="/playlist/47897219"><dd :class="{choosed: choosed == '47897219'}"><span><img class="icon" src="../assets/list.png">【节奏纯音】那些打在心跳上的旋律</span></dd></router-link> 
      <router-link to="/playlist/49389984"><dd :class="{choosed: choosed == '49389984'}"><span><img class="icon" src="../assets/list.png">在那一瞬间，我仿佛听见了全世界崩溃的声音</span></dd></router-link> 
      <router-link to="/playlist/117581880"><dd :class="{choosed: choosed == '117581880'}"><span><img class="icon" src="../assets/list.png">【酷到没朋友】BGM燃点爆炸（持更）</span></dd></router-link> 
      <router-link to="/playlist/487403213"><dd :class="{choosed: choosed == '487403213'}"><span><img class="icon" src="../assets/list.png">ACG中的震撼，源于对心灵最纯粹的触动！</span></dd></router-link>   
      <router-link to="/playlist/132467422"><dd :class="{choosed: choosed == '132467422'}"><span><img class="icon" src="../assets/list.png">喜欢纯音乐?一单就够了!</span></dd></router-link> 
      <router-link to="/playlist/409558070"><dd :class="{choosed: choosed == '409558070'}"><span><img class="icon" src="../assets/list.png">直击你心灵最深处的感动</span></dd></router-link> 
    </dl>
	</div>
</template>
<script >
export default {
  name: 'list',
  props: ['choosed'],
  data () {
    return {
      app: '网易云音乐'
    }
  }
}
</script>
<style scoped>
#list{
	height: 100%;
  background-color: rgb(245,245,247);
  overflow-y: scroll;
  border-right: 1px solid rgb(225,225,226)
}

dt,dd{
  height: 30px;
  line-height: 30px;
  font-family: microsoft yahei;
  position: relative;
  font-size: 14px;
}

dd{
  text-indent: 20px;
  font-size: 13px;
  opacity: 0.8;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

dd:hover{
  opacity: 1.0;
  cursor: pointer;
}

dt{
  text-indent: 10px;
  color: rgb(125,125,125);
}

.icon{
  width: 20px;
  height: 20px;
  vertical-align: top;
  margin-right: 10px;
  margin-top: 5px;
}

.choosed{
  background-color: rgb(230,231,234);
  opacity: 1.0;
  color: black;
}

.choosed:before{
  position: absolute;
  left: 0px;
  top: 0px;
  display: inline-block;
  content: ' ';
  width:5px;
  height: 30px;
  background-color: rgb(198,47,47);
}


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 7px;
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
