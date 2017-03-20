<template>
    <div>
      <template v-if="count > 0">
        <template v-if="station.length > 0">
          <h1 class="title">主播电台</h1>
         <div class="station">
            <div class="item" v-for="val in station">
              <img :src="val.src">
              <p>{{val.name}}</p>
              <p class="station-author">by&nbsp {{val.nickname}}</p>
            </div>
         </div>
        </template>
       <h1 class="title">单期节目</h1>
       <ul>
          <li v-for="val in list" @click="$store.commit('addSong', val)">
            <img :src="val.src">
            <span class="name">「{{val.name}}」</span>
            <span class="author">{{val.brand + '-Vol.' + val.serialNum}}首</span>
            <span class="count">播放：{{val.listenerCount}}</span>
          </li> 
       </ul>
      </template>
      <template v-if='count === 0'>
        <h1 class="fail">很抱歉,未能找到与<span class="searchName">“{{search}}”</span>相关的任何电台或者节目</h1>
      </template>
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
    search: function () {
      return this.$store.state.search.searchName
    },
    list: function () {
      return this.$store.state.search.searchResult.list
    }
  }
}
</script>
<style scoped>
h1.title{
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
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 10px;
  width: 100%;
}

.item{
  width: 140px;
  height: 180px;
  cursor: pointer;
  margin-right: 14px;
  margin-bottom: 40px;
}

.item:nth-child(5n+5){
  margin-right: 0px;
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

.fail{
  line-height: 180px;
  font-size: 14px;
  text-align: center;
  font-weight: normal;
}

.searchName{
  color: rgb(12,115,194);
}
</style>
