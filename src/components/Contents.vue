<template>
	<div id="contents" name="contents">
		<list></list>
		<router-view/>
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
</style>
