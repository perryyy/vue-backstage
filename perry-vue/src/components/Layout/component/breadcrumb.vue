<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }" class="homepage">首頁</el-breadcrumb-item>
            <el-breadcrumb-item class="homepage">{{subRoute}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default{
    data(){
        return{
            breadList:[],
            subRoute:''
        }
    },
    methods:{
        isHome(route){
            return route.name === "Home"
        },
        getBreadList(){
            let matched =this.$route.matched;
            // console.log(matched);
            if(!this.isHome(matched[0])){
                matched =[{path:"/"}].concat(matched);
            }
            this.breadList=matched;
            // console.log(this.breadList);
            this.subRoute=this.breadList[1].meta.title;
        }
    },
    watch:{
        $route(){
            this.getBreadList();
        }
    },
    created(){
        this.getBreadList();
    },
}
</script>
<style scoped>
    .homepage{
        font-size: 16px;
        height: inherit;
    }
    /deep/.el-breadcrumb__inner.is-link{
        font-weight: normal;
    }
    .breadcrumb{
        padding: 0;
        background-color: white;
    }
</style>
