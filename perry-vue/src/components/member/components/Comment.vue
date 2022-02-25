<template>
    <div class="Comment">
        <div class="msg1"><message :username="Perry"/></div>
        <div class="msg1"><message :username="Marry"/></div> 
        <div class="car"> <carousel /></div>
    </div>
</template>
<script>
import message from './message.vue';
import carousel from './carousel.vue'
export default {
    data(){
        return{
            Perry:"Perry",
            Marry:"Marry"
        }
    },
    components:{
        message,
        carousel
    }
}
</script>
<style scoped>
    .Comment{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    .msg1{
        min-height: 30%;
        padding: 5px 10px;
    }
    .car{
        min-height: 40%;
    }
</style>