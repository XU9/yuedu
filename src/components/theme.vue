<template>
	<div class="headInfo">
		<div class="textInfo">
			<span>
				<img src="../assets/eye.png" alt="">
				<b>网易新闻</b>
				<br>
				<p>New.163.com</p>
			</span>
			<h1>{{$route.params.newTitle}}</h1>
				<!-- {{$route.params.newId}}
				{{$route.params.newTitle}} -->
		</div>
		<theme-child :themeChildTitle='themeChildTitle' ></theme-child>
		<div class="menu">
			<img src="../assets/jiantou.png" alt="">
			<ul>
				<li>{{title}}</li>
				<li class="cliTab">{{title}}</li>
				<li>{{title}}</li>
				<li>{{title}}</li>
				<li>{{title}}</li>
				<li>{{title}}</li>
			</ul>
			<img src="../assets/east.png" alt="">
		</div>
	</div>

</template>
<script>
import themeChild from './themeChild';
	export default{
		name:'headInfo',
		data(){
			return{
				title:"社会",
				// info:'社会',
				themeChildTitle:[
					{
						classify:1,
						textId:1,
						title1:'今日大事件之娱乐',
						mesPic:'../static/info1.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					},
					{
						classify:1,
						textId:2,
						title1:'今日大事件之娱乐',
						mesPic:'../static/info2.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					},
					{
						classify:2,
						textId:23,
						title1:'今日大事件之社会',
						mesPic:'../static/info3.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					},
					{
						classify:3,
						textId:123,
						title1:'今日大事件之科技',
						mesPic:'../static/info3.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					},
					{
						classify:4,
						textId:1234,
						title1:'今日大事件之教育',
						mesPic:'../static/info3.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					},
					{
						classify:6,
						textId:12345,
						title1:'今日大事件之shouji',
						mesPic:'../static/info3.png',
						mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
					}
				]
				
			}
		},
		components:{
			themeChild
		}
	}
</script>
<style scoped>
	.headInfo{
		width: 100%;
		height: 100%;
		position: relative;
	}
	.textInfo{
		width: 100%;
		height: 16%;
		background: #4daf7c;		
		position: fixed;

	}
	.textInfo span {
		float: left;
		display: block;
		width: 40%;
		/*border:1px solid red;*/
		padding-top: 8%;
		padding-left: 2%;

	}
	.textInfo span img{
		vertical-align: middle;
	}
	.textInfo span b{
		vertical-align: middle;
		color:#f8fffb;
		font-size: 1.2em;
		font-weight: lighter;
		letter-spacing:4px;
		margin-left: 4%;

	}
	.textInfo span p{
		display: inline-block;
		background:#359361;
		color:#97efbf;
		border-radius: 6px;
		padding:1px 5px;
		margin-top: 4%;
		margin-left: 24%;
		font-size: 0.8em;

	}
	.textInfo h1{
		float: right;
		color:white;
		font-size: 3em;
		margin-top: 4%;
		margin-right: 6%;
	}
	

	.menu{
		position: absolute;
		display: none;
		left: 0;
		top: 0;
		width: 26%;
		height: 100%;
		background:#2e2e2e;
		text-align: center;
	}
	.menu img{
		margin-top:20px;
	}
	.menu li{
		margin:0 auto;
		font-weight: bold;
		letter-spacing: 5px;
		width: 70%;
		margin-top: 10px;
		line-height: 40px;
		font-size: 1.2em;
		list-style: none;
		border-radius: 4px;
		color:#5b5b5b;
		background:#272727;
	}
	ul li.cliTab{
		color:#888888;
	}
</style>