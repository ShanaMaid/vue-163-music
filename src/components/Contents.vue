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
      app: '网易云音乐'
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
