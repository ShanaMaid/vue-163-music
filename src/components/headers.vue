<template>
	<div class="headers" name="header">
		<dl>
			<dd class="logo">
				<router-link to="/find/"><img src="../assets/logo2.jpg"></router-link>
			</dd>
			<dd class="control">
				<div>
					<img @click="$router.go(-1)" src="../assets/pre.png">
					<img @click="$router.go(1)" src="../assets/next.png">
				</div>
			</dd>
			<dd>
				<search></search>
			</dd>
			<dd class="person">
				<person-msg></person-msg>
			</dd>
		</dl>
	</div>
</template>
<script >
import Search from './search'
import PersonMsg from './person-msg'
export default {
  name: 'headers',
  components: {
    Search,
    PersonMsg
  },
  data () {
    // return {
    //   app: '网易云音乐'
    // }
  }
}
</script>
<style scoped>
.headers{
	background: rgb(198,47,47);
	height: 50px;
	width: 100%;
}

.logo{
	width: 190px;
}

dl dd{
	float: left;
	height: 50px;
	box-sizing: border-box;
	font-size: 0;
	position: relative;
	padding: 15px 0;
}

dl dd:first-child{
	padding: 0;
}

.control{
	width: 65px;
}
.control,
.search{
	/*padding: 15px 0;*/
}

.control div{
	border: rgb(168,40,40) 2px solid;
	border-radius: 2px;
	width: 52px;
	margin: 0 auto;
}

.control img{
	height: 20px;
	width: 24px;
	cursor: pointer;
}

.control img:first-child{
	border-right: rgb(168,40,40) 2px solid;
}


.person{
	width: 400px;
	text-align: right;
}

.disabled{
	opacity: 0.5;
}

</style>
