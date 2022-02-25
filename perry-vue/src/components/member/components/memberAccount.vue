<template>
    <div class="account">
        <div class="">
            <span class="account_title">Name</span><el-input v-model="account" placeholder="请输入内容" ></el-input>
        </div>
        <div class="account_item">
            <span class="account_title">Email</span><el-input v-model="email" placeholder="请输入内容"></el-input>   
        </div>
        <div class="account_btn">
            <el-button type="primary" @click.native="Update">Update</el-button>
        </div>
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
export default{
    data(){
        return{
            account:'',
            email:''
        }
    },
    computed: {
       ...mapGetters([
           'name'
       ])
    },
    created(){
        this.getuser();
    },
    methods:{
        Update(){
           this.$message({
            message: '修改成功',
            type: 'success'
            });
        },
        getuser() {
          this.account=this.name;
          this.email='Perry@test.com';
        }
    }
}
</script>
<style scoped>
    .account{
        margin-top: 5%;
        padding:0 2%;
        width: 100%;
        text-align: left;
    }
    .account_title{
        margin-top: 20px;
        font-weight: 600;
        color: #606266;
    }
    .account_item{
        margin-top: 2%;
    }
    /deep/.el-input__inner{
        height: 36px;
        line-height: 36px;
        padding: 0 10px;
        margin-top: 5px;
    }
    .account_btn{
        margin-top: 3%;
    }
    /deep/.el-button{
        padding: 8px 20px;
    }
</style>