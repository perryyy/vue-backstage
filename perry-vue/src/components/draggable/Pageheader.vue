<template>
    <div class="Pageheader  ">
        <div class="left d-flex justify-content-start">
            <div class="icon textcolor">
                <i class="el-icon-s-grid icon"></i>
            </div>
            <div class="logo textcolor">
                <strong>MiniTrello</strong>
            </div>
            <div class="dropArea d-flex justify-content-around " v-for="(item,index) in itemList" :key="index" v-if="IsVisible">
                <el-dropdown size="medium" class="dropdowmitem">
                    <el-button size="medium">
                        {{item.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item>蚵仔煎</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="add_btn" v-if="IsVisible">
                <button class="add">建立</button>
            </div>
        </div>
        <div class="right">
            <div class="right-menu d-flex justify-content-end">
                <div class="right-search" v-if="IsVisible">
                     <el-input
                        placeholder="搜尋"
                        prefix-icon="el-icon-search"
                        v-model="search">
                    </el-input>
                </div>
                <div class="right-info" v-if="IsVisible">
                    <i class="el-icon-info icon"></i>
                </div>
                <div class="right-bell" v-if="IsVisible">
                    <i class="el-icon-bell icon"></i>
                </div>
                <div class="right-user">
                    <el-avatar><strong class="user-color"> P </strong></el-avatar>
                </div>
            </div>  
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Pageheader',
    data(){
        return{
            search:'',
            itemList:[{name:'工作區'},{name:'最近的'},{name:'範本'}],
            isVisible:true
        }
    },
    computed:{
        IsVisible(){
            return this.$store.state.CollapseModules.itemVisible;
        },
    },
}
</script>
<style scoped>
    .Pageheader{
        padding: 10px 0px 0 20px;
        height: 10vh;
        display: flex;
        width: 99.9%;
    }
    .textcolor{
        color: 	#6C6C6C;
    }
    .dropArea{
        margin-left: 2%;    
    }
    .el-button {
        background-color:#f0f2f5;
        border: none;
        color: #6C6C6C;
    }
    .el-button:hover {
        background-color:	#D0D0D0;
        color: #6C6C6C;
    }
    .logo{
        margin-left: 10px;
        font-size: 24px;
    }
    .right-search{
        height: 20px;
        margin-right: 5px;
    }
    .icon{
        font-size: 24px;
        cursor: pointer;
    }
    .right-info,.right-bell{
        margin:5px 8px;
        font-size: 24px;
        width: 2%;
        color:  #6C6C6C;  
    }
    .right-info:hover,.right-bell:hover{
        color: 	#4F4F4F;
    }
    .right-user{
        font-size: 14px;
        line-height: 14px;
        width: 6%;
    }
    .el-button--medium {
        padding: 10px 5px 10px 5px;
    }
    .add{
        height:30px;
        width: 60px;
        border-radius: 4px;
        margin-top: 5%;
        margin-left: 5%;
        border: none;
        color:  #6C6C6C;
        background-color: 	#E0E0E0;
        font-size: 16px;
        line-height: 16px;
        padding: 3px;
        margin-bottom: 2%;
    }
    .add:hover{
        color: white;
    }
    .user-color{
        color: black;
    }
    .dropflag{
        margin-left: 2%;
    }
    .left{
        height: auto;
        background-color:	#f7f5f5;
        width: 60%;
    }
    .right{
        width: 40%;
    }
     @media screen and (max-width: 700px) {
         
     }
</style>
