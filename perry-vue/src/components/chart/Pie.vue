<script>
import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props:{
    categoryOption:Array,
    tableData:Array
  },
  created(){
   this.calc();
  },
  data(){
    return{
      Result:[]
    }
  },
  watch:{
    tableData(newV,oldV){
      this.calc();
      this.updaterenderChart();
    }
  },
  mounted() {
    this.renderChart({
      labels: this.categoryOption,
      datasets: [
        {
          label: '花費',
          data: this.Result,
          backgroundColor: ["	#FFD2D2", "	#D2E9FF", "	#E8FFF5", "#FFFFAA", "	#E6E6F2	"], 
        },
      ],
    },
    {
      responsive: true,
      maintainAspectRatio: false,
    })
  },
  methods:{
      calc(){
        var finallyResult = [];  
        var nameContainer = {}; 
        this.tableData.forEach(item => {
          nameContainer[item.category] = nameContainer[item.category] || [];
          nameContainer[item.category].push(item);
        });

        // console.log(nameContainer);

        var categoryQty = Object.keys(nameContainer);
        categoryQty.forEach(nameItem => {
          let count = 0;
          nameContainer[nameItem].forEach(item => {
            count += item.amount; 
          });
          finallyResult.push({'name': nameItem, 'amount': count});
        });

        //console.log(finallyResult);

          this.Result=[];
        for (let i=0;i < finallyResult.length;i++){
          var a = Number(finallyResult[i].amount);
          // console.log(a);
          this.Result.push(Number(finallyResult[i].amount) );
        }
        // console.log(this.Result);
        },
      updaterenderChart(){
        this.renderChart({
          labels: this.categoryOption,
          datasets: [
            {
              label: '花費',
              data: this.Result,
              backgroundColor: ["	#FFD2D2", "	#D2E9FF", "	#E8FFF5", "#FFFFAA", "	#E6E6F2	"], 
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
        })
      },
      updateData(){
        this.calc();
        this.updaterenderChart();
      }
  }
}
</script>

