<template>
	<div class="headNew">
		<div class="headTop">
			<img @click="getback" src="../assets/back.png" alt="">
			<img class="img1" src="../assets/eye.png" alt="">
			<b>网易新闻</b>
			<span>http://New.163.com</span>
		</div>
		<text-new-child :textNew='textNew'></text-new-child>
	</div>
</template>
<script>
import textNewChild from "./textNewChild";
	export default{
		name:'headNew',
		data(){
			return {
				textNew:{
					textId:1,
					name:'文章名字',
					Thenew:'垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了垃圾地方拉克丝都放假了咖啡店'
				}
			}
		},
		components:{
			textNewChild
		},
		methods:{
			getback(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	.headNew{
		width: 100%;
		height: 12%;
		background:#4daf7c;
	}
	.headTop{
		padding-top: 10PX;
		width: 100%;
		line-height: 60px;
		/*border:1px solid red;*/
		vertical-align: middle;
		box-sizing: border-box;
		z-index: 222;
		position: fixed;
		background:#4daf7c;
	}

	.headTop img{
		vertical-align: middle;
		margin-left: 4%;

	}
	.headTop .img1{
		margin-left: 12%;
	}
	.headTop b,span{
		vertical-align: middle;
	}
	.headTop b{
		font-size: 1.2em;
		color:white;
		letter-spacing: 2px;
		font-weight: lighter ;
	}
	.headTop span{
		padding:1px 5px;
		height: 10px;
		font-size: 0.1em;
		color:#97eabc;
		background: #349260;
		border-radius: 8px;
	}

</style>