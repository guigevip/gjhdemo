 //实时空气质量
 var airMap;
 var geoCoordMap = {
     "光明":[113.8985814223,22.7763862799],
     "宝安":[113.8596926216,22.6622373782],
     "南山":[113.9575319595,22.5928906175],
     "福田":[114.0115707573,22.5475080054],
     "罗湖":[114.1173403528,22.5746242955],
     "龙华":[114.045422,22.696667],
     "盐田":[114.2515796042,22.6082125747],
     "龙岗":[114.246899,22.720974],
     "坪山":[114.350584,22.708881],
     "大鹏":[114.474621,22.597612]
 };
 var convertData = function (data) {
     var res = [];
     for (var i = 0; i < data.length; i++) {
         var geoCoord = geoCoordMap[data[i].name];
         if (geoCoord) {
             res.push({
                 name: data[i].name,
                 value: geoCoord.concat(data[i].value)
             });
         }
     }
     return res;
 };

 $.get('js/json/shenzhen.json', function (json) {
     echarts.registerMap('shenzhen', json);
     airMap = echarts.init(document.getElementById('air-map'));
     airMap.setOption({
         tooltip : {
             trigger: 'item',
             formatter: function(d) {
                 //修改数据
                 $('#aqi').text(d.value[2]);
                 $('#stain').text(d.value[3]);
                 $('#conc').text(d.value[4]);
             }
         },
         geo: {
             map: 'shenzhen',
             roam: false,
             zoom: 0.9,
             left: '5%',
             right: '5%',
             top: '2%',
             bottom: '4%',
             itemStyle: {
                 normal: {
                     areaColor: 'rgba(0, 0, 0, 0)',
                     borderColor: '#3c8cbe'
                 },
                 emphasis: {
                     areaColor: 'rgba(0, 0, 0, 0)'
                 }
             }
         },
         visualMap: {
             dimension: 5,
             color: ['#0D0D0D','#70309F','#E62111','#FF262D','#FFFB00','#00AF50'],
             categories: ['优','良','轻度污染','中度污染','重度污染','严重污染'],
             textStyle: {
                 color: '#FFFFFF'
             }
         },
         series: [{
             type: 'scatter',
             coordinateSystem: 'geo',
             data: convertData([
                 {name: "光明", value: ['59', 'PM2.5', '50', '良']},
                 {name: "宝安", value: ['54', 'PM2.5', '44', '良']},
                 {name: "南山", value: ['56', 'PM2.5', '46', '良']},
                 {name: "福田", value: ['55', 'PM2.5', '45', '良']},
                 {name: "罗湖", value: ['54', 'PM2.5', '44', '良']},
                 {name: "龙华", value: ['58', 'PM2.5', '49', '良']},
                 {name: "盐田", value: ['52', 'O₃', '124', '良']},
                 {name: "龙岗", value: ['53', 'PM2.5', '44', '良']},
                 {name: "坪山", value: ['60', 'PM2.5', '51', '良']},
                 {name: "大鹏", value: ['48', '无', '无', '优']}
             ]),
             label: {
                 normal: {
                     show: true,
                     formatter: '{b}',
                     position: 'right',
                     color: '#FFFFFF'
                 },
                 emphasis: {
                     show: true
                 }
             },
             itemStyle: {
                 normal: {
                     show: true,
                     color: '#FFFFFF'
                 },
                 emphasis: {
                     show: true
                 }
             }
         }]
     });
 });