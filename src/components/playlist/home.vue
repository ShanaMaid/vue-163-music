<template>
    <div class="box">
      <div class="head">
        <img :src="list.coverImgUrl" class="cover-image">
        <div class="head-right">
          <div class="title">
            <span class="tag">歌单</span>
            <span class="name">{{list.name}}</span>
            <span class="play-count">{{list.playCount | playCount}}</span>
            <span class="track-count">{{list.trackCount}}</span>
          </div>
          <div class="author">
            <img :src="list.avatarUrl">
            <span class="nickname">{{list.nickname}}</span>
            <span class="create-time">{{list.createTime | unix2Time}}创建</span>
          </div>
          <div class="control">
            <div class="play-all">
              <div>播放全部</div>
              <div class="add">＋</div>
            </div>
            <div class="saved">收藏({{list.subscribedCount}})</div>
            <div class="share-count">分享({{list.shareCount}})</div>
            <div class="download-all">下载全部</div>
          </div>
          <div class="tags">
            标签：<span>{{ list.tags | splitTags }}</span>
          </div>
          <div class="description">
            <p>简介：{{ list.description }}</p>
            <div class="drop-down">∨</div>
          </div>
        </div>
      </div>
      <div class="content">
        <dl>
          <dd class="choosed">歌曲列表</dd>
          <dd>评论({{list.commentCount}})</dd>
          <dd>收藏者</dd>
          <dd class="search"><input type="text" name="" placeholder="搜索歌单音乐"></dd>
        </dl>
      </div>
      <ul class="songlist">
            <li class="head">
                <div style="width:7%"></div>
                <div style="width:8%">操作</div>
                <div style="width:30%">音乐标题</div>
                <div style="width:20%">歌手</div>
                <div style="width:20%">专辑</div>
                <div style="width:15%">时长</div>
            </li>
            <template v-for="(value, key) in list.list">
              <li class="item" @dblclick="$store.commit('addSong', value)">
                  <div style="width:7%">{{key + 1}}</div>
                  <div style="width:8%">&nbsp</div>
                  <div style="width:30%">{{value.name}}</div>
                  <div style="width:20%">{{value.singer}}</div>
                  <div style="width:20%">{{value.albumName}}</div>
                  <div style="width:15%">{{value.duration | durationToTime}}</div>
              </li>
            </template>
        </ul>
    </div>
</template> 
<script>
import playlist from '../../deal/playlist.js'
export default{
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList: function () {
      this.$http.post('/api/playlist/detail', {id: this.id}).then(response => {
        const result = playlist.getList(response.body)
        if (!result) {
          this.$router.push({path: '/'})
        }
        this.list = result
      })
    }
  },
  computed: {
    id: function () {
      return this.$route.params.id
    }
  },
  watch: {
    id: function () {
      this.getList()
    }
  },
  beforeMount: function () {
    this.getList()
  }
}
</script>
<style scoped>
.box{
  overflow-y: scroll;
  height: inherit;
}
div.head{
  padding:20px 20px 60px 30px;
  width: 100%;
  height: 280px;
}

.cover-image{
  width: 200px;
  height: 200px;
  vertical-align: top;
}

.head-right{
  display: inline-block;
  width: calc(100% - 220px);
  padding-left: 30px;
}

.title{
  height: auto;
  overflow: hidden;
}

.title span{
  display: inline-block;
  float: left;
}

.tag{
  font-size: 14px;
  background-color: rgb(198, 47, 47);
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: normal;
}

.name{
  font-size: 20px;
  line-height: 1.0;
  margin-left: 10px;
  font-weight: bold;
  width: 330px;
}

span.play-count,
span.track-count{
  float: right;
  font-size: 13px;
  font-weight: normal;
  height: 20px;
  line-height: 20px;
  width: 35px;
  text-align: right; 
  margin-left: 20px;
  position: relative;
}

span.play-count::before,
span.track-count::before{
  position: absolute;
  width: 15px;
  height: 15px;
  content: " ";
  top: 2px;
  left: -10px;
  background-size: 15px 15px;
  background-repeat: no-repeat;
}

span.play-count::before{
  background-image: url('../../assets/playcount.png');
}

span.track-count::before{
  background-image: url('../../assets/trackcount.png');
}

.author{
  margin:10px 0px;
  height: 30px;
  line-height: 30px;
}

.author img{
  width: 30px;
  height: 30px;
  border-radius: 30px;
  vertical-align: top;
}

.nickname{
  margin-left: 10px;
  color: rgb(102, 102, 102);
}

.create-time{
  color: rgb(136, 136, 136);
  font-size: 11px;
  margin-left: 20px;
}

.control{
  overflow: hidden;
}

.control  > div{
  float: left;
  border: 1px solid rgb(225,225,226);
  margin-right: 10px;
  padding: 2px 10px;
  padding-left: 25px;
  font-size: 14px;
}

.play-all div {
  float: left;
}

.tags{
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.tags span{
  color: rgb(12, 115, 194);
}

.description p{
  overflow : hidden;
  width: 340px;
  font-size: 13px;
  text-overflow: ellipsis;
  line-height: 20px;
  height: 40px;
}

.drop-down{
  float: right;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.content dl{
  overflow: hidden;
  padding:0px 30px;
  border-bottom: 1px solid rgb(198, 47, 47);
}

dd:not(.search){
  float: left;
  padding: 0px 15px;
  border: 1px solid rgb(225,225,226);
  border-bottom: none;
  margin-right: 10px;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.choosed{
  background-color: rgb(198, 47, 47); 
  color: white;
}

.search{
  float: right;
}

.search input,
.search input:focus{
  border: 1px solid rgb(225,225,226);
  border-radius: 20px;
  outline-style: none;
  text-indent: 10px;
}

li{
  list-style: none;
}

li.head div{
  box-sizing: border-box;
  float: left;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 13px;
  color: rgb(102,102,102);
  text-indent: 10px;
  border: 1px rgb(225,225,226) solid;
}

li.item,
li.head{
  overflow: hidden;
}

li.item div{
  box-sizing: border-box;
  float: left;
  display: inline-block;
  line-height: 30px;
  height: 30px;
  text-align: left;
  font-size: 13px;
  color: rgb(102,102,102);
  text-indent: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

li.item:nth-child(odd){
  background-color: rgb(245,245,247);
}

li.item:hover{
  background-color: rgb(236,237,238);
}
</style>
