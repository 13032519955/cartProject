<template>
    <div class="LoginPage">
        <section class="LoginPageWrap">
            <div class="LoginPageWrapBox">
                <h1>车轮项目</h1>
                <nav >
                    <router-link to="login" :class="{click:1==navShowNumber}">
                        <span @click="changeNumber(1)">登陆</span>
                    </router-link>
                    <router-link to="registering" :class="{click:2==navShowNumber}">
                        <span @click="changeNumber(2)">注册</span>
                    </router-link>
                </nav>
               <div class="show">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
</template> 

<script>
export default {
    name:"LoginPage",
    data(){
        return {
            info:"这里是登入页",
            navShowNumber:1
        }
    },
    methods:{
        changeNumber(n){
            this.navShowNumber = n;
        }
    },
    beforeRouteEnter(to,from,next){
        alert("局部守卫进来之前");
        next();
    },
    beforeRouteLeave(to,from,next){
        alert("局部守卫,离开之前");
        next();
    },
    beforeDestroy(){
        alert("组件销毁之前")
    }
}
</script>

<style scoped lang="scss">
    @mixin num($w,$h){width:$w;height:$h;}
    .LoginPage{
        @include num(100%,100%);
        background:url("../assets/images/bj01.jpg") center no-repeat;
        background-size:cover;display:flex;justify-content:flex-end;
    }
    .LoginPageWrap{
        @include num(70%,100%);margin-right:14px;
        padding-top:60px;
     
    }
    .LoginPageWrapBox{
        width:90%;height:auto;margin:0 auto;
        background:rgba(255,255,255,.6);
        min-height:260px;min-width:90%;
        display:flex;flex-direction:column;
        justify-content:flex-start;
        border-radius:10px;
        box-shadow:4px 4px 0 4px #ccc,inset 0px 0px 0px 1px #ccc;
        &>h1{
            text-align:center;
            padding-top:20px;
            font-family:"Kaiti";
            font-size:20px;
        }
        &>nav{
            @include num(100%,50px);
            display:flex;justify-content:center;
            &>a{
                display:block;
                margin:0 12%;
                font-size:.3rem;font-weight:bold;
                font-family:"Kaiti";
                height:100%;line-height:70px;
                flex-shrink:0;
                &>span{
                    display:block;height:100%;width:100%;padding:0 6px;
                }
            }
        }
        &>.show{
            flex:1;
        }
    }
    .click{
        color:#10C55B;
        border-bottom:4px solid #10C55B;
        border-radius:2px;
    }
    @media screen and (min-width:1280px){
        .LoginPageWrapBox{max-width:806px;min-width:0;}
    }
    @media screen and (max-width:414px){
        .LoginPageWrapBox{
            &>nav{
                &>a{
                     margin:0 6%;
                    font-size:.3rem;
                }
            }
        }
    }

</style>
