<template>
    <div class="bigCard">
        <draggable  class="card" group="test" animation="500">
            <li v-for="(item,index) in carditem" :key="index" class="card_title" >
                <div 
                    v-if="item.title" 
                    draggable="true"
                    loading="lazy"
                >
                <div  
                    @dragstart ="DragStart(item.card_ID)"
                    @dragend ="finish(item.card_ID)"
                    @click="showCardContent(item.card_ID)"
                >
                <div class="urgent"></div>
                {{item.title}},{{lists.list_ID}}
                </div>
                    
                </div> 
                <div v-else>
                    <input 
                        type="text" 
                        class="form-control" 
                        v-model="card_content" 
                        @blur="save_content(item.list_ID, $event)" 
                        @keyup.enter="$event.target.blur()"                    
                        v-focus 
                        ref="cardtmp"
                    >
                </div>
                <div class="mask" v-if="showModal" @click="showModal=false"></div>
                <div class="pop" v-if="showModal"> 
                    <button @click="showModal=false" class="btn"><i class="el-icon-close"></i></button>
                    <div class="pop-content d-flex flex-column">
                        <!-- title -->
                        <div class="pop-content-title">
                            <i class="el-icon-s-order pop-icon"></i>
                            <strong class="pop-content-title-content">{{now_content}}</strong> 
                            <p class="pop-content-title-list-name">目前在「早上」列表中</p>
                        </div>
                        <!-- tag -->
                        <div class="pop-content-tag">
                            <div class="pop-content-tag-title"><span>標籤</span></div>
                            <el-tag type="danger">急件</el-tag><i class="el-icon-plus pop-content-tag-icon"></i>
                        </div>
                        <!-- description -->
                        <div class="pop-content-description ">
                            <div class="d-flex flex-row">
                                <div class="pop-content-description-icon"><i class="el-icon-s-unfold"></i></div> 
                                <div class="pop-content-description-title"><span>描述</span></div>
                                <div class="pop-content-description-btn" v-if="isShowEdit"><el-tag type="info">編輯</el-tag></div>
                            </div>              
                            <div class="pop-content-description-textarea">
                                <el-input type="textarea" placeholder="新增更詳細的敘述"></el-input>
                            </div>
                        </div>
                        <!-- event -->
                        <div class="pop-content-event d-flex flex-column">
                            <div class="d-flex justify-content-start">
                                <div class="pop-content-event-icon"><i class="el-icon-s-promotion"></i></div> 
                                <div class="pop-content-event-title"><span>活動</span></div>
                                <div class="pop-content-event-btn" v-if="isShowDetails"><el-tag type="info" @click="showDetails">隱藏詳情</el-tag></div>
                                <div class="pop-content-event-btn" v-else><el-tag type="info" @click="showDetails">顯示詳情</el-tag></div>
                            </div>
                            <!-- 個人 -->
                            <div class="d-flex justify-content-start mt-2" v-if="isShowDetails">
                                <div class="pop-content-event-user-icon"><el-avatar> P </el-avatar></div> 
                                <div class="pop-content-event-textbox">
                                    <el-input
                                    placeholder="撰寫評論"
                                    clearable>
                                    </el-input>
                                </div>
                            </div>
                            <!-- 其他人 -->
                            <div class="d-flex justify-content-start mt-2" v-if="isShowDetails">
                                <div class="pop-content-event-user-icon"><el-avatar> {{item.createuser}} </el-avatar></div>
                                <div class="d-flex flex-column">
                                    <div class="d-flex flex-row ms-3 other">
                                        <strong>{{item.username}}</strong>
                                        <p>已將這張卡片新增到「<strong>{{lists.name}} </strong>」</p>
                                    </div>
                                    <div><small class="time ms-3">一小時前</small></div>    
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </draggable>
    </div>
