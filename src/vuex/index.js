import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

//模块数据
import homePage from "./modules/homePage.js"
import toCartDetailsPage from "./modules/toCartDetailsPage.js"

export default new Vuex.Store({
    strict:false,
    modules:{
        homePage,
        toCartDetailsPage
    }
})