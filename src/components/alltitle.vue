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
					<p>{{number}}</p>
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
				number:3,
				tagList:[
					{	
						status: 0,  //状态
						see:0,		//看过
						del:0,		//删除
						like:0,		//喜欢
						titleTag:"娱乐",//标题
						classify:1,    //分类可以使用ID区分分类
						num:32			//新增数量
					},
					{	
						status: 1,
						see:1,
						del:0,
						like:1,
						titleTag:"社会",
						classify:2,
						num:23
					},{	
						status: 0,
						see:1,
						del:0,
						like:0,
						titleTag:"科技",
						classify:3,
						num:45
					},{	
						status: 1,
						see:0,
						del:0,
						like:1,
						titleTag:"教育",
						classify:4,
						num:6
					},{	
						status: 0,
						see:0,
						del:0,
						titleTag:"体育",
						classify:5,
						num:19
					},{	
						status: 1,
						see:0,
						del:1,
						like:0,
						titleTag:"手机",
						classify:6,
						num:34
					},{	
						status: 0,
						see:0,
						del:1,
						like:1,
						titleTag:"游戏",
						classify:7,
						num:99
					},{	
						status: 0,
						see:1,
						del:0,
						like:1,
						titleTag:"女人",
						classify:8,
						num:123
					},{	
						status: 0,
						see:0,
						del:0,
						like:0,
						titleTag:"育儿",
						classify:9,
						num:19
					},{	
						status: 1,
						see:0,
						del:0,
						like:1,
						titleTag:"人文",
						classify:10,
						num:34
					},{	
						status: 0,
						see:0,
						del:1,
						like:0,
						titleTag:"资讯",
						classify:11,
						num:99
					},{	
						status: 0,
						see:0,
						del:0,
						like:1,
						titleTag:"动漫",
						classify:12,
						num:123
					},{	
						status: 0,
						see:1,
						del:0,
						like:0,
						titleTag:"教育",
						classify:13,
						num:19
					},{	
						status: 1,
						see:0,
						del:0,
						like:0,
						titleTag:"音乐",
						classify:14,
						num:34
					},{	
						status: 0,
						see:0,
						del:1,
						like:0,
						titleTag:"留学",
						classify:15,
						num:99
					},{	
						status: 0,
						see:0,
						del:0,
						like:0,
						titleTag:"电脑",
						classify:16,
						num:123
					},
				]
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
		width: 65%;
		height: 100%;
		box-sizing: border-box;
		float: left;
	}
	.info .infoL img{
		margin-top: 8%;
		margin-left:4%;
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border-width:2px;
		border-color: white;
		border-style: solid;
		box-shadow: 0 0 1px 3px #46765c;
		float: left;
	}
	span h1{
		float: left;
		color:white;
		font-size: 1.4em;
		margin-top: 12%	;
		margin-left: 4%;
	}
	span p{
		float: left;
		color:white;
		font-size:0.8em;
		margin-left: 4%;
		margin-top: 5px;
	}
	span p.text1{
		margin-top: 5px;
		font-size: 0.1em;
	}
	.infoR{
		width: 35%;
		height: 100%;
		float: left;
		box-sizing: border-box;
	}
	.infoR img{
		width: 75%;
		height: 30%;
		margin-top: 30%;
		margin-left: 12%;
	}
	.bot{
		width: 100%;
		height: 24%;
		/*border:1px solid red;*/

	}
	.bot .tag{
		float: left;
		width: 33%;
		height: 100%;
		border-right:1px solid white;
		box-sizing: border-box;
		color:white;
		padding-top: 2%;	
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
		display: block;
		text-align: center;
		width: 16px;
		line-height: 16px;
		background: red;
		border-radius: 50%;
		float: right;
		margin-right: 6px;
		margin-top: -4px;
		font-size: 0.8em;
	}

</style>