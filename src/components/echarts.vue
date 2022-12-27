<!-- ECharts图表测试 -->
<template>
    <!-- 图表 -->
    <div class="vol-data">
      <div class="charts" style="width:'100%',height:'6.54rem'">
        <div class="charts-title">
          24小时内最高温度：99.99
        </div>
        <div id="myChart" :style="{width:'100%',height:'300px'}">
        </div>
      </div>
    </div>
</template>
   
<script>
import * as echarts from 'echarts'
export default {
  name: 'Bank',
  data () {
    return {
    }
  },
  mounted () {
    /*ECharts图表*/
    var myChart = echarts.init(document.getElementById('myChart'));
    myChart.setOption({
      xAxis: {
       type: 'category',
       data: ['0', '6H', '9H', '12H', '15H', '18H', '24H']
       },
       yAxis: {
           type: 'value'
       },
       series: [{
           data: [1, 3, 4, 7, 4, 6, 9],
           type: 'line'
      }]
     })

  },
  methods:{
  }
}



</script>