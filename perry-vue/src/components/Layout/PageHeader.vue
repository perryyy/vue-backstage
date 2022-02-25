<template>
    <div class="pageheader d-flex justify-content-between">
        <div class="bookmark d-flex">
                <i class="el-icon-s-fold icon-collapse" :class="{ 'arrowTransform1': !result, 'arrowTransformReturn1': result}" @click="changeCollapse"></i>
                <div class="tabs">
                   <breadcrumb />
                    
                </div>
        </div>
        <div class="right-area d-flex justify-content-end">
            <div class="search_area"  v-if="IsVisible">
                <div class="search-box">
                    <input type="text" class="search-txt" placeholder="Search" v-model="selectOption"  @focus="showDropdown"  @blur="hideDropdown">
                    <a class="search-btn" href="#" >
                        <i class="el-icon-search"></i>
                    </a>  
                </div>  
                <div class="search-list" v-if="dropdownVisible">
                    <ul class="autocomplete-search-results-list" v-if="selectItems.length >=1">
                        <li 
                            class="autocomplete-search-result"
                            v-for="result in selectItems"
                            :key="result.itemname"
                            @click="hide()"
                            
                        >
                            <router-link :to="{path:result.RouterID}" class="search_content" >{{ result.itemname }}</router-link>                          
                        </li>
                        
                    </ul>
                    <ul class="autocomplete-search-results-list" v-else>
                        <li class="no_result">查無結果</li>
                    </ul>
                </div>
            </div>        
            <div class="full-screen" v-if="IsVisible">
                <screenfull id="screenfull"  />
            </div>
            <div class="username">
                <el-dropdown>
                <span class="el-dropdown-link">
                <el-avatar icon="el-icon-user-solid"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$router.push('/member')">個人檔案</el-dropdown-item>
                <el-dropdown-item divided @click.native="Logout()">登出</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
import screenfull from '../Screenfull/Screenfull.vue';
import breadcrumb from './component/breadcrumb.vue'
export default{
    name:"pageheader",
    data(){
        return{
            isCollapse: false,
            result:false,
            isVisible:true,
            selectOption:'',
            selectItem:[],
            dropdownVisible:false,
        }
    },
    methods:{
        changeCollapse(){
            this.result= !this.result;
            this.$store.dispatch('CollapseModules/changeisCollapse')
        },
        Logout(){
            let username ='';
            this.$store.dispatch('MemberDataModules/setUsername',username);
            this.$router.push("/Login");
        },    
        showDropdown(){
            this.dropdownVisible=true;
        }, 
        hideDropdown(){
        }, 
        hide(){
             this.dropdownVisible=false;
        },
        loadAll(){
            return[
                {"itemname":"Chart.js","RouterID":"/"},
                {"itemname":"Draggable.js","RouterID":"/draggable"},
                {"itemname":"Excel.js","RouterID":"/excel"},
                {"itemname":"ExportExcel.js","RouterID":"/exportexcel"},
                {"itemname":"AOS.js","RouterID":"/aOS"},
            ]
        },
        filterData(selectItem,newv){
           return selectItem.filter(item => {
               return item.itemname.toLowerCase().includes(newv.toLowerCase())
           })
        },

    },
    computed:{
        IsVisible(){
            return this.$store.state.CollapseModules.itemVisible;
        },
        selectItems(){
            if(this.selectOption.length===0){
               return[
                {"itemname":"Chart.js","RouterID":"/"},
                {"itemname":"Draggable.js","RouterID":"/draggable"},
                {"itemname":"Excel.js","RouterID":"/excel"},
                {"itemname":"ExportExcel.js","RouterID":"/exportexcel"},
                {"itemname":"AOS.js","RouterID":"/aOS"},
            ]
            }
            else {
                return this.selectItem.filter(item =>{
                    return item.itemname.toLowerCase().includes(this.selectOption.toLowerCase())
                })
            }
        }
    },
    components:{
        screenfull,
        breadcrumb
    },
    mounted(){
        this.selectItem=this.loadAll();
    },
    created(){
        // this.getData();
        // this.postData();
    },
}
</script>
<style scoped>
.pageheader{
    height: 7vh;
    display: flex;
    justify-content: center; 
    align-items: center;
    background-color: white;
}
.bookmark{
    width: 60%;
    text-align: left;
}
.right-area{
    width: 40%;
    padding-right: 10px;
}
.full-screen{
    width: 10%;
    margin: 0 0 1% 1%;
}
.username{
    width: 10%;
    margin-top: 1%;
}
.el-avatar--icon{
  font-size: 24px;
}
.el-avatar{
    height: 34px;
    width: 34px;
    line-height: 34px;
}
.screen-icon{
    margin-top: 10%;
    font-size: 32px;
    cursor: pointer;
}
.el-input__inner{
    height: 32px;
    line-height: 32px;
}
.icon-collapse{
    font-size: 30px;
    margin: 1%;
}
.arrowTransform1{
    cursor: pointer;
    transition: 1s;
    transform-origin: center;
    transform: rotateZ(0deg);
}
.arrowTransformReturn1{
    cursor: pointer;
    transition: 1s;
    transform-origin: center;
    transform: rotateZ(180deg);
}
.tabs{
    margin-top: 2%;
}
.search-box{
    background:	#f8f8ff;
    height: 38px;
    border-radius: 30px;
    padding: 8px 0;
    margin-top: 5px;
}
.search-box:hover > .search-txt{
    width: 120px;
    padding:0 10px;
}
.search-txt:focus{
    width: 120px;
    padding:0 10px;
}
.search-box:hover > .search-btn{
    background:#f8f8ff;
}
.search-btn{
    color:  #324157;
    float: right;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background:#f8f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    font-size: 16px;
    margin-top: -10px;
    text-decoration: none;
}
.search-txt{
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color:  #324157;
    transition: 1s;
    line-height: 20px; width: 120px;
    padding:0 10px;
}
.search_area{
    height: 30px;
    display: flex;
    flex-direction: column;
}
.search-list{
    background-color: #fff;
    height: 100%;
    width: inherit;
    z-index: 999;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-top: 3%;
}
.autocomplete-search-results-list{
    background-color:	#FCFCFC;
    list-style: none;
    border-radius: 4px;
    text-align: left;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    border:1px solid#abadad;
}
.autocomplete-search-result{
    padding: 8px;
}
.autocomplete-search-result:hover{
    background-color: #e8ecf3;
}
.search_content{
    text-decoration: none;
    color: #808283;
}
.no_result{
    text-decoration: none;
    color: #808283;
    text-align: center;
}
/deep/.el-input__inner{
     border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color:  #324157;
    transition: 1s;
    line-height: 20px;
    width: 0;
}
@media screen and (min-width: 768px) and (max-width: 1300px){
    .username{
        margin-right: 20px;
    }
    .search_area{
        margin-right: 10px;
    }
    .full-screen{
        margin-right: 10px;
    }
    .search-box{
        height: 32px;
    }
    .search-btn{
        height: 32px;
    }
    .search-txt{
        line-height: 18px;
    }
}
@media screen and (min-width: 480px) and (max-width: 700px){
    .username{
        margin-right: 20px;
    }
}
@media screen and (max-width: 480px){
    .username{
        margin-right: 20px;
    }
}

</style>