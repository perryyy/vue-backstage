<template>
    <div class="carousel">
        <div class="post_header">
            <div class="header_img"><el-avatar> user </el-avatar></div>
            <div class="header_user">
                <div class="username">Admin</div>
                <div class="comment_time">Shared publicly - 7:30 PM today</div>
            </div>
            <div class="header_like">
                 <vue-star  color="#F05654">
                      <i slot="icon" class="fas fa-heart"></i>
                </vue-star>
            </div>
        </div>
        <div class="post_body">
            <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="post_footer">
            <div class="share"><i class="el-icon-share"></i> Share</div>
            <div class="like">Like</div>
        </div>
    </div>
</template>
<script>
import VueStar from 'vue-star';
export default{
    components:{
        VueStar
    }
}
</script>
<style scoped>
    .carousel{
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        height: 100%;
        margin-bottom: 2%;
        border-bottom: 1px solid  #d2d6de;
    }
    .post_header{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .header_user{
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: 1%;
        width: 80%;
    }
    .username{
        font-size: 16px;
    }
    .comment_time{
        font-size: 12px;
        color: #666;
    }
    .header_like{
        height: 40px;
        width: 14%;
        /* padding-right: 2%; */
        display: flex;
        justify-content: center; 
        align-items: center; 
        cursor: pointer;
    }
    .header_img{
        width: 6%;
        margin-right: 1%;
        /* margin-left: 1%; */
    }
    .post_body{
        width: 100%;
        text-align: left;
        padding-left: 5px;
        margin: 1% 0;
        font-size: 14px;
        color: #666;
    }
    .post_footer{
        display: flex;
        margin-bottom: 2%;
        font-size: 14px;
        color: #666;
        padding-left: 5px;
    }
    .share{
        margin-right: 3%;
    }
    .share:hover{
        color: rgb(143, 143, 143);
    }
    .like:hover{
        color: rgb(143, 143, 143);
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
  
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    @media screen and (max-width: 900px) {
        .header_img{
            width: 14%;
            margin-left: 2%;
        }
    }
</style>