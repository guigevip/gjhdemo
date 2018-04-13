//危险区域统计柱状图
var areaChart = echarts.init(document.getElementById('area-bar'));
var areaOption = {
    title: {
        text: '危废区域数据统计',
        textStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 18
        },
        subtext: '2017 6 1 - 2017 9 30',
        subtextStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 12
        }
    },
    tooltip : {
        trigger: 'axis',
        formatter: "{b} {c}万吨",
        axisPointer : {
            type : 'shadow'
        }
    },
    grid: {
        left: 0,
        right: 0,
        bottom: '2%',
        containLabel: true
    },
    itemStyle: {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#3b84fc'
                }, {
                    offset: 1, color: '#01cdfe'
                }],
                globalCoord: false
            }
        }
    },
    xAxis: {
            type: 'category',
            data: ['福田', '宝安', '龙华', '南山', '龙岗', '罗湖', '盐田', '坪山', '光明', '大鹏'],
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
            }
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
         max: 6,
         interval: 1
    },
    series : [
        {
            name:'危险数据统计',
            type:'bar',
            barWidth: '50%',
            data:[
                3.14,
                4.13,
                4.24,
                3.69,
                {
                    value: 5.33,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            fontFamily: 'Microsoft YaHei [Regular]',
                            color: '#FFFFFF'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#08d1fb'
                                }, {
                                    offset: 1, color: '#3cfc74'
                                }],
                                globalCoord: false
                            }
                        }
                    }
                },
                2.35,
                2.89,
                4.69,
                5.22,
                3.94
            ]
        }
    ]
 };
 areaChart.setOption(areaOption);