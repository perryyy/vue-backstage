<template>
    <div class="rate">
        <el-rate
        v-model="value"
        >
        </el-rate>
    </div>
</template>
<script>
export default{
    data(){
        return{
            value: null
        }    
    },
    methods: {
    
    }
}
</script>
<style scoped>
    .rate{
        margin-top: 20%;
        display: flex;
        justify-content: center; 
        align-items: center; 
    }
    /deep/.el-rate__icon{
        font-size: 24px;
    }
</style>
