<template>
		<div class="subsyance">		
		<div v-for='item in themeChildTitle'>
			<div class="message" v-if="item.classify==$route.params.classify" @click="totextnew(item)">			
				<img v-bind:src='item.mesPic' alt="">
				<p >{{item.title1}}</p>
				<span>{{item.mesText}}</span>
			</div>
		</div>
		</div>
		

</template>
<script>

	export default{
		name:'headInfo',
		data(){
			return{
			}
		},
		props:['themeChildTitle'],
		methods:{
			totextnew(item){
				this.$router.push('/textNew/'+item.title1+'/'+item.textId)
			}
		}
	}
</script>
<style scoped>
	.subsyance{
		width: 96%;
		margin:0 auto;
		padding-top:28%;

	}
	.message{
		margin-top:4%;
		border-bottom:1px solid #e4e4e4;
		padding-bottom: 4%;
		/*box-shadow: 0 0 1px 0 #97efbf;*/
		/*border-radius: 8px;*/
		float: left;

	}
	.subsyance img{
		width: 40%;
		float: left;

	}
	.subsyance p{
		margin-left: 10px;
		margin-top:2px;
		float: left;
		color:#7a7a7a;
		font-size: 1.1em;		
	}
	.subsyance span{
		width: 56%;
		height: 64px;
		/*border:1px solid red;*/
		margin-top: 1%;
		margin-left: 10px;
		/*float: left;*/
		display: inline-block;
		font-size: 0.6em;
		overflow:hidden; 
		text-overflow:ellipsis;


		
	}

</style>