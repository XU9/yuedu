<template>
	<div class="likeTag" v-finger:swipe="getback">
		<div class="headImg">
			<div class="baoa" @click="dianji">
				<router-link  to='/liketag/pick' class="pick this1">
					<img src="../assets/core-2.png" alt="">
					<p>{{$store.getters.likeNum}}</p>
				</router-link>
			</div>
			<div class="baoa" @click="dianji">
				<router-link to='/liketag/pick2'>
					<img src="../assets/eye-2.png" alt="">
					<p>{{$store.getters.see}}</p>
				</router-link>
			</div>
			<div class="baoa" @click="dianji">
				<router-link to='/liketag/pick3' class="clear">
					<img src="../assets/del.png" alt="">
					<p>{{$store.getters.del}}</p>
				</router-link>
			</div>
		</div>
		<router-view :tagList="tagList"></router-view>
	</div>
</template>
<script>
import Vue from 'vue'
import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})
	export default{
		name:'likeTag',
		data(){
			return{
				tagList:[]
			}
		},
		mounted(){
			var tagList = JSON.parse(localStorage.getItem('tagList'));
			if (tagList) {
				this.$data.tagList = tagList
			}else {
				this.$http.get('http://118.89.156.82/yulin/taglist').then(function(res){ 
		  		this.$data.tagList=res.body.tagList;
		  		localStorage.setItem("tagList", JSON.stringify(this.$data.tagList)); 
		      	}) 
			}
		 
		},
		methods:{
		    getback:function(evt) {
		        if (evt.direction == "Right") {
		        	this.$router.push('/allTit');
		        }
		    },
		    dianji:function(event){
				var aa = event.currentTarget.parentNode.getElementsByTagName("a");
				for(var i=0; i<aa.length; i++ ){
					aa[i].className = ""
				}
				event.currentTarget.childNodes[0].className="pick";
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
		height: 16%;
		background: #4daf7c;
		border-bottom: 4px solid #409c6d;
	}
	.headImg img{
		width: 40%;
	}
	.baoa{
		/*border:1px solid red;*/
		width: 33.33%;
		height: 100%;
		float:left;
		box-sizing: border-box;
	}
	.headImg a{
		text-decoration: none;
		float: left;
		width: 100%;
		height: 100%;
		padding-top: 3%;
		box-sizing: border-box;
		text-align: center;
		border-right: 1px dotted #5bcd90;
	}
	.headImg a p{
		font-size: 1.2em;
		color:#fff8cc;
	}
	.pick{
		background: #3d865f;
	}
	.clear{
		border-right: none;
	}
</style>