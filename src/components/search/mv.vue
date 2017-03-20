<template>
    <div>
       <div class="mv">
          <template v-if="count !== 0">
            <div class="item" v-for="val in list">
             <img :src="val.src">
             <p class="name">{{val.name}}</p>
             <p class="author">{{val.nickname}}</p>
             <span class="playcount"><img class="icon" src="../../assets/camera.png">{{val.playCount | playCount}}</span>
             <span class="time">{{val.duration | durationToTime}}</span>
           </div>
          </template>
       </div>
       <template v-if='count === 0'>
          <h1 class="fail">很抱歉,未能找到与<span class="searchName">“{{search}}”</span>相关的任何MV</h1>
        </template>
    </div>
</template>
<script>
export default{
  computed: {
    count: function () {
      return this.$store.state.search.searchResult.count
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
.mv{
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding-left: 30px;
  padding-right: 20px;
  padding-top: 20px;
}

.item{
  width: 160px;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  margin-right: 35px;
}

.item:nth-child(4n+4){
  margin-right: 0px;
}

.item > img{
  width: 100%;
  height: 90px;
  border:1px solid rgb(225,225,226);
}

.name,
.author{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
}

.time{
  position: absolute;
  left: 5px;
  font-size: 11px;
  color: white;
  top: 65px;
}

.playcount{
  display: block;
  width: 100%;
  height: 20px;
  position: absolute;
  right: 1px;
  font-size: 11px;
  top: 0px;
  color: white;
  text-align: right;
  padding-right: 5px;
  background: linear-gradient(to left, rgba(100,100,100,0.4) , rgba(255,255,255,0.1)); /* 标准的语法 */
}

.icon{
  width: 15px;
  height: 14px;
  vertical-align: text-bottom;
  margin-right: 2px;
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
