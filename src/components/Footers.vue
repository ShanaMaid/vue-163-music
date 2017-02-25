<template>
	<div id="footers" name="footers">
    <div class="control">
      <img class="pre" src="../assets/music_pre.png">
      <img class="play" src="../assets/music_play.png">
      <img class="next" src="../assets/music_next.png">
    </div>
    <div class="progress">
      <span>0:00</span>
      <vue-slider ref="slider" v-bind="setting" style="display:inline-block;padding:15px 10px;" v-model="value"></vue-slider>
      <span>4:50</span>
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
        width: 500,
        tooltip: false,
        processStyle: {
          'background-color': 'rgb(232,60,60)'
        },
        sliderStyle: null
      },
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
  height: 100%;
  line-height: 50px;
  margin-left: 20px;
}

.progress span{
  position: relative;
  top: -10px;
}


</style>
<style>
.star-slider,.vue-slider,.vue-slider-dot{
  background: url('../assets/point.png') no-repeat;
  background-size: 10px 10px;
  box-shadow: none;
  border-radius: 0;
  position: relative;
  background-position: 3px;
}

</style>
