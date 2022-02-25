<template>
    <div class="img_hover">
        <div class="circle">
            <div class="circle_content">
                (灬ºωº灬)
            </div>
        </div>
        <div class="circle_img">
            perry
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .img_hover{
    }
    .circle{
        border: 1px solid #F5F5F5;
        width: 120px;
        height: 120px;
        margin-top: 2%;
        margin-right: 20%;
        border-radius: 50%;
        background-color: #F5F5F5;
        color: black;
        display: flex;
        justify-content: center; 
        align-items: center; 
        z-index: 0;
        position: absolute;
        transform-origin: 95% 40%;
        transition: all 0.3s ease-in-out;
    }
    .circle_content{
        border: 1px solid #F5F5F5;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: white;
        color: black;
        display: flex;
        justify-content: center; 
        align-items: center; 
        z-index: 1;
    }
    .circle_img{
        border: 1px solid #F5F5F5;
        width: 120px;
        height: 120px;
        margin-top: 2%;
        margin-right: 20%;
        border-radius: 50%;
        background-color: #F5F5F5;
        color: black;
        display: flex;
        justify-content: center; 
        align-items: center; 
        z-index: 0;
        position: absolute;
        transform-origin: 95% 40%;
        transition: all 0.3s ease-in-out;
    }
    .circle_img:hover{
        transform: rotate(-110deg);
    }
    
</style>
