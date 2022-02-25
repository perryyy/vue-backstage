<template>
  <div>
    <el-tooltip class="item" effect="dark" content="全螢幕" placement="bottom" v-if="isFullscreen">
    <img src="@/assets/full-screen.png" class="screen-icon" alt="" @click="setScreenfull">
    </el-tooltip>
    <el-tooltip class="item" effect="dark" content="一般尺寸" placement="bottom"  v-else>
    <img src="@/assets/screen.png" class="screen-icon" alt="" @click="setScreenfull">
    </el-tooltip>
  </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen:true
    }
  },
  methods: {
    setScreenfull() {
      if (!screenfull.isEnabled) {
        return false;
      }
      this.isFullscreen  = !this.isFullscreen; 
      screenfull.toggle();
    }
  }
}
</script>

<style scoped>
.screen-icon{
    margin-top: 16%;
    height: 28px;
    width: 28px;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
}
</style>
