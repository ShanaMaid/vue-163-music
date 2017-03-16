<template>
    <div>
      <h1>我订阅的电台<span class="number">1个电台</span></h1>
      <ul>
         <li>
            <img src="http://p1.music.126.net/RJgUfXOKY452gk_ZhWq8qw==/2912606304290031.jpg?param=200y200">
            <span class="name">【苏荷出品】必属精品</span>
            <span class="nickname">by&nbsp苏州河畔柳絮摆渡一弯明月映相思</span>
            <span class="count">节目 21</span>
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
