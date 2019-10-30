import Vue from 'vue'
import Vuex from 'Vuex'
// import loca from '../locas'

Vue.use(Vuex);

var state={
    list:[],
    arr:[],
    user:[],
    userInfo:[],
    // join:[]
}

var mutations={
    allshop(state){
        state.arr=state.list
    },
    // joinadd(state,data){
    //     state.join= data
    //     // loca.save("zj",data)
    //     console.log(state.join)
    // },
    jujia(state){
        state.arr=state.list.filter(item=>{
            return item.type=="jujia2"
        })
    },
    peishi(state){
        state.arr=state.list.filter(item=>{
            return item.type=="peishi2"
        })
    },
    clothes(state){
        state.arr=state.list.filter(item=>{
            return item.type=="fuzhuang2"
        })
    },
    dianqi(state){
        state.arr=state.list.filter(item=>{
            return item.type=="dianqi2"
        })
    }
}




var store = new Vuex.Store({state,mutations})

export default store