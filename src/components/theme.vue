<template>
	<div class="headInfo" >
	<!--  v-finger:swipe="swipe" -->
		<div class="textInfo" v-finger:swipe="getback">
			<span>
				<img src="../assets/eye.png" alt="">
				<b>网易新闻</b>
				<br>
				<p>New.163.com</p>
			</span>
			<span>
				<h1>{{$route.params.newTitle}}</h1>
			</span>
				<!-- {{$route.params.newId}}
				{{$route.params.newTitle}} -->
		</div>
		<theme-child :themeChildTitle='themeChildTitle' v-finger:swipe="swipe"></theme-child>
		<div class="menu" id="xuanze">
			<img src="../assets/jiantou.png" alt="">
			<ul>
				<li v-for="(item,index) in $store.state.tagList" v-if="$store.state.tagList[index].status==1" @click=say(item,index) :id="index" :style="{color:cur_index==index ? '#888888' : '#5b5b5b'}">{{item.titleTag}}</li>			
			</ul>
			<img src="../assets/east.png" alt="">
		</div>
	</div>

</template>
<script>
import themeChild from './themeChild';
import Vue from 'vue'
import AlloyFinger from 'alloyfinger/alloy_finger' // 手势库
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue'
Vue.use(AlloyFingerVue, {
  AlloyFinger
})

	export default{
		name:'headInfo',
		data(){
			return{
				cur_index:0,
				title:"社会",
				// info:'社会',
				themeChildTitle:[]
				// themeChildTitle:[
				// 	{
				// 		classify:1,
				// 		textId:1,
				// 		title1:'今日大事件之娱乐',
				// 		mesPic:'../static/info1.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大东今日大东今日大今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	},
				// 	{
				// 		classify:1,
				// 		textId:2,
				// 		title1:'今日大事件之娱乐',
				// 		mesPic:'../static/info2.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	},
				// 	{
				// 		classify:2,
				// 		textId:23,
				// 		title1:'今日大事件之社会',
				// 		mesPic:'../static/info3.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	},
				// 	{
				// 		classify:3,
				// 		textId:123,
				// 		title1:'今日大事件之科技',
				// 		mesPic:'../static/info3.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	},
				// 	{
				// 		classify:4,
				// 		textId:1234,
				// 		title1:'今日大事件之教育',
				// 		mesPic:'../static/info3.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	},
				// 	{
				// 		classify:6,
				// 		textId:12345,
				// 		title1:'今日大事件之shouji',
				// 		mesPic:'../static/info3.png',
				// 		mesText:'今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之京东今日大事件之.......'
				// 	}
				// ]
				
			}
		},
		mounted(){
			var themeChildTitle = JSON.parse(localStorage.getItem('themeChildTitle'));
			if (themeChildTitle) {
				this.$data.themeChildTitle = themeChildTitle
			}else {
				this.$http.get('http://118.89.156.82/yulin/newlist').then(function(res){ 
		  		this.$data.themeChildTitle=res.body.themeChildTitle;
		  		localStorage.setItem("themeChildTitle", JSON.stringify(this.$data.themeChildTitle)); 
		      	}) 
			}		 
		},
		components:{
			themeChild
		},
		methods:{
			say(item,index){
				// console.log(item);
				this.$router.push('/theme/'+item.classify+'/'+item.titleTag);
				// 第一种方法
				this.$data.cur_index = index;
				// 第二种方法
				// console.log(event.currentTarget.parentNode.length)
				// for (var i = 0; i < event.currentTarget.parentNode.children.length; i++) {
				// 	event.currentTarget.parentNode.children[i].className=" ";
				// 	console.log("aaa")
				// }
				// event.currentTarget.className="cliTab";
			},
		    swipe: function(evt) {
		    	var xuanze=document.getElementById('xuanze');
		        // console.log("swipe" + evt.direction);
		        if (evt.direction == "Left") {
		        	xuanze.style.left=-100+'px';
		        }else{
		        	console.log("youyouyou");
		        	xuanze.style.left=0+'px';
		        }
		    },
		    getback:function(evt) {
		        if (evt.direction == "Right") {
		        	this.$router.push('/allTit');
		        }
		    }
		}
	}
</script>
<style scoped>
	.headInfo{
		width: 100%;
		height: 100%;
		position: relative;
		background: #fafafa;
	}
	.textInfo{
		width: 100%;
		height: 16%;
		background: #4daf7c;		
		position: fixed;
		display: table;

	}
	.textInfo span {
		padding-left: 10px;
		display: table-cell;
		width: 50%;
		/*border:1px solid red;*/
		vertical-align:middle;

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
		margin-left: 20%;
		font-size: 0.4em;

	}
	.textInfo h1{
		float: right;
		color:white;
		font-size: 3em;
		margin-right: 10%;
	}
	

	.menu{
		position: absolute;
		/*display: none;*/
		left: -100px;
		top: 0;
		width: 98px;
		height: 100%;
		background:#2e2e2e;
		text-align: center;
		transition: all 0.5s;
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