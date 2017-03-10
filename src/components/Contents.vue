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
</style>
