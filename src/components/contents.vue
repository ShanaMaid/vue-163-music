<template>
	<div id="contents" name="contents">
    <div class="left">
      <list :choosed="topName"></list>
    </div>
		<div class="right">
      <router-view />
    </div>
	</div>
</template>
<script >
import List from './list'
export default {
  name: 'contents',
  components: {
    List
  },
  data () {
    return {
      app: ''
    }
  },
  computed: {
    topName: function () {
      let path = this.$route.path
      path = path.substr(1)
      path = path.substr(0, path.indexOf('/'))
      if (path === 'playlist') {
        path = this.$route.params.id
      }
      return path
    }
  }
}
</script>
<style scoped>
#contents{
	height: 570px;
	width: 100%;
}

.left{
  width: 20%;
  height: 100%;
  float: left;
}

.right{
  width: 80%;
  height: 100%;
  float: right;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
}
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgb(245,245,247);
}
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgb(225,225,226);
  background-color: rgb(225,225,226);
}
</style>
