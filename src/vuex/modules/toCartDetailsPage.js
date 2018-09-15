import {sendFetch} from "../../util"

let state = {
    title:"这里是车系详情页",
    cartData:undefined
};

let getters = {

};

let mutations = {
    setDate(state,payload){
        state.cartData = payload;
    }
};


let actions = {
    requireData(context,payload){                         
        sendFetch(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${payload}`)
            .then(data=>{
                context.commit("setDate",data.data);
                
            })
    }
};

export default {
    namespaced:true,
    state,getters,mutations,actions
}