import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)


const state={
	count:0,
	tagList:[],
	// tagList:[ 
	// 	{	
	// 		status: 0,  //状态
	// 		see:0,		//看过
	// 		del:0,		//删除
	// 		like:0,		//喜欢
	// 		titleTag:"娱乐",//标题
	// 		classify:1,    //分类可以使用ID区分分类
	// 		num:32			//新增数量
	// 	},
	// 	{	
	// 		status: 1,
	// 		see:1,
	// 		del:0,
	// 		like:1,
	// 		titleTag:"社会",
	// 		classify:2,
	// 		num:23
	// 	},{	
	// 		status: 0,
	// 		see:1,
	// 		del:0,
	// 		like:0,
	// 		titleTag:"科技",
	// 		classify:3,
	// 		num:45
	// 	},{	
	// 		status: 1,
	// 		see:0,
	// 		del:0,
	// 		like:1,
	// 		titleTag:"教育",
	// 		classify:4,
	// 		num:6
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:0,
	// 		titleTag:"体育",
	// 		classify:5,
	// 		num:19
	// 	},{	
	// 		status: 1,
	// 		see:0,
	// 		del:1,
	// 		like:0,
	// 		titleTag:"手机",
	// 		classify:6,
	// 		num:34
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:1,
	// 		like:1,
	// 		titleTag:"游戏",
	// 		classify:7,
	// 		num:99
	// 	},{	
	// 		status: 0,
	// 		see:1,
	// 		del:0,
	// 		like:1,
	// 		titleTag:"女人",
	// 		classify:8,
	// 		num:123
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:0,
	// 		like:0,
	// 		titleTag:"育儿",
	// 		classify:9,
	// 		num:19
	// 	},{	
	// 		status: 1,
	// 		see:0,
	// 		del:0,
	// 		like:1,
	// 		titleTag:"人文",
	// 		classify:10,
	// 		num:34
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:1,
	// 		like:0,
	// 		titleTag:"资讯",
	// 		classify:11,
	// 		num:99
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:0,
	// 		like:1,
	// 		titleTag:"动漫",
	// 		classify:12,
	// 		num:123
	// 	},{	
	// 		status: 0,
	// 		see:1,
	// 		del:0,
	// 		like:0,
	// 		titleTag:"教育",
	// 		classify:13,
	// 		num:19
	// 	},{	
	// 		status: 1,
	// 		see:0,
	// 		del:0,
	// 		like:0,
	// 		titleTag:"音乐",
	// 		classify:14,
	// 		num:34
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:1,
	// 		like:0,
	// 		titleTag:"留学",
	// 		classify:15,
	// 		num:99
	// 	},{	
	// 		status: 0,
	// 		see:0,
	// 		del:0,
	// 		like:0,
	// 		titleTag:"电脑",
	// 		classify:16,
	// 		num:123
	// 	},
	// ],
}

var tagList1 = JSON.parse(localStorage.getItem('tagList'));
// if (tagList1) {
// 	state.tagList = tagList1
// }else {
// 	this.$http.get('http://118.89.156.82/yulin/taglist').then(function(res){ 
// 		state.tagList=res.body.tagList;
// 		localStorage.setItem("tagList", JSON.stringify(state.tagList)); 
//   	}) 
// }
const getters={
	count:function(state){

		state.count=0;
		for (var i = 0; i < state.tagList.length; i++) {
			if (state.tagList[i].status==1) {
				state.count+=state.tagList[i].num;
				// console.log(state.count);
				if (state.count>99) {
					state.count=99+'+';
					break;
				}
			}			
		}
		return state.count;
	}
}
const mutations={
	count:function(state){


		state.count=0;
		// console.dir(state.tagList);
		state.tagList=JSON.parse(localStorage.getItem('tagList'));
		for (var i = 0; i < state.tagList.length; i++) {
			if (state.tagList[i].status==1) {
				state.count+=state.tagList[i].num;
				// if (state.count>99) {
				// 	state.count=99+'+';
				// 	break;
				// }
				
			}			
		}

		// console.log(state.count);

		return state.count;
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,

	
	// actions           
})