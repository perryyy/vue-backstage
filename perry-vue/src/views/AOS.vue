<template>
  <div class="AOS ">
      <div class="left_item"  data-aos="fade-up">
        <btnpack/>
      </div>
      <div class="right_item" data-aos="fade-left">
        <hoverpack />
      </div>
  </div>
</template>
<script>
import btnpack from '../components/aos/btn_pack.vue';
import hoverpack from '../components/aos/hover_pack.vue';
export default {
    name:"AOS",
    components:{
      btnpack,
      hoverpack
    }
}
</script>
<style scoped>
.AOS{
  min-height: 93vh;
  width: 100%;
  background-color:	#F5F5F5;
  display: flex;
  padding-bottom: 1.5%;
}
.left_item{
  width: 38%;
  background-color: white;
  padding: 1%;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  margin: 2% 0 0 2%;
}
.right_item{
  width: 60%;
  min-height: 550px;
  height: auto;
  margin: 2% 2% 0 1%;
}
 @media screen and (max-width: 992px) {
     .AOS{
       flex-direction: column;
     }
     .left_item{
        width: 96%;
        padding: 1%;
     }
     .right_item{
        width: 100%;
        padding-right: 2%;
     }
 }
</style>
