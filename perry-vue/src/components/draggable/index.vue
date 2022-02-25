<template>
  <div class="bigHome">
    <draggable class="home"  :list="lists" group="tasks"  animation="500">
   <list v-for="(item,index) in lists" 
   :key="index" 
   :lists="item" 
   @childEvent="parentEvent" 
   @removeList="removeList"
   @RenameList="RenameList"
   ref="addlistmethod"
   ></list>
   <i class="el-icon-circle-plus-outline add_btn" @click="addList()" ></i>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';
import list from './List.vue'
export default {
  name: 'Home',
  data(){
    return{
      lists:[{name:'早上',list_ID:'001',hidden:true},{name:'中午',list_ID:'002',hidden:true},{name:'晚上',list_ID:'003',hidden:true}]
    }
  },
  components:{
    list,
    draggable
  },

  methods:{
    addList(){
      const objLen=this.lists.length + 1;
      const new_list_id = "00"+objLen;
      let obj ={name:'',list_ID:new_list_id,hidden:true};
      this.lists.push(obj);   
      this.$refs.addlistmethod.haha;
    },
    parentEvent(e){
      // console.log(e);
      if(e.listname){
          let index = this.lists.findIndex(
          i => i.list_ID === e.listID );
          this.lists[index].name=e.listname;
          this.lists[index].hidden=true;
      }
      else{
        const len = this.lists.length - 1;
        this.lists.splice(len,1);
      }
    },
    removeList(b){
      let index = this.lists.findIndex(
        i => i.list_ID === b );
      this.lists.splice(index,1);
    },
    RenameList(c){
      let index = this.lists.findIndex(
        i => i.list_ID === c );
        console.log(this.lists[index]);
      this.lists[index].hidden=false;
    }
  }
}
</script>
<style scoped>
    .bigHome{
       padding-left: 20px;
    }
    .home{
      display: flex;
      height: inherit;
      overflow:auto;
      overflow-y :hidden;
    }
    ::-webkit-scrollbar {
        width: auto;
        height: 12px;
    }   

    /*滑塊*/
    ::-webkit-scrollbar-thumb {
        background-color:	#e6e4e4;
        border-radius: 30px;
    }

    /*滑道*/
    ::-webkit-scrollbar-track {
        border-radius: 30px;
        background-color: #F0F0F0;
        opacity: 1;
    }
    .add_btn{
      font-size: 50px;
      color:#f0f2f5;
      margin-top: 20%;
      margin-left: 1%;
      cursor: pointer;
    }
</style>
