<template>
  	<dd class="item animated fadeIn" v-bind:style="{width:width}" @click="$router.push({path:'/playlist/'+url})">
      <p v-if="!down" class="more animated fadeInDown">{{msg}}</p>
      <p v-if="!down" class="number animated fadeIn"><img src="../../assets/headset.png">{{number}}</p>
      <img v-bind:src="imgSrc">
      <span >{{introduce}}</span>
      <em v-if="!down" class="animated fadeIn"></em>
    </dd>
</template>
<script >
export default {
  name: 'cover',
  props: {
    imgSrc: {
      required: true
    },
    introduce: {
      required: true
    },
    width: {
      required: true
    },
    msg: {
      default: 0
    },
    down: {
      default: false
    },
    number: {
      default: 0
    },
    url: {
      default: 0
    }
  },
  data () {
    return {
      app: '网易云音乐'
    }
  }
}
</script>
<style scoped>
*{
  box-sizing: border-box;
}

dd{
  display: inline-block;
  height: 180px;
  font-size: 12px;
  line-height: 1.4;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.item > img{
  width: 100%;
  height: 140px;
  border: 1px solid rgb(225,225,226);
}

em{
  position: absolute;
  background-image: url('../../assets/play.png');
  width: 25px;
  height: 25px;
  right: 5px;
  bottom: 45px;
  background-size: cover;
  border: 1px solid white;
  border-radius: 25px;
  opacity: 0.8;
  display: none;
}

dd:hover em,
dd:hover p{
  display: inline-block;
}

dd:hover .number{
  display: none;
}

.number{
  height: 20px;
  position: absolute;
  color: white;
  text-align: right;
  width: 100%;
  font-size: 11px;
  line-height: 20px;
  padding: 0 10px;
  background: linear-gradient(to left, rgba(100,100,100,0.9) , rgba(255,255,255,0.1)); /* 标准的语法 */
}

.number img{
  width: 15px;
  height: 15px;
  vertical-align: middle;
}

.more{
  position: absolute;
  color: white;
  background-color: rgba(0,0,0,0.5);
  padding: 5px;
  height: 48px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: none;
}
</style>
