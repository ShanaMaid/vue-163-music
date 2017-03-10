<template>
	<div id="footers" name="footers">
    <div class="control">
      <img class="pre" @click="getCurrent" src="../assets/music_pre.png">
      <img class="play" @click="playMusic" src="../assets/music_play.png" :style="{display: !play ? 'inline-block' : 'none'}">
      <img class="play" @click="pauseMusic" src="../assets/music_stop.png" :style="{display: !play ? 'none' : 'inline-block'}">
      <img class="next" src="../assets/music_next.png">
    </div>
    <div class="progress">
      <span>{{current}}</span>
      <vue-slider @drag-start="dragStart" @drag-end="dragEnd" class="playprogress" ref="slider" v-bind="setting" style="display:inline-block;padding:15px 10px;" v-model="progress"></vue-slider>
      <span>{{end}}</span>
      <img class="volume" src="../assets/volume.png">
      <vue-slider class="volumeprogress" ref="slider2" v-bind="setting2" style="display:inline-block;padding:15px 10px;" v-model="volume"></vue-slider>

      <audio @canplay="audioInit" ref="player" @ended="pauseMusic" style="display:none" :src="this.$store.state.songList[0]"  controls="controls"></audio>
    </div>
	</div>
</template>
<script >
import VueSlider from 'vue-slider-component'

export default {
  name: 'footers',
  components: {
    VueSlider
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
        },
        min: 0,
        max: 200,
        clickable: true,
        speed: 1.0
      },
      progress: 1,
      setting2: {
        width: 100,
        tooltip: 'hover',
        dotSize: 10,
        clickable: true,
        processStyle: {
          'background-color': 'rgb(232,60,60)'
        },
        max: 100,
        min: 0
      },
      volume: 100,
      play: false,
      current: '00:00',
      end: '00:00',
      update: '',
      drag: false
    }
  },
  mounted: function () {
  },
  methods: {
    audioInit: function () {
      const duration = this.$refs.player.duration
      this.end = this.timeToStr(duration)
      this.setting.max = Number.parseInt(duration, 10)
    },
    getCurrent: function () {
      const currentTime = this.$refs.player.currentTime
      this.current = this.timeToStr(currentTime)
      this.progress = Number.parseInt(currentTime, 10)
    },
    playMusic: function () {
      this.update = setInterval(this.getCurrent, 1000 / 60)
      this.$refs.player.play()
      this.play = !this.play
    },
    pauseMusic: function () {
      clearInterval(this.update)
      this.$refs.player.pause()
      this.play = !this.play
    },
    dragEnd: function () {
      this.drag = false
      this.update = setInterval(this.getCurrent, 1000 / 60)
    },
    dragStart: function () {
      this.drag = true
      clearInterval(this.update)
    },
    timeToStr: function (time) {
      let min = Number.parseInt(time / 60, 10) + ''
      let seconds = Number.parseInt(time % 60, 10) + ''
      min = min.length === 1 ? ('0' + min) : min
      seconds = seconds.length === 1 ? ('0' + seconds) : seconds
      return min + ':' + seconds
    }
  },
  watch: {
    progress: function (newValue, oldValue) {
      if (this.drag || Math.abs(newValue - oldValue) > 1) {
        this.current = this.timeToStr(newValue)
        this.$refs.player.currentTime = newValue
      }
    },
    volume: function (newValue) {
      this.$refs.player.volume = newValue / 100
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
