<template>
    <div class="menuNav d-flex flex-column">
        <div class="logo" @click="$router.push('/')">
            <div class="logoarea">              
                <i class="el-icon-eleme logo-icon"></i>
                    <span v-if="!IsCollapse">Perry</span> 
            </div>
        </div>
        <el-menu class="el-menu-vertical-demo menu" :collapse="IsCollapse" :collapse-transition='false'>
            <el-menu-item index="1" @click="$router.push('/')">
                <i class="el-icon-picture menu-item" ></i>
                <span slot="title" class="menu-item">Chart.js</span>
            </el-menu-item>
             <el-menu-item index="2"  @click="$router.push('/draggable')">
                <i class="el-icon-copy-document menu-item"></i>
                <span slot="title" class="menu-item">Draggable.js</span>
            </el-menu-item>
            <el-submenu index="3" data-toggle="tooltip" data-placement="right" title="Excel">
                <template slot="title">
                    <i class="el-icon-document menu-item"></i>
                    <span class="menu-item">Excel</span>
                </template>
                <el-menu-item-group class="excelitemMenu">
                    <el-menu-item index="3-1" @click="$router.push('/Excel')" class="excelitem">import Excel</el-menu-item>
                    <el-menu-item index="3-2" @click="$router.push('/exportexcel')" class="excelitem">export Excel</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
             <el-menu-item index="4"  @click="$router.push('/LazyLoading')">
                <i class="el-icon-refresh-right menu-item"></i>
                <span slot="title" class="menu-item">LazyLoading</span>
            </el-menu-item>
            <el-menu-item index="5"  @click="$router.push('/AOS')">
                <i class="el-icon-video-play menu-item"></i>
                <span slot="title" class="menu-item">AOS.js</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default{
    name:"menuNav",
    data(){
        return{
            isCollapse:false
        }
    },
    computed:{
        IsCollapse(){
            return this.$store.state.CollapseModules.isCollapse;
        },
    }
}
</script>
<style scoped>
    .logo{
        height: 10%;
        width: auto;
    }
    .logoarea:hover{
        background-color: rgb(116, 148, 241);
    }
    .logo-icon{
        font-size: 24px;
    }
    .logoarea{
        min-width: 100%;
        height: 100%;
        background-color: white;
        padding: 10%;
        background-color: rgb(92, 128, 236);
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center; 
        align-items: center; 
    }
    .menuNav{
    }
    .menu{
        min-height: 91vh;
        height: auto;
        background-color: rgb(92, 128, 236);
        text-align: left;
    }
    .menu-item{
        color: white;
    }
    .menu-item:before{
        color: white;
    }
    .el-menu-item:focus{
        background-color: rgb(116, 148, 241);
    }
    .el-menu-item:hover{
        background-color: rgb(116, 148, 241);
    }
    .el-icon-picture:before {
        color: white;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    .el-icon-arrow-down{
        color: white;
    }
    .excelitemMenu{
        background-color:rgb(92, 128, 236) ;
    }
    .excelitem{
        color: white;
    }
    .el-submenu .el-menu-item{
        min-width: auto;
        padding: 0;
    }
    .el-menu{
        border: none;
    }
    /deep/.el-submenu__title i{
        color: white;
    }
    /deep/.el-submenu__title:hover {
        background-color: rgb(116, 148, 241);
    }
    .el-menu-item.is-active {
        color: white;
    }
    .el-menu--collapse {
        width: 62px;
    }
</style>
