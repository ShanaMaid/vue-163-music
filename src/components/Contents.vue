<template>
	<div id="contents" name="contents">
		<List></List>
		<Mains></Mains>
	</div>
</template>
<script >
import List from './List'
import Mains from './Mains'
export default {
  name: 'contents',
  components: {
    List,
    Mains
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
