import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';  
Vue.use(Vuex)
Vue.use(VueResource) 

const state={
	count:0,
	likeNum:0,
	See:0,
	del:0,
	tagList:[],

}

var tagList1 = JSON.parse(localStorage.getItem('tagList'));
if (tagList1) {
	state.tagList = tagList1
	}else {
		this.$http.get('http://118.89.156.82/yulin/taglist').then(function(res){ 
			state.tagList=res.body.tagList;
			localStorage.setItem("tagList", JSON.stringify(state.tagList)); 
	  	}) 
	}

const getters={
	count:function(state){
		state.count=0;
		// state.tagList=JSON.parse(localStorage.getItem('tagList'));
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
	},

	likeNum:function(state){
	state.likeNum=0;
	// state.tagList=JSON.parse(localStorage.getItem('tagList'));
	for (var i = 0; i < state.tagList.length; i++) {
		if (state.tagList[i].like==1) {
			state.likeNum+=state.tagList[i].num;
		}			
	}
	return state.likeNum;
	},

	see:function(state){
	state.See=0;
	// state.tagList=JSON.parse(localStorage.getItem('tagList'));
	// console.log(state.tagList.length);
	for (var i = 0; i < state.tagList.length; i++) {
		if (state.tagList[i].see==1) {
			state.See+=state.tagList[i].num;
		}			
	}
	return state.See;
	},

	del:function(state){
	state.del=0;
	// state.tagList=JSON.parse(localStorage.getItem('tagList'));
	// console.log(state.tagList.length);
	for (var i = 0; i < state.tagList.length; i++) {
		if (state.tagList[i].del==1) {
			state.del+=state.tagList[i].num;
		}			
	}
	return state.del;
	},
}
const mutations={
	count:function(state){


		state.count=0;
		// console.dir(state.tagList);
		state.tagList=JSON.parse(localStorage.getItem('tagList'));
		for (var i = 0; i < state.tagList.length; i++) {
			if (state.tagList[i].status==1) {
				state.count+=state.tagList[i].num;
				if (state.count>99) {
					state.count=99+'+';
					break;
				}
				
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