<template>
    <div class="toCartDetailsPage">
        <section v-if="cartData">
            <div class="banPicture" >
                <img :src="cartData.CoverPhoto" alt="没有图片数据" @click="imgs(cartData.SerialID)">
                <span>{{cartData["pic_group_count"]}} 张照片</span>
            </div>
            <div class="detail-info" >
                <div class="priceBox">
                    <p>{{cartData["market_attribute"].dealer_price}}</p>
                    <p>{{cartData["market_attribute"]["official_refer_price"]}}</p>
                </div>
                <button v-on:click.stop>
                    {{cartData.BottomEntranceTitle}}
                </button>
            </div>
            <div class="cartList">
                <div class="yearClassify">
                    <span>全部</span>
                    <span>2018</span>
                    <span>2017</span>
                </div>
    
                <ul v-for="(value,index) in cartData.list" :key="index">
                    <p>{{value["exhaust_str"]}}/{{value["inhale_type"]}}</p>
                    <li>
                        <p>{{value["market_attribute"].year}}款 {{value["car_name"]}}</p>
                        <p>{{value["horse_power"]}}马力{{value["gear_num"]}}档</p>
                        <p>
                            <span>{{value["market_attribute"]["official_refer_price"]}}</span>
                            <span>{{value["market_attribute"]["dealer_price_min"]}}</span>
                        </p>
                        <button>询问底价</button>
                    </li>
                </ul>

            </div>
        </section>
        <footer>
            <h2>询问底价</h2>
            <h3>本地经销商为你报价</h3>
        </footer>
    </div>
</template>
 
<script>
    import {mapMutations,mapState,mapActions} from "vuex"
    
    export default {
        name:"toCartDetailsPage",
        data(){
            return {
                arr:[1,2,3,4,5,6,78,9,9]
            }
        },
        methods:{
            ...mapMutations({
                
            }),
            ...mapActions({
                requireData:"toCartDetailsPage/requireData"
            })
        },
        computed:{
            ...mapState({
                title:state=>state.toCartDetailsPage.title,
                cartData:state=>state.toCartDetailsPage.cartData
            })
        },
        updated(){
            console.log(JSON.stringify(this.cartData,3))
            // let transmitToId = this.$router.history.current.params.id;
            // this.requireData(transmitToId);
            // console.log(this.cartData,1111111111) 
        }
    }
</script>

<style scoped lang="scss">
    @mixin num($w,$h){width:$w;height:$h};
    .toCartDetailsPage{
        @include num(100%,100%);
        display:flex;flex-direction:column;
    }
    section{
        flex:1;
        overflow:hidden;
        overflow-y:auto;
    }
    footer{
        @include num(100%,50px);
        background:#3aacff;
        text-align:center;
        padding:6px;box-sizing:border-box;
        color:#fff;
        &>h2{
            font-size:16px;
        }
        h3{
            font-size:14px;cursor:pointer;
        }
    }
    .banPicture{
        @include num(100%,4rem);
        overflow:hidden;
        position:relative;
        &>img{
            width: 100%;height:auto;
            transform:translate(0,-10%);
            
        }
        &>span{
            position:absolute;
            top:3.2rem;right:.2rem;
            color:#fff;
            background:rgba(0,0,0,.5);
            border-radius:10px;padding:2px 6px;padding-bottom:4px;
            font-size:10px;
        }
    }
    .detail-info{
        padding:.2rem;
        height:1.5rem;
        display:flex;
        align-items:center;
        border-bottom: .15rem solid #f4f4f4;
        .priceBox{
            flex:1;
            &>p:first-child{
            color:red;
            font-size:.4rem;
            font-weight:500;
            }
            &>p:nth-child(2){
                font-size: .26rem;
                color: silver;
            }
        }
        &>button{
            background:#00afff;
            @include num(3.8rem,.7rem);
            color:#fff;
            line-height:.7rem;
            border-radius:10px;
            
        }
    }
    .cartList{
        @include num(100%,auto);
        .yearClassify{
            width:100%;height:auto;
            &>span{
                box-sizing:content-box;
                padding: 0 .3rem;
                font-size: .32rem;
                height: .77rem;
                line-height: .77rem;
                background: #fff;
            }
        }
        &>ul{
            @include num(100%,auto);
            &>p{
                padding: 0 .2rem;
                height: .5rem;
                line-height: .5rem;
                font-size: .26rem;
                color: #999;
                background: #f4f4f4;
            }
            &>li{
                 padding:0 .2rem;
                &>p:first-of-type{
                    padding: .26rem 0 .18rem;
                    font-size: .3rem;
                    line-height: 1;
                    color: #3d3d3d;

                }
                &>p:nth-of-type(2){
                    color: #bdbdbd;
                    font-size: .26rem; 
                }
                &>p:last-of-type{
                    text-align: right;
                    padding-bottom: .1rem;
                    font-size: .24rem;
                    color: #818181;
                    &>span:first-child{
                        text-align: right;
                        padding-bottom: .1rem;
                        font-size: .24rem;
                        color: #818181;
                    }
                    &>span:last-child{
                        font-size: .3rem;
                        color: #ff2336;
                        margin-left: .1rem;
                    }
                }
                &>button{
                    width:100%;
                    padding:0;
                    border-top: 1px solid #eee;
                    height: .8rem;
                    font-size: .32rem;
                    color: #00afff;
                    background: #fff;
                    font-weight: 500;
                    
                   
                }
            }
        }
    }
   
</style>
