<template>
    <div class="showData">
        <el-tabs v-model="activeName">
        <el-tab-pane label="Comment" name="Comment"><Comment/></el-tab-pane>
        <el-tab-pane label="Timeline" name="Timeline"><timeline/></el-tab-pane>
        <el-tab-pane label="Account" name="Account">
            <memberaccount/>
        </el-tab-pane>
  </el-tabs>
    </div>
</template>
<script>
import memberaccount from './components/memberAccount.vue';
import timeline from './components/TimeLine.vue';
import Comment from './components/Comment.vue';
export default {
    data(){
        return{
            activeName: 'Comment'
        }
    },
    components:{
        memberaccount,
        timeline,
        Comment,
    },
    methods: {
     
    }
}
</script>
<style scoped>
    @media screen and (max-width: 800px) {
        .showData{
            padding: 0 5px;
        }
    }
</style>