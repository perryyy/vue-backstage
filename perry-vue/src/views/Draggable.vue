<template>
    <div class="draggable">
        <div class="header ">
            <Pageheader />
        </div>
        <div class="main">
            <draggableIndex/>
        </div>
    </div>
</template>
<script>
import Pageheader from '../components/draggable/Pageheader.vue';
import draggableIndex from '../components/draggable/index.vue';
export default {
    name:"draggable",
    components:{
        Pageheader,
        draggableIndex
    }
}
</script>
<style scoped>
.header{
  background-color:	#f7f5f5;
  height: 10%;
  width: 99.9%;
}
.main{
  height: 83vh;
  background-color:	#FCFCFC;
}
</style>
