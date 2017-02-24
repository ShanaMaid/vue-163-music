<template>
	<div id="footers" name="footers">
    <div class="control">
      <img class="pre" src="../assets/music_pre.png">
      <img class="play" src="../assets/music_play.png">
      <img class="next" src="../assets/music_next.png">
    </div>
    <div class="progress">
      <vue-slider v-model="value"></vue-slider>
    </div>
	</div>
</template>
<script >
import vueSlider from 'vue-slider-component'

export default {
  name: 'footers',
  compnents: {
    vueSlider
  },
  data () {
    return {
      app: '网易云音乐',
      value: 1
    }
  }
}

</script>
<style scoped>
*{
  box-sizing: border-box;
}

#footers{
	height: 50px;
	width: 100%;
  background-color: rgb(246,246,248);
  border: 1px solid rgb(225,225,226);
  padding: 5px 0px;
  padding-left: 30px;
}

.pre,
.next{
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 30px;
  position: relative;
  top: -5px;
}

.play{
  width: 40px;
  height: 40px;
  border: 40px;
  cursor: pointer;
  margin: 0 15px;
}

.control,
.progress{
  display: inline-block;
  float: left;
}


</style>
