<template>
    <div>
      <ul>
         <li v-for="val in list">
              <img :src="val.src">
              <span class="name">{{val.name}}</span>
              <span class="singer">{{val.singer}}</span>
          </li>
      </ul>
      <template v-if='count === 0'>
        <h1 class="fail">很抱歉,未能找到与<span class="searchName">“{{search}}”</span>相关的任何专辑</h1>
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
ul li{
  height: 60px;
  padding: 10px 30px;
  line-height: 40px;
  font-size: 12px;
  cursor: pointer;
}

img{
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
.singer{
  width: 320px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
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
