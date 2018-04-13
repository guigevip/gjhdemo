//感知资源总览仪表盘
 var rsGaugeChart = echarts.init(document.getElementById('resource-gauge'));
 var rsGaugeOption = {
     series: [
         {
             name: '用户活跃度',
             type: 'gauge',
             title: {
                 show: true,
                 offsetCenter: [0, '90%'],
                 textStyle: {
                     color: '#FFFFFF',
                     fontFamily: 'ArialMT [Regular]',
                     fontSize: 12
                 }
             },
             radius: '80%',
             center: ['16.67%', '50%'],
             axisLine: {
                 show: true,
                 lineStyle: {
                     width: 3,
                     color:[[0.82, '#03a9ff'], [1, '#6884b0']]
                 }
             },
             //分隔线样式。
             splitLine: false,
             axisTick: false,
             pointer: false,
             detail: {
                 color: '#FFFFFF',
                 formatter: '{value}%',
                 offsetCenter: [0, 0],
                 fontSize: 12
             },
             data: [{value: 82, name: '用户活跃度'}]
         },
         {
             name: '设备在线率',
             type: 'gauge',
             title: {
                 show: true,
                 offsetCenter: [0, '90%'],
                 textStyle: {
                     color: '#FFFFFF',
                     fontFamily: 'ArialMT [Regular]',
                     fontSize: 12
                 }
             },
             radius: '80%',
             center: ['50%', '50%'],
             axisLine: {
                 show:true,
                 lineStyle: {
                     width: 3,
                     color:[[0.95, '#e73dd0'], [1, '#6884b0']]
                 }
             },
             //分隔线样式。
             splitLine: false,
             axisTick: false,
             pointer: false,
             detail: {
                 color: '#FFFFFF',
                 formatter: '{value}%',
                 offsetCenter: [0, 0],
                 fontSize: 12
             },
             data: [{value: 95, name: '设备在线率'}]
         },
         {
             name: '故障率',
             type: 'gauge',
             title: {
                 show: true,
                 offsetCenter: [0, '90%'],
                 textStyle: {
                     color: '#FFFFFF',
                     fontFamily: 'ArialMT [Regular]',
                     fontSize: 12
                 }
             },
             radius: '80%',
             center: ['83.33%', '50%'],
             axisLine: {
                 show:true,
                 lineStyle: {
                     width: 3,
                     color:[[0.04, '#e9e659'], [1, '#6884b0']]
                 }
             },
             //分隔线样式。
             splitLine: false,
             axisTick: false,
             pointer: false,
             detail: {
                 color: '#FFFFFF',
                 formatter: '{value}%',
                 offsetCenter: [0, 0],
                 fontSize: 12
             },
             data: [{value: 4, name: '故障率'}]
         }
     ]
 };
 rsGaugeChart.setOption(rsGaugeOption);