<template>
  <div>
    <div class="playlist">
      <div class="head">
        <div class="choose">
          <div class="choosed">播放列表</div>
          <div>历史记录</div>
        </div>
        <div class="close">×</div>
      </div>
    </div>
  </div>
</template>
<script>
export default{
}
</script>
<style scoped>
.playlist{
  width: inherit;
  height: inherit;
  box-shadow: -2px -2px 5px 2px rgb(194,194,195);
  border: 1px solid rgb(225,225,226);
  background-color: white;
}

.head{
  height: 40px;
  background-color: rgb(244,244,246);
  border-bottom: 1px solid rgb(225,225,226);
  text-align: center;
  padding: 5px 10px;
}

.head div{
  display: inline-block;
}

.choose{
  width: 220px;
  height: 25px;
  border: 1px solid rgb(225,225,226);
  text-align: center;
  line-height: 25px;
  border-radius: 20px;
  overflow: hidden;
}

.choose  div{
  width: 50%;
  float: left;
  background-color: white;
}

.close{
  float: right;
}

div.choosed{
  background-color: rgb(124,125,133);
  color: white;
}
</style>
