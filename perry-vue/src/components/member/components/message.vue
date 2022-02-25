<template>
    <div class="message">
        <div class="post_header">
            <div class="header_img"><el-avatar> user </el-avatar></div>
            <div class="header_user">
                <div class="username">{{username}}</div>
                <div class="comment_time">Shared publicly - 7:30 PM today</div>
            </div>
            <div class="header_like">
                <vue-star  color="#F05654">
                      <i slot="icon" class="fas fa-heart"></i>
                </vue-star>
            </div>
        </div>
        <div class="post_body">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium officia quis adipisci quas facilis. Magnam voluptate, perferendis necessitatibus esse ex culpa quos enim pariatur neque delectus officia corporis dolore inventore.
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
    props:["username"],
    components:{
        VueStar
    }
}
</script>
<style scoped>
    .message{
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
        display: flex;
        justify-content: center; 
        align-items: center; 
        cursor: pointer;
    }
    .header_img{
        width: 6%;
        margin-right: 1%;
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
    @media screen and (max-width: 900px) {
        .header_img{
            width: 14%;
        }
    }
</style>