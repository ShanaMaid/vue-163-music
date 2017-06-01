<template>
	<div class="search" tabindex="100"  @focus="show=true" @blur="show=false">
		<span><input type="text" v-model="s" @keyup.enter = "search" @focus="show=true" @blur="show=false" placeholder="搜索音乐，歌手，歌词，用户"><i class="search-icon" @click="search"></i></span>
		<div v-show="show" name="downlist" id="downlist">
    		<em></em>
    		<dl class="content">
    			<dt>热门搜索</dt>
    			<dd @click="hotSearch">Coldplay</dd>
    			<dd @click="hotSearch">赵雷</dd>
    			<dd @click="hotSearch">让我留在你身边</dd>
    			<dd @click="hotSearch">皮皮虾我们走</dd>
    			<dd @click="hotSearch">刀山火海</dd>
    			<dd @click="hotSearch">侧田</dd>
    			<dd @click="hotSearch">三生三世十里桃花</dd>
    			<dd @click="hotSearch">欢乐好声音</dd>
    			<dd @click="hotSearch">陈奕迅</dd>
    			<dd @click="hotSearch">周杰伦</dd>
    		</dl>
		</div>
	</div>
</template>
<script>
import search from '../deal/search'
export default{
  data () {
    return {
      app: '网易云音乐',
      show: false,
      s: '',
      type: {
        'single': 1,
        'ablum': 10,
        'singer': 100,
        'songlist': 1000,
        'user': 1002,
        'mv': 1004,
        'word': 1006,
        'station': 1009
      }
    }
  },
  methods: {
    hotSearch: function (e) {
      console.log(e.target.textContent)
      this.s = e.target.textContent
      this.show = false
      this.search()
    },
    search: function () {
      if (new Set(...this.s).has(' ') || this.s === '') {
        alert('别调皮啦！输入正确歌名')
        this.show = false
        return
      }
      this.$store.commit('setSearchResult', [])
      let itemName = new Set(Object.keys(this.type))
      let type = itemName.has(this.topName) ? this.topName : 'single'
      this.$store.commit('setSearchName', this.s)
      this.$http.post('/api/search/pc', {s: this.s, limit: 100, type: this.type[type]}).then(response => {
        let result = search[type](response.body)
        this.$store.commit('setSearchResult', result)
        this.$router.push({path: '/search/' + type})
      }, response => {
        alert('网络存在问题，无法搜索')
      })
    }
  },
  computed: {
    topName: function () {
      let path = this.$route.path
      path = path.substr(path.lastIndexOf('/') + 1)
      return path
    }
  },
  watch: {
    topName: function (newVal) {
      let path = this.$route.path
      if (path === '/search/' + newVal && !new Set(...this.s).has(' ') && this.s !== '') {
        this.search()
      }
    }
  }
}
</script>
<style scoped>
*{
	box-sizing: border-box;
}

.search{
  outline: none;
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
}

.search span > i{
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
	height: 400px;
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
