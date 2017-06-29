<template>
<div class="alltit">
	<div class="header">
		<div class="top">
			<div class="info">
				<div class="infoL">
					<img :src="persons.imgSrc" alt="">
					<span>
						<h1>{{persons.name}}</h1>
						<p>{{persons.job}}</p>
						<p class="text1">Email:{{persons.email}}</p>
					</span>
				</div>
				<div class="infoR">
					<img :src="weaterImg" alt="">
				</div>
			</div>
		</div>
		<div class="bot">
			<div class="tag">
				<img src="../assets/core.png" alt="">
				<router-link to="/alltltle/alltag">
					全部TAG
				</router-link>
			</div>
			<div class="tag">
				<img src="../assets/peo.png" alt="">
				<router-link to="/alltltle/mytag">
					我的TAG
					<p><!-- {{number}} -->{{$store.getters.count}}</p>
				</router-link>
			</div>
			<div class="tag tagout">
				<img src="../assets/eye.png" alt="">
				<router-link to="/alltltle/liketag">
					发现喜欢
				</router-link>			
			</div>
		</div>
		<router-view :tagList="tagList"></router-view>
		<!-- <title-tag :tagList="tagList"></title-tag> -->
	</div>
</div>
</template>
<script>
import	titleTag from './allTag'
	export default{
		name:"alltit",
		data(){
			return{
				persons:{
					imgSrc:'../static/logo.png',
					name:'Guowc',
					job:"Web Designer",
					email:"fox@Gmil.com",
				},
			
				weaterImg:'../static/weater.png',
				// number:3,
				tagList:[]
			
			}
		},
		mounted(){
			var tagList = JSON.parse(localStorage.getItem('tagList'));
			if (tagList) {
				this.$data.tagList = tagList
			}else {
				this.$http.get('http://118.89.156.82/yulin/taglist').then(function(res){ 
		  		this.$data.tagList=res.body.tagList;
		  		localStorage.setItem("tagList", JSON.stringify(this.$data.tagList)); 
		      	}) 
			}
		 
		},
		components:{
			titleTag
		}
	}
</script>
<style scoped>
	.alltit{
		width: 100%;
		height: 100%;
	}
	.header{
		width: 100%;
		height: 24%;
		background: #4daf7c;
	}
	.top{
		width: 100%;
		height: 76%;
		border-bottom: 1px solid white;
		box-sizing: border-box;
	}
	.info{
		width: 100%;
		height: 100%;
	}
	.info .infoL{
		width: 60%;
		height: 100%;
		box-sizing: border-box;
		float: left;
	}
	.info .infoL img{
		margin-top: 8%;
		margin-left:4%;
		max-width:80px;
		width: 34%;
		/*height: 80%;*/
		border-radius: 50%;
		border-width:2px;
		border-color: white;
		border-style: solid;
		box-shadow: 0 0 1px 3px #46765c;
		float: left;
	}
	.info span{
		display: flex;
		flex-direction: column;
		padding-left: 10px;
		/*border:1px solid red;*/
		height: 100%;
		justify-content:center;
	}
	span h1{
		float: left;
		color:white;
		font-size: 1.4em;
	}
	span p{
		float: left;
		color:white;
		font-size:0.8em;
	}
	span p.text1{
		font-size: 0.1em;
	}
	.infoR{
		width: 35%;
		height: 100%;
		float: right;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content:center;
		/*border:1px solid red;*/
	}
	.infoR img{
		width: 90%;
		

	}
	.bot{
		width: 100%;
		height: 24%;
		display: flex;
		justify-content:space-around;

	}
	.bot .tag{
		float: left;
		height: 100%;
		border-right:1px solid white;
		box-sizing: border-box;
		color:white;
		padding: 2% 2% 0 0;	
		text-align: center;	
	}

	.bot .tagout{
		border-right: none;
	}
	.bot .tag img{
		vertical-align: middle;
	}
	.bot .tag a{		
		/*border:1px solid red;*/
		text-decoration: none;
		color:white;
		font-size: 0.8em;		
		vertical-align: middle;

	}
	.bot .tag a p{
		display: inline-block;
		/*text-align: center;*/
		width: 20px;
		line-height: 20px;
		background: red;
		border-radius: 50%;
	/*	float: right;
		margin-right: 6px;
		margin-top: -4px;
		font-size: 0.8em;*/
	}

</style>