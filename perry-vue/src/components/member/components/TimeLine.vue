<template>
    <div class="timeline block">
        <el-timeline>
            <el-timeline-item v-for="(item,index) in history" :key="index" :timestamp="item.time" placement="top">
            <el-card class="card_content">
                <h6 class="card_title">{{item.title}}</h6>
                <p class="card_text">{{item.user}}</p>
            </el-card>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<script>
export default{
    data(){
        return{
            history:[
                {time:'2022-01-22',title:'創建此項目',user:'Perry committed 2022/01/22 20:46'},
                {time:'2022-01-23',title:'完成圖表頁',user:'Perry committed 2022/01/22 20:46'},
                {time:'2022-01-24',title:'完成拖曳頁',user:'Perry committed 2022/01/22 20:46'},
                {time:'2022-01-25',title:'完成佈局檔',user:'Perry committed 2022/01/22 20:46'},
            ]
        }
    }
}
</script>
<style scoped>
    /deep/.el-timeline-item__timestamp{
        text-align: left;
    }
    .card_content{
        text-align: left;
        padding-top: 1%;
    }
    .card_title{
        font-weight: 600;
    }
    .card_text{
        font-weight: 500;
        color: #303133;;
    }
    /deep/.el-card__body{
        padding:20px 10px 10px 20px;
    }
</style>
