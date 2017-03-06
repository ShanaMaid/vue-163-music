<template>
	<div class="search">
		<span><input type="text"  @focus="display" @blur="display"  placeholder="搜索音乐，歌手，歌词，用户"></span>
		<div v-show="show" name="downlist" id="downlist">
    		<em></em>
    		<dl class="content">
    			<dt>热门搜索</dt>
    			<dd>Coldplay</dd>
    			<dd>赵雷</dd>
    			<dd>让我留在你身边</dd>
    			<dd>皮皮虾我们走</dd>
    			<dd>刀山火海</dd>
    			<dd>侧田</dd>
    			<dd>三生三世十里桃花</dd>
    			<dd>欢乐好声音</dd>
    			<dd>陈奕迅</dd>
    			<dd>周杰伦</dd>
    		</dl>
		</div>
	</div>
</template>
<script>
export default{
  data () {
    return {
      app: '网易云音乐',
      show: false
    }
  },
  methods: {
    display: function () {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
*{
	box-sizing: border-box;
}

.search input{
	width: 220px;
	height: 24px;
	border: none;
	border-radius: 10px;
	outline: none;
	font-size: 12px;
	line-height: 1;
	padding: 0 30px 0 10px;
	box-sizing: border-box;
	color: white;
	background-color: rgb(168,40,40);
}

.search span:before{
	position: absolute;
	display: block;
	content: '';
	width: 20px;
	height: 20px;
	background-size: cover;
	background-image: url('../assets/search.png');
	left: 195px;
	top: 15px;
	cursor: pointer;

}

#downlist{
	width: 220px;
	height: 300px;
	position: relative;
	z-index: 100;
}

em{
	display: block;
	margin: 0 auto;
	width: 0px;
	border-bottom: 11px white solid;
	border-left: 15px transparent solid;
	border-right: 15px transparent solid;
}

.content{
	height: 340px;
	width: 100%;
	background-color: white;
	box-shadow: 0px 2px 4px rgb(225,225,226);
	border-radius: 5px;
}

dt{
	font-size: 13px;
	color: rgb(136,136,136);
	padding: 10px;
	border-bottom: 1px solid rgb(233,233,233);
}

dd{
	font-size: 13px;
	color: black;
	padding: 8px 10px;
}

dd:hover{
	background-color: rgb(236,237,238);
	cursor: pointer;
}
</style>
