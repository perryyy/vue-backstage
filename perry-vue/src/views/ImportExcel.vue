<template>
  <div class="Excel d-flex flex-column">
    <div class="top">
        <div class="uploadArea">
              <el-upload
                ref="upload"
                class="upload-demo"
                action="#"
                accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                multiple
                :limit="1"
                :auto-upload="false"
                :withCredentials="false"
                :on-change="loadFile"
              >
              <el-button  slot="trigger" size="mini" type="success" plain round class="choosefile" >選擇文件</el-button>
              </el-upload>
        </div>
    </div>
    <div class="bottom">
        <div class="daraArea">
          <div class="daraArea-content-null" v-if="ctrlnull">
            暫無數據
          </div>
          <div class="daraArea-content" v-else>
            <el-table
            :data="excelResult"
            border
            style="width: 100%"
            highlight-current-row
            height="400"
            >
            <el-table-column
              v-for="item of excelHeader"
              :prop="item"
              :label="item"
            >
            </el-table-column>
          </el-table>        
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx';
export default {
    name:"importExcel",
    data(){
      return{
        import_show:false,
        upload_file:'',
        excelData:[],
        ctrlnull:true,
        excelHeader:[],
        excelResult:[]
      }
    },
  methods:{
    handleUpload() {
      this.$refs['excel-upload-input'].click()
    },
    imports(){
      this.import_show=!this.import_show;
    },
    loadFile(file,fileList){
      this.excelHeader=[];
      this.excelResult=[];
      this.excelData=[];
      this.upload_file=[];
      this.upload_file=fileList[0].raw;
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.upload_file);
      reader.onload=ev=>{
        try{
          const f =ev.target.result;
          const workbook =XLSX.read(f,{type:"array"});
          const wsname = workbook.SheetNames[0];
          const ws =XLSX.utils.sheet_to_json(workbook.Sheets[wsname],{header:1,defval:"#"});
          this.excelData=ws;
          this.ctrlnull=false;
          this.excelHeader=this.excelData[0];
          const worksheet = workbook.Sheets[wsname];
          this.excelResult= XLSX.utils.sheet_to_json(worksheet);
        }
        catch(e){
          console.log(e);
          return false;
        }
      }
    },
  }
}
</script>
<style scoped>
.Excel{
  height: 93vh;
  background-color:		#FCFCFC;
}
.top{
  margin-top: 2%;
  min-height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom{
  margin-top:3%;
  width: 100%;
  height: 75%;
  padding: 0 1%;
}
.uploadArea{
  width: 30%;
  border-width:small;
  border-style:dashed;
  border-color:	#D0D0D0;
  border-radius: 8px;
  padding-left: 20px;
  min-height: 160px;
  min-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uploadArea_content{
  color:	#BEBEBE;
}
.daraArea-content-null{
   height: 60px;
    display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dfe6ec;
  color: #909399;
  border-left:none;
  border-right:none;
  font-weight:lighter ;
}
.daraArea-content{
  height: 60px;
  border: 1px solid #dfe6ec;
  color: #909399;
  border-left:none;
  border-right:none;
  font-weight:lighter ;
}
.excel-upload-input{
  display: none;
  z-index: -9999;
}
.choosefile{
  margin-left: -20%;
}
.btn-dwl{
  background-color:  rgb(92, 128, 236);
  border-color:  rgb(92, 128, 236);
}
 /* // 滚动条的宽度 */
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 8px;
    height: 6px;
  }
  /* // 滚动条的滑块 */
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
</style>