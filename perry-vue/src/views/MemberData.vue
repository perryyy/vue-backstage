<template>
    <div class="memberdata">
        <div class="memberdata_left"><Memberleft/></div>
        <div class="memberdata_right"><Memberright/></div>
    </div>
</template>
<script>
import Memberleft from '../components/member/member_left.vue';
import Memberright from '../components/member/member_right.vue';
export default {
    name:"memberdata",
    components:{
        Memberleft,
        Memberright
    }
}
</script>
<style scoped>
    .memberdata{
        background-color:	#F5F5F5;
        min-height: 93vh;
        display: flex;
    }
    .memberdata_left{
        width: 25%;
        background-color: white;
        padding: 1%;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        margin: 2% 0 0 2%;
        max-height: 560px;
    }
    .memberdata_right{
        width: 75%;
        min-height: 550px;
        height: auto;
        background-color: white;
        margin: 2% 2% 2% 1%;
        padding: 1%;
    }
    @media screen and (max-width: 800px) {
        .memberdata{
            flex-direction: column;
        }
        .memberdata_left{
            width: 96%;
            min-height: 560px;
        }
        .memberdata_right{
            width: 96%;
            margin-left: 2%;
        }
    }
</style>