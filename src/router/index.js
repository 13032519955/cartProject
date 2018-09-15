import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);


//一级路由页面
import homePage from "../view/homePage.vue"
import toCartDetailsPage from "../view/toCartDetailsPage.vue"
import loginPage from "../view/loginPage.vue"

//二级路由
import logCom from "@viewComponent/login/Login.vue"
import registering from "@viewComponent/login/Registering.vue"


 let router = new VueRouter({
    routes:[
        {path:"/",component:loginPage,redirect:"/login",children:[
            {path:"login",component:logCom},
            {path:"/registering",component:registering}
        ]},
        {path:"/toCartDetailsPage",name:"ToCartDetailsPage",component:toCartDetailsPage},
        {path:"/homePage",component:homePage},
        {path:"*",redirect:"/"}
    ],
    mode:"hash"
});

router.beforeEach((to,from,next)=>{
    // console.log(to,from)
    //console.log("哇咔咔",document.cookie);
    console.log(to.path !="/login",document.cookie!="true")
    if(to.path !="/login" && document.cookie != "true"){
        next("/")
    }else{
        next();
    }
   
})



export default router;