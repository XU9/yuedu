<template>
	<div class="theNew">
		<div class="text" v-for="item in textNew" v-if="item.textId==$route.params.textId">
			<p>
				<span >{{item.title1}}</span>
				<hr>
				<div class="Left">{{item.mesText }}</div>
			</p>
		</div>
	</div>
</template>
<script>
	export default{
		name:'theNew',
		data(){
			return{

			}
		},
		props:['textNew'],
	}
</script>
<style scoped>
	.theNew{
		position: absolute;
		padding-top:120px;
		
		
	}
	.text{
		width: 96%;	
		/*border:1px solid red;*/
		margin:0 auto;
	}
	.theNew p{		
		font-size: 2em;		
		letter-spacing: 4px;
		line-height: 24px;
		padding-bottom: 20px;
		text-align: center;
	}
	.theNew p span{
		text-align: center;
	}
	.theNew .Left{
		text-indent:35px;
		margin-top: 10px;
		font-size: 1em;
		letter-spacing: 2px;
	}
</style>