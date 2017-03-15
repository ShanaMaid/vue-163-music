<template>
    <div>
       <h1>主播电台</h1>
       <div class="station">
          <div class="item" v-for="val in station">
            <img :src="val.src">
            <p>{{val.name}}</p>
            <p class="station-author">{{val.nickname}}</p>
          </div>
       </div>
       <h1>单期节目</h1>
       <ul>
          <li v-for="val in list" @dblclick="$store.commit('addSong', val.mp3Url)">
            <img :src="val.src">
            <span class="name">「{{val.name}}」</span>
            <span class="author">{{val.brand + '-Vol.' + val.serialNum}}首</span>
            <span class="count">播放：{{val.listenerCount}}</span>
          </li> 
       </ul>
    </div>
</template>
<script>
export default{
  computed: {
    count: function () {
      return this.$store.state.search.searchResult.count
    },
    station: function () {
      return this.$store.state.search.searchResult.station
    },
    list: function () {
      return this.$store.state.search.searchResult.list
    }
  }
}
</script>
<style scoped>
h1{
  color: rgb(102,102,102);
  font-size: 12px;
  font-weight: normal;
  line-height: 30px;
  border-top: 1px solid rgb(225,225,226);
  border-bottom: 2px solid rgb(225,225,226);
  text-indent: 35px;
}

.station{
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 460px;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 10px;
  width: 100%;
}

.item{
  width: 140px;
  height: 180px;
  cursor: pointer;
}

.item img{
  width: 100%;
  height: 140px;
}

.item p{
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}

p.station-author{
  color: rgb(225,225,226);
  font-size: 13px;
}

ul li{
  height: 60px;
  padding: 10px 30px;
  line-height: 40px;
  font-size: 12px;
  cursor: pointer;
}

li img{
  height: 40px;
  width: 40px;
  border: 1px solid rgb(225,225,226);
  vertical-align: top;
  margin-right: 20px;
}

ul li:nth-child(even){
  background-color: rgb(245,245,247);
}

ul li:hover{
  background-color: rgb(235,236,237);
}

.name,
.author,
.count{
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.name{
  width: 250px;
}
.author{
  width: 220px;
}

.count{
  width: 100px;
}
</style>
