<template>
  <div class="Chart">
    <div class="Chart-left d-flex flex-column ">
        <div class="add">
          <h4 class="add_title">{{title}}</h4>
          <div class="row">
            <div class="col-xl-6 col-12">
                <p class="item-name">名稱</p>
                <el-input  type="text"  placeholder="请输入内容"  v-model="itemName"  maxlength="10"  show-word-limit></el-input>
            </div>
             <div class="col-xl-6 col-12">
                <p class="item-name">金額</p>
                <el-input  type="text"  placeholder="请输入金額"  v-model="itemAmount"></el-input>
             </div>
          </div>
          <div class="row mt-1">
            <div class="col-xl-6 col-12">
                <p class="item-name">類型</p>
                  <el-select v-model="itemCategory" placeholder="请選擇類型" style="width:100%" >
                  <el-option v-for="(item,index) in categoryOption" :key="index" :label="item" :value="item"></el-option>
                </el-select>
            </div>
             <div class="col-xl-6 col-12">
                <p class="item-name">日期</p>
                 <el-date-picker type="date" placeholder="选择日期" v-model="itemDate" style="width: 100%;" value-format="yyyy-MM-dd"></el-date-picker>
             </div>
          </div>
          <div class="row add_btn">
            <div class="col-auto">
            <el-button type="primary" @click.native="add()" v-if="title==='新增'">確定</el-button>
            <el-button type="primary" @click.native="edit()" v-else>確定</el-button>
            </div>
           
          </div>
        </div>
        <div class="item">
          <el-table
          :data="tableData"
          style="width: 99.9%"
          height="280"
          >
           <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            align="left"
            width="120"
            >
          </el-table-column>
          <el-table-column
            prop="name"
            label="名稱"
            align="left"
            width="100"
            >
          </el-table-column>
          <el-table-column
            prop="category"
            label="種類"
            align="left"
            width="80"
            >
          </el-table-column>
          <el-table-column
            prop="amount"
            label="金額"
            align="center"
            width="60"
            >
          </el-table-column>
          <el-table-column label="操作" align="center" width="120">
            <template slot-scope="scope">
              <el-button 
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>               
              <el-button
                size="mini"
                type="danger"
                @click="DeleteTmp(scope.$index, scope.row)"
              ><i class="el-icon-delete"></i></el-button>
            </template>
          </el-table-column>
          </el-table>
          <el-dialog
              title="提示"
              :visible.sync="dialogVisible"
              width="30%">
              <span>確定刪除嗎？</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleDelete()">确 定</el-button>
              </span>
          </el-dialog>
        </div>
    </div>
    <div class="Chart-right d-flex flex-column">
        <div class="Line">
          <LineChart class="lineimg" :categoryOption="categoryOption" :tableData="tableData" ref="lineImg"/>
        </div>
        <div class="Pie">
          <PieChart class="pieimg" :categoryOption="categoryOption" :tableData="tableData"  ref="pieImg"/>
        </div>
    </div>
  </div>
</template>
<script>
import PieChart from "../components/chart/Pie.vue";
import LineChart from '../components/chart/Line.vue';

export default {
    name:"Chart",
    data() {
      return {
          tableData: [
            {date: '2016-05-02',name: '玉米蛋餅',category:'伙食費',amount:30}, 
            {date: '2016-05-04',name: '儲蓄險',category:'保險',amount:50}, 
            {date: '2016-05-01',name: '租屋',category:'住宿費',amount:25},
            {date: '2016-05-03',name: '看電影',category:'娛樂費',amount:30},
            {date: '2016-05-03',name: '加油',category:'其他',amount:45},
            {date: '2016-05-03',name: '加油95',category:'其他',amount:55}
          ],  
          categoryOption:['伙食費','保險','住宿費','娛樂費','其他'],
          itemName:'',
          itemAmount:0,
          itemCategory:'',
          itemDate:'',
          dialogVisible:false,
          tmpRowid:'',
          title:'新增'
      }
    },
    methods:{
      handleEdit(e){
        this.itemName=this.tableData[e].name;
        this.itemDate=this.tableData[e].date;
        this.itemCategory=this.tableData[e].category;
        this.itemAmount=this.tableData[e].amount;
        this.tmpRowid=e;
        this.title='修改';
      },
       handleDelete() {
        let rowId=this.tmpRowid ;
        this.tableData.splice(rowId,1);
        this.dialogVisible=false;
        this.tmpRowid='';
      },
      add(){
        let data ={date:this.itemDate,name: this.itemName,category:this.itemCategory,amount:Number(this.itemAmount)};
        this.tableData.push(data);
        this.itemName='';
        this.itemDate='';
        this.itemCategory='';
        this.itemAmount=0;
      },
      DeleteTmp(b){
        this.dialogVisible=true;      
        this.tmpRowid=b;
      },
      edit(){
        let rowId=this.tmpRowid ;
        this.tableData[rowId].name=this.itemName;
        this.tableData[rowId].date=this.itemDate;
        this.tableData[rowId].category=this.itemCategory;
        this.tableData[rowId].amount=Number(this.itemAmount);
        this.tmpRowid='';
        this.title='新增';
        this.itemName='';
        this.itemDate='';
        this.itemCategory='';
        this.itemAmount=0;
        this.$refs.lineImg.updateData();
        this.$refs.pieImg.updateData();
      }
    },
    components:{
      PieChart,
      LineChart
    }
}
</script>
<style scoped>
.Chart{
  background-color:		#F5F5F5;
  min-height: 93vh;
  display: flex;
}
.Chart-left{
  padding: 10px;
  margin: 5px 0 10px 10px;
  width: 50%;
  border-radius: 4px;
}
.Chart-right{
  padding: 10px ;
  margin: 5px 0 10px 0;
  width: 50%;
  border-radius: 4px;
}
.item{
  padding: 10px 10px 20px 20px;
  border-radius: 4px;
  background-color:white;
  height: 55%;
  margin-top: 2%;
}
.add{
  padding: 20px 10px 20px 20px;
  border-radius: 4px;
  background-color:white;
  height: 45%;
}
.Line{
  padding: 20px 20px 20px 10px;
  border-radius: 4px;
  background-color:white;
  height: 50%;
}
.Pie{
  margin-top: 2%;
  padding: 20px 20px 20px 10px;
  border-radius: 4px;
  background-color:white;
  height: 50%;
}
.add_title{
  text-align: left;
  font-size: 20px;
  margin-top: -2%;
}
.item-name{
  text-align: left;
  font-size: 16px;
  margin-bottom:5px;
}
.form-control{
  border: 1px solid #DCDFE6;
}
.add_btn{
  margin-bottom: -2%;
  margin-top: 3%;
}
.lineimg{
  height: 240px;
  width: auto;
}
.pieimg{
  height: 235px;
  width: auto;
}
 /* // 滚动条的宽度 */
  /deep/ .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px; 
    height: 6px; 
  }
  /* // 滚动条的滑块 */
  /deep/ .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
   @media  (max-width: 1140px) {
     .Chart{
       flex-direction: column;
     }
     .Chart-left{
       width: 99%;
       margin: 0 0 0 10px;
     }
     .Chart-right{
       width: 99%;
       padding: 0 10px 20px 20px;
        margin: 0;
     }
     .add,.item{
       margin-right: 3%;
     }
     .Line, .Pie{
      width: 99%;
      padding: 10px 10px 20px 20px;
     }
     .action_btn{
       background-color: red;
     }
     .add_title{
        text-align: left;
        font-size: 20px;
        margin-top: 1px;
     }
     .add_btn{
       margin-bottom: 1px;
     }
   }
</style>
