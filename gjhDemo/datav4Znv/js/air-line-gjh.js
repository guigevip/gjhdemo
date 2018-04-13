//空气质量统计曲线图
 var airChart = echarts.init(document.getElementById('air-line'));
 var airOption = {
     title: {
         text: '空气质量月度曲线',
         textStyle: {
             color: '#FFFFFF',
             fontFamily: '黑体',
             fontSize: 18
         }
     },
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             lineStyle: {
                 color: '#f2ec49'
             }
         }
     },
     grid: {
         show: false,
         top: '20%',
         bottom: '15%',
         width: '85%'
     },
     xAxis: {
         type: 'category',
         axisTick: false,
         axisLine: {
             lineStyle: {
                 color: '#82839d'
             }
         },
         axisLabel: {
             show: true,
             interval: 0,
             fontFamily: 'Microsoft YaHei [Regular]',
             color: '#FFFFFF'
         },
         data: [
             {value: '9.20'},
             {value: '9.25'},
             {value: '10.01'},
             {value: '10.05'},
             {value: '10.10'},
             {value: '10.20'},
             {value: '10.25'}
         ]
     },
     yAxis: {
         type: 'value',
         axisTick: false,
         axisLabel: {
             show: true,
             fontFamily: 'Microsoft YaHei [Regular]',
             color: '#FFFFFF'
         },
         axisLine: {
             show: false,
             onZero: false  
         },
         min: 0,
         max: 120,
         interval: 20
     },
     series: [{
         name: '宝安',
         type: 'line',
         data: [49, 31, 33, 42, 42, 37, 103],
         itemStyle: {
             normal: {
                 color: '#f2ec49'
             }
         },
         symbol: 'circle',
         symbolSize: 10
     },
     {
         name: '盐田',
         type: 'line',
         data: [70, 22, 38, 45, 40, 27, 68],
         itemStyle: {
             normal: {
                 color: '#07c8fd'
             }
         },
         symbol: 'circle',
         symbolSize: 10
     },
     {
         name: '龙华',
         type: 'line',
         data: [58, 33, 46, 45, 53, 36, 105],
         itemStyle: {
             normal: {
                 color: '#ef5861'
             }
         },
         symbol: 'circle',
         symbolSize: 10
     },
     {
         name: '南山',
         type: 'line',
         data: [46, 24, 40, 41, 43, 37, 112],
         itemStyle: {
             normal: {
                 color: '#a6fb3f'
             }
         },
         symbol: 'circle',
         symbolSize: 10
     },
     {
         name: '罗湖',
         type: 'line',
         data: [64, 19, 42, 30, 35, 29, 95],
         itemStyle: {
             normal: {
                 color: '#a005fe'
             }
         },
         symbol: 'circle',
         symbolSize: 10
     }]
 };
 airChart.setOption(airOption);