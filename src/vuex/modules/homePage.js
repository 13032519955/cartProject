import {sendFetch} from "@util/index.js"

export default {
    //数据区域
    state:{
        title:"这是首页的数据",
        asideNav:[],
        brandList:{},
        isPoint:false,
        pointTxt:"",
        detailsPageData:[],
        detailsPageShow:false
    },
    //派生数据
    getters:{},
    //三大原则 只能在mutations里修改state的数据
    mutations:{
        setData(state,payload){
            let 
                asideNav = [],
                brandList = {};
            
            payload.forEach((item)=>{
                let spell = item.Spelling[0];
                // 判断这个字母是否在前面出现过
                if (asideNav.indexOf(spell) != -1){
                    // 只要把数据放到brand里
                    brandList[spell].push(item);
                }else{
                    // 把新字母放到letters列表
                    asideNav.push(spell);
                    // 在brand里新建一项并赋值为一个数组
                    brandList[spell] = [item];
                }
            });
    
            state.asideNav = asideNav;
            state.brandList = brandList;
        },
        showPoint(state,payload){
            state.isPoint = true;
            state.pointTxt = payload;
        },
        hiddenPoint(state){
            state.isPoint = false;
        },
        setDetailsPageData(state,payload){
            if(payload.code != -1){
                //显示详情页滑到左边视窗
                state.detailsPageShow = true;
                state.detailsPageData = payload.data;
                
            }else{
                console.warn(new Error("数据没有请求到"))
            }
        },
        hiddenDetailsPage(state){
            state.detailsPageShow = false;
            // console.log("触发")
        }
    },
    //异步操作
    actions:{
        sendRequest(context,payload){
            sendFetch("https://baojia.chelun.com/v2-car-getMasterBrandList.html?_1535698551812",{
                method:"get",
                resType:"json"
            }).then(data=>{
               context.commit("setData",data.data)
            })
        },
        detailsPage(context,payload){
            console.log("点击获取详情页数据",payload)
            sendFetch("http://baojia-test.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID="+payload,{
                method:"get",
                resType:"json"
            }).then(data=>{
                context.commit("setDetailsPageData",data)
                
            })
        }
    },
    namespaced:true
}