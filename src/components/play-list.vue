<template>
  <div>
    <div class="playlist">
      <div class="head">
        <div class="choose">
          <div class="choosed">播放列表</div>
          <div>历史记录</div>
        </div>
        <div class="close" @click="setShow">×</div>
      </div>
      <div class="title">
        <span class="sum">总{{list.length}}首</span>
        <span class="clear" @click="$store.commit('removeSong', 'all')">清空</span>
        <span class="collect">收藏全部</span>
      </div>
      <ul class="song-list">
        <li v-for="(val, index) in list" @click="$store.commit('changeSong',index)"  :class="{playing:current == index}" >
          <span style="width:62.5%">{{val.name}}</span>
          <span style="width:25%" class="singer">{{val.singer}}</span>
          <span style="">{{val.duration | durationToTime}}</span>
          <span class="delete" @click.stop="$store.commit('removeSong', index)">×</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    return {
    }
  },
  methods: {
    setShow: function () {
      this.$emit('set-show', false)
    }
  },
  props: ['list', 'current']
}
</script>
<style scoped>
.playlist{
  width: inherit;
  height: inherit;
  box-shadow: -2px -2px 5px 2px rgb(194,194,195);
  border: 1px solid rgb(225,225,226);
  background-color: white;
}

.head{
  height: 40px;
  background-color: rgb(244,244,246);
  border-bottom: 1px solid rgb(225,225,226);
  text-align: center;
  padding: 5px 10px;
}

.head div{
  display: inline-block;
}

.choose{
  width: 220px;
  height: 25px;
  border: 1px solid rgb(225,225,226);
  text-align: center;
  line-height: 25px;
  border-radius: 20px;
  overflow: hidden;
}

.choose  div{
  width: 50%;
  float: left;
  background-color: white;
}

.close{
  float: right;
  cursor: pointer;
  font-size: 20px;
}

div.choosed{
  background-color: rgb(124,125,133);
  color: white;
}

.title{
  height: 30px;
  width: 100%;
  line-height: 30px;
  text-align: left;
  padding: 0 30px;
  border-bottom: 1px solid rgb(225,225,226);
}

.song-list{
  height: calc(100% - 70px);
  overflow-y: scroll;
  text-align: left;
}

li{
  height: 25px;
  line-height: 25px;
  padding: 0px 30px;
  position: relative;
}


li:nth-child(even){
  background-color: rgb(245,245,247);
}

li:hover{
  background-color: rgb(236,237,238);
}

li:hover span{
  color: black;
}

li:hover .delete{
  display: inline-block;
}

li span{
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.singer{
  color: rgb(136,136,136);
}

.clear,
.collect{
  float: right;
  display: inline-block;
  box-sizing: content-box;
  padding: 0px 10px;
  cursor: pointer;
}

.playing::before{
  content: " ";
  position: absolute;
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
  border-left:7px solid rgb(198,47,47);
  top: 7px;
  left: 10px;
}

.delete{
  float: right;
  padding: 0px 5px;
  cursor: pointer;
  display: none;
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
