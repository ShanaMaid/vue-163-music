<template>
  <div>
    <template v-if="count">
      <div class="single">
          <ul class="songlist">
            <li class="head">
                <div style="width:6.25%"></div>
                <div style="width:6.25%">操作</div>
                <div style="width:27.5%">音乐标题</div>
                <div style="width:15%">歌手</div>
                <div style="width:20%">专辑</div>
                <div style="width:8.75%">时长</div>
                <div style="width:16.25%">热度</div>
            </li>
            <template v-for="(value, key) in list">
              <li class="item" @click="$store.commit('addSong', value)">
                  <div style="width:6.25%">{{key + 1}}</div>
                  <div style="width:6.25%">&nbsp</div>
                  <div style="width:27.5%">{{value.name}}</div>
                  <div style="width:15%">{{value.singer}}</div>
                  <div style="width:20%">{{value.albumName}}</div>
                  <div style="width:8.75%">{{value.duration | durationToTime}}</div>
                  <div style="width:16.25%"></div>
              </li>
            </template>
        </ul>
      </div>
    </template>
    <template v-if='count === 0'>
      <h1 class="fail">很抱歉,未能找到与<span class="searchName">“{{search}}”</span>相关的任何单曲</h1>
    </template>
  </div>
</template>
<script>
export default{
  method: {
  },
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
*{
  box-sizing: border-box;
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
