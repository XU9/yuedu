<template>
	<div class="allTag">
		<div class="box">
			<ul >
				<li v-for="item in tagList" :class="{sign:item.status==1}" v-on:click="say(item)">
					<p>{{item.titleTag}}</p>
					<span><b>{{item.num}}</b>  new feeds </span> 
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		name:'allTag',
		data(){
			return{
			}
		},
		props:['tagList'],		
		methods:{
			say(item){
				// console.log(item);
				this.$router.push('/theme/'+item.classify+'/'+item.titleTag);
			}
		}
	}

</script>
<style scoped>
	.allTag{
		width: 100%;
		height: 100%;
	}
	.box{
		width: 90%;
		background: red;
		margin:8% auto;
		/*font-size: 0.8em;*/
	}
	.box .sign{
		background:#f5f0ec url('../assets/sign.png') no-repeat;
	}
	.box ul{
		width: 100%;
		float: left;
		/*font-size: 0.8em;*/
		text-align: center;
		box-sizing: border-box;	
	}
	.box ul li{
		list-style: none;
		float: left;
		width: 33%;
		height:72px;
		border:2px solid white;
		color:#84776e;
		background: #f5f0ec;
		box-sizing: border-box;
	}
	.box ul li p{
		margin-top: 8%;
		font-size: 1.5em;
		font-weight: bold;
	}
	.box ul li span{
		font-size: 0.8em;
		margin-bottom: 2%;
	}
	.box ul li span b{
		color:#f59356;
	}
</style>