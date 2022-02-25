<template>
    <div class="login">
        <div class="login_area">
            <div class="login_left"></div>
            <div class="login_right">
                <div class="login_logo">
                    <img src="../assets/check.png" alt="" class="logo_size">
                </div>
                <div class="login_title_area">
                   <h4 class="logo_title">Hello Again!</h4>
                   <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae repudiandae pariatur eveniet officiis voluptatem harum,</small>
                </div>
                <div class="login_input">
                    <el-input placeholder="請輸入帳號"  clearable style="width:100%" v-model="account"></el-input>
                    <el-input placeholder="請輸入密碼"  show-password style="margin-top:3%" v-model="password"></el-input>
                </div>
                <div class="login_check">
                     <el-checkbox v-model="checked">Remember Me</el-checkbox>
                     <a href="#">Recovery Password</a>
                </div>
                <div class="login_btn_area">
                    <button class="login_btn" @click="login()">Login</button>
                </div>
                <div class="login_bottom">
                    <span class="login_bottom_span">Don't have an account yet?</span>
                    <p class="login_bottom_p" @click="register">Sign up</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const Base64 = require("js-base64").Base64;
export default {
    name:"Login",
    data(){
        return{
            account:'',
            password:'',
            checked: false
        }
    },
    mounted(){
        let username = localStorage.getItem("userId");
        if(username){
            this.account=localStorage.getItem("userId");
            this.password=Base64.decode(localStorage.getItem("password"));
            this.checked=true;
        }
    },
    components:{
        // ComLogin
    },
    methods:{
        login(){
            if (this.checked) {
                let password = Base64.encode(this.password); // base64加密
                localStorage.setItem("userId", this.account);
                localStorage.setItem("password", password);
            } else {
                localStorage.removeItem("userId");
                localStorage.removeItem("password");
            }
            let username =this.account;
            this.$store.dispatch('MemberDataModules/setUsername',username);
            this.$router.push("/");
        },
        register(){
            console.log('register');
        }
    }
}
</script>
<style scoped>
    .login{
        background-image:url("../assets/background.jpg");
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center; 
        align-items: center; 
    }
    .login_area{
        background-color: white;
        min-height: 80%;
        width: 80%;
        border-radius: 20px;
        display: flex;
    }
    .login_left{
        width: 50%;
        background-image:url("../assets/login.jpg");
        border-radius: 20px 0 0 20px;
    }
    .login_right{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        padding: 0 40px;
    }
    .comback{
        background-color: white;
        height: inherit;
        width: inherit;
    }
    .login_logo{
        margin-top: 5%;
        width: 90%;
        height: 10%;
        display: flex;
        justify-content: center; 
    }
    .logo_size{
        height: 40px;
        width: 40px;
    }
    .logo_title{
        font-weight: 800;
    }
    .login_title_area{
        width: 90%;
        margin-top: 2%;
        text-align: center;
    }
    small{
        color: #a2a5a8;
        font-weight: 800;
        font-size: 10px;
    }
    .login_input{
        margin-top: 5%;
        width: 90%;
    }
    .login_check{
        width: 90%;
        margin-top: 3%;
        display: flex;
        justify-content: space-between;
    }
    /deep/.el-checkbox__label{
         line-height: 10px;
        font-size: 8px;
        font-weight: 800;
    }
    a{
        font-weight: 800;
        line-height: 10px;
        font-size: 8px;
        text-decoration: none;
        color: #2c59bb;
        padding-top: 6px;
    }
    .login_btn_area{
        margin-top: 6%;
        width: 90%;
        margin-bottom: 12%;
    }
    .login_btn{
        width: 100%;
        border-radius: 10px;
        font-size: 20px;
        border: none;
        padding: 4px 0;
        color: white;
        background-color: #2c59bb;
    }
    .login_btn:hover{
        background-color: #3670ee;
    }
    .login_bottom{
        width: 90%;
        display: flex;
        justify-content: center;
    }
    .login_bottom_span{
        font-size: 10px;
        color: #a2a5a8;
        font-weight: 800;
    }
    .login_bottom_p{
        margin-left: 5px;
        font-size: 10px;
        color: #2c59bb;
        font-weight: 800;
        cursor: pointer;
    }
    @media screen and (max-width: 576px) {
        .login_left{
            display: none;
        }
        .login_right{
            width: 100%;
        }
        .login_bottom{
            margin-bottom: -5%;
        }
    }
    @media screen and (max-width: 992px){
        .login_left{
            display: none;
        }
        .login_right{
            width: 100%;
        }
        .login_logo{
            margin-top: 5%;
        }
        .login_btn_area{
            margin-bottom: 8%;
        }
    }
</style>
