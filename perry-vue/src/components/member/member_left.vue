<template>
    <div class="profile">
        <div class="profile_top">
            <div class="profile_title"><p class="about">關於</p><p class="bounce">Me</p> </div>
            <div class="profile_img">
                <img_hover/>
            </div>
        </div>
        
        <div class="profile_description">
            <div class="profile_content_top">
                <i class="el-icon-reading"></i> 創作時間
            </div>
            <div class="profile_content_main"><span>2022年01月22號</span></div>
        </div>
        <div class="profile_skill">
             <div class="profile_content_top"><i class="el-icon-document-checked"></i> 技能</div>
             <div class="profile_skill_main">
                 <span>Vue</span><el-progress :percentage="70"></el-progress>
                 <span>JavaScript</span><el-progress :percentage="10"></el-progress>
                 <span>CSS</span><el-progress :percentage="20"></el-progress>
                 <span>Total</span><el-progress :percentage="100" status="success"></el-progress>
             </div>
        </div>
    </div>
</template>
<script>
import img_hover from '../aos/image_hover.vue';
export default{
    components:{
        img_hover
    }
}
</script>
<style scoped>
    .profile{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .profile_title{
        width: 100%; 
        display: flex;
        font-weight: 600;
        color:   #777a7e;
        border-bottom: 2px solid #e6ebf5;
    }
    .about{
        margin-right: 2%;
    }
    .profile_top{
        min-height: 40%;
        width: 100%;
        padding: 4px 0;
        box-sizing: border-box;
        font-size: 16px;
        color: #303133;
        text-align: left;
        color:  #777a7e;
        display: flex;
        flex-direction: column;
    }
    .profile_content_top{
        min-height: 10%;
        width: 100%;
        padding: 4px 0;
        border-bottom: 2px solid #e6ebf5;
        box-sizing: border-box;
        font-size: 16px;
        color: #303133;
        text-align: left;
        color:  #777a7e;
        font-weight: 800;
    }
    .profile_img{
        height: 80%;
        margin-left: 25%;
    }
    .profile_description{
        min-height: 20%;
        width: 100%;
    }
    .profile_skill{
        min-height: 30%;
        width: 100%;
    }
    .profile_content_main{
        margin-top: 8%;
        margin-left: 5%;
        text-align: left;
        font-size: 14px;
        color: #303133;
    }
    .profile_skill_main{
        margin-top: 3%;
        margin-left: 5%;
        text-align: left;
        font-size: 14px;
        color: #303133;
    }
    .bounce{
        animation: bounce 0.75s cubic-bezier(0.05, 0, 0.2, 1) 4 alternate;
    }
    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-0.3em);
        }
    }
    @media screen and (max-width: 900px) {
        .profile{
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 0 5px;
        }
        .profile_top{
            min-height: 200px;
        }
        .profile_description{
            min-height: 100px;
            margin-bottom: 2%;
        }
        .profile_skill{
            min-height: 40%;
        }
        .profile_img{
            margin-left: 35%;
        }
    }
</style>