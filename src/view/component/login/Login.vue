<template>
    <div class="Login">
        <form class="loginFrom">
            <label>
                 <img src="@assets/icon/login.png" alt="">
                 <input type="text" placeholder="请输入用户账号" ref="username">
            </label>
            <label>
                <img src="@assets/icon/registering.png" alt="">
                <input type="password" placeholder="请输入密码" ref="password">
            </label>
            <button @click.prevent="loginButton"> 确 定 </button>
        </form>
    </div>
</template>

<script>
    export default {
        name:"Login",
        methods:{
            loginButton(e){
                _hmt.push(["_trackEvent", "login", "click", "登入"])
                // console.log(window.localStorage)
                // console.log(window.sessionStorage)
                // console.log(document.cookie)
                let username = this.$refs.username.value;
                let password = this.$refs.password.value;
                document.cookie = "true"
                if(username == "123456" && password == 123456){
                    this.$router.push({path:"/homePage"})
                }else{
                    alert("请输入正确的账号或者密码")
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .loginFrom{
        display:flex;flex-direction:column;
        padding:10px;
        &>label{
            
            height:.6rem;margin-top:10px;
            display:flex;
            border:1px solid #ccc;
            position:relative;
            border-radius:6px;overflow:hidden;
            &>img{
                width:.3rem;height:.3rem;
                position:absolute;
                left:.15rem;top:.15rem;
            }
            &>input{
                flex:1;
                border:0;outline:0;
                text-indent:.5rem;
                font-size:.16rem;
            }
        }
        &>button{
            border:0;height:.6rem;margin:20px 0;
            background:#15DC67;color:#fff;
            font-weight:bold;border-radius:10px;
            cursor:pointer;
        }
    }
    @media screen and (min-width:430px){
          .loginFrom{
                margin:0 auto;
          }
    }
</style>
