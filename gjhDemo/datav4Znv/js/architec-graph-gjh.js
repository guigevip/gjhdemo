 //组织架构关系图表
 var architecChart = echarts.init(document.getElementById('architec-graph'));
 var architecOption = {
     title: {
        text: '组织架构',
        textStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 18
        }
     },
     legend: {
         left: 'right',
         top: 'bottom',
         orient: 'vertical',
         align: 'left',
         textStyle: {
             color: '#FFFFFF'
         },
         data: [
         {
             name: '一期建设',
             icon: 'circle'
         }, 
         {
             name: '二期建设',
             icon: 'circle'
         },
         {
             name: '三期建设',
             icon: 'circle'
         } ]
     },
     series: [{
         type: 'graph',
         name: "组织架构",
         layout: 'force',
         symbol: 'circle',
         label: {
             normal: {
                 show: true
             }
         },
         force: {
             edgeLength: 85,  
             repulsion: 80
         },
         lineStyle: {
             normal: {
                 curveness: 0.3
             }
         },
         draggable: true,
         data: [ 
         {
             id: 1,
             category: 0,
             name: '城市\n立体感知',
             value: 20,
             symbolSize: 55
         },
         {
             id: 2,
             category: 1,
             name: '环保局',
             value: 20,
             symbolSize: 45
         },
         {
             id : 3,
             category : 2,
             name : '应急办',
             value : 20,
             symbolSize : 45
         },
         {
             id : 4,
             category : 2,
             name : '气象局',
             value : 20,
             symbolSize : 45
         },
         {
             id : 5,
             category : 2,
             name : '监察队',
             value : 20,
             symbolSize : 45
         },
         {
             id : 6,
             category : 3,
             name : '工商局',
             value : 20,
             symbolSize : 45
         },
         {
             id : 7,
             category : 3,
             name : '水务局',
             value : 20,
             symbolSize : 45
         },
         {
             id : 8,
             category : 3,
             name : '交通局',
             value : 20,
             symbolSize : 45
         },
         {
             id : 9,
             category : 3,
             name : '水源办',
             value : 20,
             symbolSize : 45
         },
         {
             id : 10,
             category : 3,
             name : '消防局',
             value : 20,
             symbolSize : 45
         },
         {
             id : 11,
             category : 3,
             name : '国土局',
             value : 20,
             symbolSize : 45
         }],
         categories: [
             {name: '城市立体感知', itemStyle: {
                 normal: {
                     color: '#fa6971'
                 }
             }},
             {name: '一期建设', itemStyle: {
                 normal: {
                     color: '#fea667'
                 }
             }},
             {name : '二期建设', itemStyle: {
                 normal: {
                     color: '#aa05ff'
                 }
             }},
             {name : '三期建设', itemStyle: {
                 normal: {
                     color: '#05d3ff'
                 }
             }}
         ],
         links: [
           {source: 0, target: 1},
           {source: 0, target: 2},
           {source: 0, target: 3},
           {source: 0, target: 4},
           {source: 0, target: 5},
           {source: 0, target: 6},
           {source: 0, target: 7},
           {source: 0, target: 8},
           {source: 0, target: 9},
           {source: 0, target: 10}
         ]
     }]
 };
 architecChart.setOption(architecOption);