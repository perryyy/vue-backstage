<template>
    <div class="exportExcel d-flex flex-column">
        <div class="exportExcel-header">
            <el-input v-model="filename" placeholder="請輸入文件名稱" class="filename"></el-input>    
            <el-button type="primary" class="outputBtn" align="center"  @click="exportExcel">下載</el-button>        
        </div>
        <div class="exportExcel-main">
             <el-table
                ref="multipleTable"
                id="out-table"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 99.9%"
                height="520"
                border
                highlight-current-row
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="50"
                align="center"
                >
                </el-table-column>
                <el-table-column
                label="日期"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
export default {
    name:"exportExcel",
    data(){
        return{
            filename:'',
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            multipleSelection: []
        }
    },
    methods:{
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
        },
        exportExcel() {
            require.ensure([], () => {
                const { export_json_to_excel } = require('../util/export2Excel');   
                const now_filename = this.filename+'.xlsx';
                const filterVal = ['date', 'name', 'address'];
                const now_header = ['日期', '姓名', '住址'];
                let list = JSON.parse(JSON.stringify(this.multipleSelection));
                const tabledata=this.formatJson(filterVal, list);
                export_json_to_excel(now_header, tabledata,this.filename);  
            })
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
}
</script>
<style scoped>
.exportExcel{
    background-color: 	#f7f5f5;
    padding:  10px 20px 0 10px;
    min-height: 93vh;
    width: 99.9%;
}
.exportExcel-header{
    display: flex;
    margin-top: 1%;
}
.exportExcel-main{
    margin-top: 1%;
}
.filename{
    width: 20%;
    height: 40px;
}
.outputBtn{
    width: 5%;
    height: 40px;
    text-align: center;
    padding: 0;
}
@media screen and (max-width: 700px) {
    .outputBtn{
        width: 10%;
        height: 40px;
        text-align: center;
        padding: 0;
    }
    .filename{
        width: 30%;
        height: 40px;
    }
}
</style>