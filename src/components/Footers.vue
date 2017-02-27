<template>
	<div id="footers" name="footers">
    <div class="control">
      <img class="pre" src="../assets/music_pre.png">
      <img class="play" src="../assets/music_play.png">
      <img class="next" src="../assets/music_next.png">
    </div>
    <div class="progress">
      <span>0:00</span>
      <vue-slider class="playprogress" ref="slider" v-bind="setting" style="display:inline-block;padding:15px 10px;" v-model="progress"></vue-slider>
      <span>4:50</span>
      <img class="volume" src="../assets/volume.png">
      <vue-slider class="volumeprogress" ref="slider2" v-bind="setting2" style="display:inline-block;padding:15px 10px;" v-model="volume"></vue-slider>
    </div>
	</div>
</template>
<script >
import vueSlider from 'vue-slider-component'

export default {
  name: 'footers',
  components: {
    vueSlider
  },
  data () {
    return {
      app: '网易云音乐',
      setting: {
        width: 430,
        tooltip: false,
        dotSize: 13,
        processStyle: {
          'background-color': 'rgb(232,60,60)'
        }
      },
      progress: 1,
      setting2: {
        width: 100,
        tooltip: false,
        dotSize: 10,
        processStyle: {
          'background-color': 'rgb(232,60,60)'
        }
      },
      volume: 2
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
  height: 100%;
  line-height: 50px;
  margin-left: 20px;
}

.progress span{
  position: relative;
  top: -10px;
}

.volume{
  width: 20px;
  height: 20px;
  opacity: 0.5;
  position: relative;
  top:-8px;
  left: 5px;
}

</style>
<style>
 .vue-slider-dot{
  background: url('../assets/point.png') no-repeat;
  box-shadow: none;
  border-radius: 0;
  position: relative;
}

.playprogress .vue-slider-dot{
  background-size: 5px 5px;
  background-position: 4px;
}

.volumeprogress .vue-slider-dot{
  background-size: 4px 4px;
  background-position: 3px;
}

</style>
