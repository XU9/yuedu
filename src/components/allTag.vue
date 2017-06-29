<template>
	<div class="allTag">
	<!-- {{$store.getters.count}} -->
		<div class="box">
			<ul >
				<li  v-for="(item,index) in tagList" :class="{sign:item.status==1}" v-on:click="say(item)" >				
					<p v-finger:long-tap="longTap" :id="index">{{item.titleTag}}</p>
					<span><b>{{item.num}}</b>  new feeds </span> 
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})
var that;	
	export default{

		name:'allTag',
		data(){
			return{		

			}
		},
		props:['tagList'],		
		methods:{
			say(item){
				console.log(item);
				// item.status==1 ? item.status=0 : item.status=1;
				this.$router.push('/theme/'+item.classify+'/'+item.titleTag);
			},
			shuanji(item){
				item.status=item.status==1 ? 0 :1;
			},
			longTap(event) { 
				this.tagList[event.target.id].status=this.tagList[event.target.id].status==1? 0 : 1;
				localStorage.setItem("tagList", JSON.stringify(this.tagList));
				that=this;	
				setTimeout(function(){
					that.$store.commit('count')
				},300)

			},
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