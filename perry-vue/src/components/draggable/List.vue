<template>
    <div class="list">
        <div class="list_card">
            <div class="list_card_header ">
                <!-- sticky-top -->
                <div class="title">
                    <div v-if="lists.name&&lists.hidden" ><strong >{{lists.name}}</strong></div>
                    <div v-else>
                        <input type="text" 
                            class="form-control" 
                            v-model="listnametmp"                
                            v-focus 
                            ref="listnametmp1"                          
                             @blur="blur(lists.list_ID, $event)"
                            @keyup.enter="$event.target.blur()"
                        >
                    </div>
                </div>
                <div class="setting">
                     <el-dropdown>
                        <span class="el-dropdown-link">
                            <i class="el-icon-more"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-edit" @click.native="renameList(lists.list_ID)">重新命名</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-delete" @click.native="dialogVisible = true" >刪除列表</el-dropdown-item>
                            <el-dropdown-item icon="el-icon-plus" @click.native="add_card(lists.list_ID)">新增卡片</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                        <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%">
                            <span>確定要刪除此列表嗎？</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click.native="del_List(lists.list_ID)">确 定</el-button>
                            </span>
                            </el-dialog>
                </div>
            </div>
            <div class="list_card_body">
                <card :lists="lists" ref="fafa"/>
            </div>
            <div class="list_card_footer">
                <div class="list_card_footer_content">
                    <button class="add_card btn-block"  @click="add_card(lists.list_ID)"><i class="el-icon-plus" ></i> 新增卡片</button>     
                </div>               
            </div>
        </div>

        
    </div>
</template>
<script>
import card from './Card.vue';
export default {
    name:'list',
    props:{
        lists:Object
    },
    data(){
        return{
            listnametmp:'',
            dialogVisible: false
        }
    },
    created(){
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    },
    methods:{
        blur(c,event){
            // console.log(event);
            if( this.listnametmp ){
                let data ={listID:c,listname:this.listnametmp};
                this.$emit("childEvent", data);
                this.hidden=true;
           }
           else{
               this.$emit("removeList", c);
           }
        },
        add_card(x){
            // console.log(x);
                this.$refs.fafa.test(x);
        },
       save_name(a,event){
            // console.log(event);
            if(this.listnametmp){
                    let data ={listID:a,listname:this.listnametmp};
                    this.$emit("childEvent", data);
                    this.hidden=true;
            }
       },
       del_List(b){
           this.$emit("removeList", b);
           this.dialogVisible = false;
       },
       renameList(q){   
            this.$emit("RenameList", q);
       }
    },
    components:{
        card
    }
}
</script>
<style scoped>
    .list{
        width: 240px;
        min-width: 240px;
        max-width: 240px;
        margin-bottom: 1.8%;
        height: 76vh;
    } 
    .list_card{
        margin:12% 3% 3%;
        background-color: #f0f2f5;
        border-radius: 5px;
    } 
    .list_card_header{
        display: flex;
        justify-content: space-between;
        padding: 5% 8% 0 8%;
        min-width: 100%;
        max-width: auto;
    }
    .list_card_body{
        min-height: 84%;
        width: 100%;
    }
    .list_card_footer{
        min-width: 100%;
        max-width: auto;
        max-height: 8%;
        padding-bottom: 3%;
        padding-left: 1%;
        padding-top: 2%;
        background-color: #f0f2f5;
        border-radius: 5px;
     }
    .footer_left{
         width: 100%; 
    }
    .add_card{
        border: none;
        width: 88%;
        background-color: #f0f2f5;
        text-align: left;
        color: #5E6C84;
    }
    .list_item{
        width: 100%;
        list-style: none;
        text-align: left;
        margin-left: 0; 
        padding-left: 2%;
        padding-right: 2%;
    }
    .list_item_content{
        margin-top: 5%;
         background-color: white;
         width: 100%;
    }
    .form-control{
        margin-top: -3%;
        height: auto;
        padding: 0;
        width: 80%;
    }
</style>
