import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		use_name:''
	},
	mutations:{
		"set_name":function(state,use_name){
			state.use_name=user_name
		}
	},
	getters:{
		"get_name":function(state){
			return state.use_name;
		}
	},
	actions:{
		"set_name":function(state,user_name){
			store.commit("set_name",user_name)
		}
	}
})
export default store