<template>
    <div class="detailsPage" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" :class="{on:detailsPageShow,delay:isDelay}" :style="{right:detailsPageMove}">
        <div class="typeList" v-for="(items,index) in detailsPageData" :key="index">
            <p >{{items.GroupName}}</p>
            <ul >
                <li v-for="(value,key) in items.GroupList" :key="key" @click="toCartDetailsPage(value.SerialID)">
                    <img :src="value.Picture" >
                    <span>{{ value.AliasName}}</span>   
                    <span>{{value.DealerPrice}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapState,mapMutations,mapActions} from "vuex"
    export default {
        name:"detailsPage",
        data(){
            return{
                detailsPageMove:0,
                isDelay:false
            }
        },
        methods:{
            ...mapMutations({
                hiddenDetailsPage:"homePage/hiddenDetailsPage"  //通过this.$store.commit() 可以获取并触发
            }),
            ...mapActions({
                requireData:"toCartDetailsPage/requireData"
            }),
            touchstart(e){
                this.start=e.touches[0].pageX;
            },
            touchmove(e){
                this.moveData = this.move = this.start - e.touches[0].pageX
                this.detailsPageMove =   this.moveData > 0 ? 0 : this.moveData + "px"  ;
                // console.log(this.moveData    )
            },
            touchend(){
                //判断距离
                 if(this.moveData > -70){
                     this.detailsPageMove = 0;
                     this.isDelay = true;
                     setTimeout(()=>{   this.isDelay = false;},500)
                 }else{
                    //为什么要加这个判断,是为了解决点击时也隐藏的bug..判断如果移动的距离为0 就不执行;
                    if(!this.moveData){ return false }

                    this.moveData = 0;
                    this.hiddenDetailsPage()
                    setTimeout(()=>{  this.detailsPageMove = 0;},600)
                 }
            },
            toCartDetailsPage(id){
                //点击跳转的时候应该直接获取详情系列的数据 才合理
                this.requireData(id);

                // console.log(id)
                //this.$router.push({path:"/toCartDetailsPage",query:{id:id}})    //通过路径跳转路由 传参是query
                this.$router.push({name:"ToCartDetailsPage",params:{id:"helloWord"}})      //通过name来跳转  传参是params

            }
        },
        computed:{
            ...mapState({
                detailsPageData:state=>state.homePage.detailsPageData, 
                detailsPageShow:state=>state.homePage.detailsPageShow
            })
        },
        mounted(){
           
        },
    }
</script>

<style scoped lang="scss">
    .detailsPage{
        position:fixed;
        width:75%;height:100%;
        right:0;top:0;
        background:#fff;
        overflow:hidden;
        overflow-y:auto;
        font-size: .28rem;
        box-shadow:1px -1px 8px 1px #a2a7ac;;
        transform: translate(101%,0%);
        transition:transform .3s linear;
    }
    .detailsPage.on{
        transform: translate(0%,0%);
    }
    .detailsPage.delay{
         transition:all .3s linear;
    }
    .typeList{
        &>p{
            
            line-height: .5rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        &>ul{
            &>li{
                margin: 0 .3rem;
                height: 1.5rem;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                display: flex;
                align-items: center;
                position:relative;
                padding-left:2.2rem;
                display:flex;flex-direction:column;
                justify-content:center;padding-right:.6rem;
                align-items:flex-start;
                &>img{
                    position:absolute;
                    left:.1rem;top:0.15rem;
                    
                    width: 1.8rem;
                    height: 1.2rem;
                }
                &>span:last-child{
                    color:red;padding-top:.06rem;;
                }
            }
           
        }
    }
</style>
