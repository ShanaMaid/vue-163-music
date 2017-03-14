<template>
    <div>
        <ul>
           <li v-for="val in list">
                <img :src="val.src">
                <span class="name">{{val.name}}</span>
                <span class="count">{{val.count}}首</span>
                <span class="nickname">by&nbsp{{val.nickname}}</span>
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
.nickname,
.count{
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; 
}

.name{
  width: 300px;
}
.nickname{
  width: 200px;
}

.count{
  width: 100px;
}
</style>
