<template>
	<div class="bgcolor" style="background:url('./static/bgColor.png');background-size:100% 100%;">
		<span class="title">乐读</span>
		<div class="titPic">
			<!-- <img v-bind:src="imgPic" alt=""> -->
			<img src="https://img.alicdn.com/imgextra/i1/1750978869/TB2mx8vzYJmpuFjSZFwXXaE4VXa_!!1750978869.png" alt="">
		</div>
		<div class="quan"></div>
		<div class="text">
			<p class="text1">Username</p>
		<p class="text2">LOGINING...</p>
			<!-- <router-link to="/allTit" class="text2">LOGINING...</router-link> -->
		</div>
	</div>
</template>
<script>
	export default{
		name:'bgcolor',
		data(){
			return{
				imgPic:'../static/logo.png'
			}
		},
		mounted(){
			this.onload()
		},
		methods:{
			onload(){
				setTimeout(this.go,2000);
			},
			go() {
				this.$router.push('/allTit');
			}
		}


	}
	
 </script>
<style scoped>
	.bgcolor{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.title{
		display: block;
		width:200px;
		line-height: 100px;
		text-align: center;
		position: absolute;
		left: 50%;
		top: 20%;
		margin-top: -50px;
		margin-left:-100px;
		font-size:2.5em;
		color:white;
		font-weight: bold;
		letter-spacing:10px;
	}
	.titPic{
		width: 180px;
		height: 180px;
		position: absolute;
		left: 50%;
		top: 52%;
		margin-top: -98px;
		margin-left: -85px;
		/*border:1px solid red;*/
	}
	.titPic img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border-width: 10px;
		border-color: white;
		border-style: solid;
		box-sizing: border-box;
	}
	.bgcolor .quan{
		position: absolute;
		width: 210px;
		height: 210px;
		left:50%;
		top: 50%;
		margin-left: -100px;
		margin-top: -100px;
		background-image: url("../assets/quan.png");
		background-size: 100% 100%;
	}
	.text{
		position: absolute;
		width: 300px;
		/*height: 300px;*/
		left: 50%;
		top:70%;
		margin-left: -150px;
		
	}
	.text1{
		color:#a5d6b8;
		font-size: 1.5em;
		text-align: center;
	}
	.text2{
		margin-top: 10px;
		margin-left: 30%;
		width: 40%;
		color:#a5d6b8;
		font-size: 0.8em;
		text-align: center;
		background: #359265;
		line-height: 30px;
		border-radius: 18px;
	}
</style>