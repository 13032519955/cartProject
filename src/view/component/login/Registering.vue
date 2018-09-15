<template>
    <div class="registering">
        <form class="registeringFrom" >
            <label>
                 <img src="@assets/icon/login.png" alt="">
                 <input type="text" placeholder="请输入6-12位账号 或 邮箱地址" @blur.prevent="form" name="username" >
            </label>
            <label>
                <img src="@assets/icon/registering.png" alt="">
                <input type="text" placeholder="请输入6-10以内的密码" @blur.prevent="form" name="pressword">
            </label>
            <label>
                <img src="@assets/icon/registering.png" alt="">
                <input type="text" placeholder="请重复密码" @blur.prevent="form" name="reviewPressword">
            </label>
            
            <p>
                <img src="@assets/icon/verificationCode.png" alt="">
                <input type="text" placeholder="请输入验证码" @blur.prevent="form" name="verification">
                <button @click.prevent="getVerificationButton">点击获取</button>
            </p>
            <label class="errorInfo" v-if="errorInfo">
                <p>{{errorInfo}}</p>
            </label>
            <button @click.prevent="registeringButton"> 确 定 </button>
            
        </form>
    </div>
</template>

<script>
    export default {
        name:"registering",
        data(){
            return {
                errorInfo:""
            }
        },
        methods:{
            registeringButton(){
                this.$axios.get("/api/goods").then(data=>{
                    console.log(data)
                })
            },
            getVerificationButton(){
                this.$axios.post("/api/getVerification").then(data=>{
                    console.log(data)
                })
            },
            form(e){
                let targetName = e.target.name;
                let targetValue = e.target.value;
                switch(targetName){
                    case "username":
                        console.log("登入页",targetValue)
                        break;
                    case "pressword":
                        console.log("输入密码");
                        break;
                    case "reviewPressword":
                        console.log("重复密码");
                        break;
                    case "verification":
                        console.log("验证码");
                        break;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .registeringFrom{
        display:flex;flex-direction:column;
       align-items:center;
        &>label,&>p{
            height:.6rem;margin:.15rem 0;
            width:90%;
            display:flex;
            border:1px solid #ccc;
            position:relative;
            border-radius:6px;overflow:hidden;
           
            
            &>img{
                width:.3rem;height:.3rem;
                position:absolute;
                left:.05rem;top:.05rem;
            }
            &>input{
               flex:1;
                border:0;outline:0;
                font-size:.16rem;
                text-indent:.5rem;
                
            }
        }
        &>label:first-child{
            margin-top:.3rem;
        }
        &>p{
            display:flex;
            &>input{
                flex:2;min-width:100px;
            }
            &>button{
                flex:1;
                flex-shrink:0;border:0;width:180px;
                font-size:.16rem;outline:0;cursor:pointer;
            }
        }
        &>button{
            
            border:0;height:.5rem;margin:20px 0;
            background:#15DC67;color:#fff;
            font-weight:bold;border-radius:10px;
            font-size:.16rem;width:90%;
        }
    }
    .errorInfo{
        color:red;
        line-height:60px;
        text-align:center;
        &>p{
            width:100%;height:100%;
        }
    }
    @media screen and (min-width:430px){
    
        .registeringFrom{
         
            &>label,&>p{
                height:28px;font-size:16px;margin:4px;
                &>img{
                    width:20px;height:20px;
                    position:absolute;
                    left:4px;top:4px;
                }
                &>input{
                    text-indent:25px;
                }
            }
            &>button{
                height:.3rem;
            }
             &>label:first-child{
                margin-top:20px;
            }
        }
    }
 
</style>
