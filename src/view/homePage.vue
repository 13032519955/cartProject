<template>
    <div class="homePage">
		<div class="wrap">
			<section>
				<div v-for="(item, index) in brandList" :key="index">
					<ul>
						<p :id="index">{{index}}</p>
						<li v-for="(value, key) in item" :key="key" @click="requireDetailsPage($event,value.MasterID)">
							<img :src="value.CoverPhoto">
							<span>{{value.Name}}</span>    
						</li>
					</ul>
				</div>
			</section>
		</div>
		<!-- <p v-for="(value, key,index) in testData" :key="index">
			value:{{value}}--key:{{key}}--index:{{index}}
			v-for循环对象的时候value是键值,key是键名,index是下标
		</p> -->
		<aside @touchstart="touchstart"
               @touchmove="touchmove"
               @touchend="touchend">
			<span v-for="(item, index) in asideNav" :key="index">{{item}}</span>    
		</aside>

        <point v-show="isPoint" :txt="pointTxt"/>
        <details-page></details-page>
	</div>  
</template>

<script>
    import {mapState,mapMutations,mapActions} from "vuex"

    //引入组件
    import point from "./component/point.vue"
    import detailsPage from "./component/detailsPage.vue"

	export default {
		name:"homePage",
		data(){
			return {
				title:"这是首页哦",
				testData:{a:"1",b:2}
			}
		},
		methods:{
             ...mapMutations({
                showPoint:"homePage/showPoint",
                hiddenPoint:"homePage/hiddenPoint"   //$store.commit 触发
            }),
            ...mapActions({
                detailsPage:"homePage/detailsPage"  //$store.dispatch 触发
            }),
            touchstart(){
                // console.log("touch按下")
                
            },
			touchmove(e){
                // 获取手指的位置
                let pageY = e.touches[0].pageY;

                // 计算当前在那一个字母 
                let index = Math.floor((pageY-this.marginTop)/20);

                if( index < 0){index = 0;}
                if( index > this.asideNav.length-1){ index = this.asideNav.length - 1;}
                
                // 查询id为当前字母的元素
                let ele = document.getElementById(this.asideNav[index]);
               
                let top = ele.offsetTop;
                document.querySelector('.wrap').scrollTop = top;
               
                //控制显示弹出框组件并传入当前字母
                this.showPoint(this.asideNav[index]);

            },
            touchend(){
                // console.log("touch离开")
                this.hiddenPoint();
            },
            requireDetailsPage(e,payload){
                this.detailsPage(payload)
            }
        },
		computed:{
			...mapState({
				title2:state=>state.homePage.title,
				asideNav:state=>state.homePage.asideNav,
                brandList:state=>state.homePage.brandList,
                isPoint:state=>state.homePage.isPoint,
                pointTxt:state=>state.homePage.pointTxt
            }),
             
		},
		mounted(){
			this.$store.dispatch("homePage/sendRequest")
            // console.log("获取到的数据",this.brandList)
            // console.log(this.brandList,111111111111111111)
            
		},
		updated() {
            // 获取字母列表距离顶部的高度  文档的高度 - (多少文字 * 20 = 侧边栏的高度) 得到剩下的高度 除以2 得到 文字A距离文档的高度
			this.marginTop = (window.innerHeight - (this.asideNav.length)*20) / 2; 
        },
        components:{
            point,detailsPage
        }
	}
	
			
	
</script>

<style scoped lang="scss">
	@mixin num($w,$h){
		width:$w;height:$h;
	}
	.homePage{
		@include num(100%,100%);
	}
	 .wrap{
        height: 100%;
        overflow:hidden;overflow-y:auto;
    }
    aside{
        position: fixed;
        top: 50%;
        right: .1rem;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        span{
            font-size: .24rem;
            color: #666;
            font-weight: 500;
            padding: .02rem .1rem;
            height: 0.4rem;
            box-sizing: border-box;
        }
    }
    ul{
        p{
            font-size: .28rem;
            line-height: .4rem;
            background: #f4f4f4;
            padding-left: .3rem;
            color: #aaa;
        }
        li{
            margin: 0 .3rem;
            height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
        }
        img{
            height: .8rem;cursor:pointer;
        }
        span{
            font-size: .32rem;
            margin-left: .4rem;
        }
    }
</style>
