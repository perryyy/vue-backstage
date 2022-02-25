<template>
  <div id="app" class="app" >
    <div class="left">
      <menuNav></menuNav>
    </div>
    <div class="right">
        <div class="d-flex flex-column">
          <div class="header">
            <pageheader />
          </div>
          <div class="main">
            <router-view/>
          </div>       
        </div>
    </div>
  </div>
</template>
<script>
import menuNav from '../components/Layout/menuNav.vue';
import pageheader from '../components/Layout/PageHeader.vue';
export default {
  data(){
    return{
      screenWidth: document.body.clientWidth
    }
  },
  //如果葉面刷新 重取username 存放store
  created(){
    let username =localStorage.getItem('userId');
    if(username){
       this.$store.dispatch('MemberDataModules/setUsername',username);
    }
    else{
      return false;
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
        })()
    }
  },
  watch:{
    screenWidth(val){
        if(!this.timer){
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function(){
                that.timer = false
            },400)
        }
        if(this.screenWidth <= 1147){
          this.$store.dispatch('CollapseModules/collapseisTrue')
          if(this.screenWidth <= 800){
            this.$store.dispatch('CollapseModules/visibleisFalse')
          }
          else{
            this.$store.dispatch('CollapseModules/visibleisTrue')
          }
        }
        else{
          this.$store.dispatch('CollapseModules/visibleisTrue')
          this.$store.dispatch('CollapseModules/collapseisFalse')
        }
    }
  },
  components:{
    menuNav,
    pageheader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app{
  display: flex;
}
.left{
  max-width: 14%;
  background-color: rgb(92, 128, 236);
}
.right{
  flex-grow:1;
}
.header{
   width: 100%; 
}
.main{
   width: 100%;
}
</style>
