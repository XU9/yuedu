<template>
	<div class="theNew">
		<p>
			{{textNew.name}}
			<!-- {{$route.params.textTitle}}	 -->
			<hr>
			<div>{{textNew.Thenew}}</div>
			<!-- {{textNew.Thenew}} -->
		</p>
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
		padding-top:90px;
		
	}
	.theNew p{
		/*border:1px solid red;*/
		width: 96%;
		margin:0 auto;
		letter-spacing: 2px;
		line-height: 24px;
		padding-bottom: 20px;
	}
</style>