</template>
<script>
import draggable from 'vuedraggable';
export default{
    name:"card",
    data(){
        return{
            cards:[
                {username:'perry',createuser:'p',card_ID:'A001',title:'12/23 FW: 每天晚上9點上床睡覺2',list_ID:'002'},
                {username:'jerry',createuser:'q',card_ID:'A002',title:'12/23 FW: 每天晚上8點上床睡覺1',list_ID:'001'},
                {username:'perry',createuser:'e',card_ID:'A003',title:'12/23 FW: 每天晚上10點上床睡覺1',list_ID:'001'},
                {username:'mark',createuser:'r',card_ID:'A004',title:'12/23 FW: 每天晚上11點上床睡覺1',list_ID:'001'},
                {username:'jerry',createuser:'t',card_ID:'A005',title:'12/23 FW: 每天晚上12點上床睡覺2',list_ID:'002'},
                {username:'perry',createuser:'g',card_ID:'A006',title:'12/23 FW: 每天晚上7點上床睡覺3',list_ID:'003'},
                {username:'mark',createuser:'g',card_ID:'A007',title:'12/23 FW: 每天晚上6點上床睡覺2',list_ID:'002'},
                {username:'mark',createuser:'b',card_ID:'A008',title:'12/23 FW: 每天晚上5點上床睡覺1',list_ID:'001'},
                {username:'mark',createuser:'b',card_ID:'A009',title:'12/23 FW: 每天晚上4點上床睡覺3',list_ID:'003'},
                {username:'jerry',createuser:'n',card_ID:'A010',title:'12/23 FW: 每天晚上2點上床睡覺4',list_ID:'004'},
                {username:'mark',createuser:'h',card_ID:'A011',title:'12/23 FW: 每天晚上1點上床睡覺4',list_ID:'004'},
                {username:'jerry',createuser:'i',card_ID:'A012',title:'12/23 FW: 每天晚上10點上床睡覺4',list_ID:'004'}, 
            ],
            card_content:'',
            showModal:false,
            newlist:this.lists,
            now_content:'',
            isShowDetails:true,
            isShowEdit:false
        }
    },
    props:{
        lists:Object,
        // card_card_ID:Number
    },
    components:{
        draggable
    },
      directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    },
    methods:{
        showCardContent(x){
            this.showModal=true;
            let data=this.cards.filter((item)=>{
                return item.card_ID===x
            });
            this.now_content=data[0].title;
        },
        DragStart(a){
            console.log('移動前');
            console.log(a);
        },
        finish(b){
            console.log('移動後');
            console.log(b);
        },
        test(x){
            let cardlen=this.cards.length+1;
            let newcardid = "A0"+cardlen;
            let data ={card_ID:newcardid,title:'',list_ID:x};
            this.cards.push(data);
        },
        blur(c,event){
            // console.log(event);
            if( this.card_content ){
                let data ={listID:this.listnametmp,listname:this.listnametmp};
                this.$emit("childEvent", data);
                this.hidden=true;
           }
           else{
               this.$emit("removeList", c);
           }
        },
        save_content(z,event){
            // console.log(z);
            if(this.card_content ){
                const len = this.cards.length - 1;
                this.cards.splice(len,1);
                let obj ={title:this.card_content,list_ID:z};
                // console.log(e);
                this.cards.push(obj);
                this.card_content='';
            }
            else{
                const len = this.cards.length - 1;
                this.cards.splice(len,1);
            }
        },
        showDetails(){
            this.isShowDetails= !this.isShowDetails;
        }
    },
    computed:{
        carditem(){
            return this.cards.filter((item)=>{
                return item.list_ID===this.lists.list_ID
            })
        }
    }
}
</script>
<style scoped>
    .bigCard{
        padding: 0 5px 0 0px;
    }
    .card{
        text-align: left;
        background-color: #f0f2f5;
        padding: 2% 3% 2% 2%;
        border: none;
        overflow:auto;
        max-height: 480px;
        overflow-x :hidden;
    }
    .card_title{
        background-color: white;
        width: 100%;
        list-style: none;
        text-align: left;
        margin-left: 0; 
        padding: 2%;
        margin-bottom: 3%;
        border-radius: 5px;
        font-size: 14px;     
        box-shadow:1px 1px 0px 0px #cccccc;
    }
    .mask {
        background-color: #000;
        opacity: 0.3;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1
    }
    .pop {
        background-color:#f4f5f7;     
        border-radius: 4px;
        position: fixed;
        top: 20px;
        left: 350px;
        min-width: calc(100% - 700px);
        max-height: auto;
        height:calc(100% - 110px);
        z-index: 2;
        margin: 50px auto;
    }
    .btn {
        margin-top: 5px;
        margin-right: 5px;
        border-radius:30px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0%,0%);
    }
    .btn:hover{
        background-color: lightgray;
    }
    .pop-content{
        margin-top: 5%;
    }
    .pop-content-title{
        width: 91%;
        margin: -20px 18px;
        padding: 8px;
        border-radius: 4px;
    }
    .pop-icon{
        margin-right: 5px;
        font-size: 16px;
    }   
    .pop-content-title-content{
        font-size: 16px;
    }
    .pop-content-title-list-name{
        margin-bottom: 0;
        margin-left: 3%;
        font-size: 4px;
        color:#6C6C6C;
    }
    .pop-content-tag{
       min-height: 15%;
       width: 91%;
       margin: 4% 2% 0 2.5%;
       padding: 1%;
       border-radius: 4px;
    }
    .pop-content-tag-title{
        width: 100%;
        height: 50%;
        font-size: 2px;
        color: #5e6c84;
    }
    .pop-content-tag-content{
        width: 100%;
        height: 50%;
    }
    .el-tag{
        height: 24px;
        padding: 2px 8px;
        line-height: 20px;
        margin-top: 0.5%;
    }
    .el-tag.el-tag--danger{
        background-color: #eb5a46;
        color: white;
    }
    .pop-content-tag-icon{
        height: 24px;
        margin-left: 1%;
        line-height: 20px;
        width: 24px;       
        padding: 2px 0 2px 4px ;
        background-color:	#F0F0F0;    
        border-radius: 4px;
        cursor: pointer;
    }
    .pop-content-description{
       min-height: 15%;
       width: 91%;
       margin: 1% 2% 0 2.5%;
       padding: 1%;
       border-radius: 4px;
    }
    .pop-content-description-title{
        font-size: 16px;
        margin-left: 1%;
    }
    .pop-content-description-icon{
        font-size: 16px;
    }
    .pop-content-description-btn{
        margin-left: 1%;
        height: 20px;
        cursor: pointer;
    }
    .pop-content-description-textarea{
        margin-top: 3%;
        max-height: 80px;
    }
    .pop-content-event{
       min-height: 260px;
       width: 91%;
       margin: 1% 2% 2% 2.5%;
       padding: 1%;
       border-radius: 4px;
    }
    .pop-content-event-title{
        font-size: 16px;
        margin-left: 1%;
        width: 90%;
    }
    .pop-content-event-icon{
        font-size: 16px;
    }
    .pop-content-event-btn{
        margin-left: 1%;
        height: 20px;
        cursor: pointer;
    }
    .el-avatar{
      width: 30px;
      height: 30px;
      line-height:30px;
      font-size: 12px;
    }
    .pop-content-event-textbox{
        margin-left: 2%;
    }
    .pop-content-event-user-icon{
        width: 5%;
        height: 5%;
    }
    .pop-content-event-textbox{
        width: 95%;
    }
    /deep/ .el-input__inner{
        height: 30px;
        line-height: 30px;
    }
    .other{
        height: 30%;
    }
    .time{
        height: 10%;
        line-height: 10px;
        font-size: 4px;
        color:	#9D9D9D;
    }
    .urgent{
        height: 8px;
        background-color: #EB5A46;
        border-radius: 4px;
        width: 40px;
        margin-bottom: 4px;
        margin-left: 2px;
    }
    ::-webkit-scrollbar {
        width: 8px;
        height: 3px;
    }   

    /*滑塊*/
    ::-webkit-scrollbar-thumb {
        background-color:#d1cece;
        border-radius: 10px;
    }

    /*滑道*/
    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #e6e4e4;
        padding-right: 1%;
    }
</style>
