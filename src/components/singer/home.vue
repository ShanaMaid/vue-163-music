<template>
    <div>
      <h1>我的歌手<span class="number">1位歌手</span></h1>
      <ul>
         <li>
            <img src="http://p4.music.126.net/9HzTwlpXML7NdnnJhWoYdg==/229797930226364.jpg?param=200y200">
            <span class="name">崔子格</span>
            <span class="nickname">专辑：36</span>
            <span class="count">MV：7</span>
          </li>
       </ul>
    </div>
</template> 
<script>
export default{
}
</script>
<style scoped>
h1{
  font-size: 20px;
  font-weight: normal;
  padding: 10px 30px;
  margin-top: 20px;
  border-bottom: 1px solid rgb(225,225,226)
}

.number{
  font-size: 13px;
  margin-left: 10px;
}

ul li{
  height: 60px;
  padding: 10px 30px;
  line-height: 40px;
  font-size: 13px;
  cursor: pointer;
  color: rgb(136,136,136);
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
  width: 430px;
}
.nickname{
  width: 170px;
}

.count{
  width: 50px;
  margin-left: 15px;
}
</style>
