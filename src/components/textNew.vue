<template>
	<div class="headNew">
		<div class="headTop">
			<div class="juzhong">
				<img @click="getback" class="img2" src="../assets/back.png" alt="">
					<div class="outer">
						<img  src="../assets/eye.png" alt="">
						<b>网易新闻</b>
						<span>http://New.163.com</span>
					</div>
			</div>
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
				textNew:[]
				// textNew:{
				// 	textId:1,
				// 	name:'文章名字',
				// 	mesText:'拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了咖啡店垃圾地方拉克丝都放假了咖啡店咖啡店垃圾地方拉克丝都放假了垃圾地方拉克丝都放假了咖啡店'
				// }
			}
		},
		components:{
			textNewChild
		},
		mounted(){
			var textNew = JSON.parse(localStorage.getItem('themeChildTitle'));
			if (textNew) {
				this.$data.textNew = textNew
			}else {
				this.$http.get('http://118.89.156.82/yulin/newlist').then(function(res){ 
		  		this.$data.textNew=res.body.themeChildTitle;
		  		localStorage.setItem("themeChildTitle", JSON.stringify(this.$data.textNew)); 
		      	}) 
			}		 
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
		height: 100%;		
	}
	.headTop{
		background:#4daf7c;
		display: table;		
		height: 16%;
		width: 100%;
		z-index:222;
		box-sizing: border-box;		
		position: fixed;
	}
	.juzhong{
		display: table-cell;
		vertical-align:middle;
	}

	.headTop .juzhong img{
		vertical-align: middle;
		margin-left: 4%;
	}
	.headTop .outer{
		text-align: center;
	}
	.headTop .juzhong .img2{
		margin-top: -30px;
	}
	.headTop .juzhong b,span{
		vertical-align: middle;
	}
	.headTop .juzhong b{
		font-size:1em;
		color:white;
		letter-spacing: 2px;
		font-weight: lighter ;
	}
	.headTop .juzhong span{
		padding:1px 5px;
		height: 10px;
		font-size: 0.1em;
		color:#97eabc;
		background: #349260;
		border-radius: 8px;
	}

</style>