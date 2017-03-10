<template>
    <div>
        <ul>
          <li class="head">
              <div style="width:6.25%"></div>
              <div style="width:6.25%">操作</div>
              <div style="width:27.5%">音乐标题</div>
              <div style="width:15%">歌手</div>
              <div style="width:20%">专辑</div>
              <div style="width:8.75%">时长</div>
              <div style="width:16.25%">热度</div>
          </li>
      </ul>
      <template>
          <li class="item">
              <div style="width:6.25%"></div>
              <div style="width:6.25%">操作</div>
              <div style="width:27.5%">音乐标题</div>
              <div style="width:15%">歌手</div>
              <div style="width:20%">专辑</div>
              <div style="width:8.75%">时长</div>
              <div style="width:16.25%">热度</div>
          </li>
      </template>
    </div>
</template>
<script>
export default{

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

li.item div{
  box-sizing: border-box;
  float: left;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 13px;
  color: rgb(102,102,102);
  text-indent: 12px;
}
</style>
