<template>
  <div>
    <template v-if="songCount">
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
            <template v-for="(value, key) in this.$store.state.searchResult.list">
              <li class="item" @dblclick="$store.commit('addSong', value.mp3Url)">
                  <div style="width:6.25%">{{key + 1}}</div>
                  <div style="width:6.25%">&nbsp</div>
                  <div style="width:27.5%">{{value.name}}</div>
                  <div style="width:15%">{{value.singer}}</div>
                  <div style="width:20%">{{value.albumName}}</div>
                  <div style="width:8.75%">{{value.duration | toTime}}</div>
                  <div style="width:16.25%"></div>
              </li>
            </template>
        </ul>
      </div>
    </template>
  </div>
</template>
<script>
export default{
  method: {
  },
  filters: {
    toTime: function (value) {
      let min = Number.parseInt(value / (60 * 1000), 10) + ''
      let seconds = Number.parseInt((value / 1000) % 60, 10) + ''
      min = min.length === 1 ? ('0' + min) : min
      seconds = seconds.length === 1 ? ('0' + seconds) : seconds
      return min + ':' + seconds
    }
  },
  computed: {
    songCount: function () {
      return this.$store.state.searchResult.songCount
    }
  }
}
</script>
<style>
*{
  box-sizing: border-box;
}

ul{
  margin-top: 50px;
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
