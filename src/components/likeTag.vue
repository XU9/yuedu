<template>
	<div class="likeTag" >
		<div class="headImg">
			<router-link  to='/liketag/pick' class="pick">
				<img src="../assets/core-2.png" alt="">
				<p>{{num1}}</p>
			</router-link>
			<router-link to='/liketag/pick2'>
				<img src="../assets/eye-2.png" alt="">
				<p>{{num2}}</p>
			</router-link>
			<router-link to='/liketag/pick3' class="clear">
				<img src="../assets/del.png" alt="">
				<p>{{num3}}</p>
			</router-link>
		</div>
		<router-view :tagList="tagList"></router-view>
	</div>
</template>
<script>
	export default{
		name:'likeTag',
		data(){
			return{
				num1:203,
				num2:15,
				num3:243,
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
		}
	}
</script>
<style scoped>
	.likeTag{
		width: 100%;
		height: 100%;
	}
	.headImg{
		width: 100%;
		height: 14%;
		background: #4daf7c;
		border-bottom: 4px solid #409c6d;
	}
	.headImg img{
		width: 50px;
		height: 50px;
	}
	.headImg a{
		text-decoration: none;
		float: left;
		width: 33.33%;
		height: 100%;
		padding-top: 3%;
		box-sizing: border-box;
		text-align: center;
		border-right: 1px dotted #5bcd90;
	}
	.headImg a p{
		font-size: 1.6em;
		color:#fff8cc;
	}
	.pick{
		background: #3d865f;
	}
	.clear{
		border-right: none;
	}
</style>