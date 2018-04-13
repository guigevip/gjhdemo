//信访数据分析饼状图
var petitionChart = echarts.init(document.getElementById('petition-pie'));
var petitionOption = {
    title: {
        text: '信访数据总览',
        textStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 18
        },
        subtext: '2017 6 1 - 2017 9 30',
        subtextStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 14
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: function(d) {
            return d.name+":"+d.value[0]+"条 "+d.value[1]+"%";
        }
    },
    series : [
        {
            type: 'pie',
            roseType: 'angle',
            radius : '65%',
            center: ['50%', '65%'],
            selectedMode: 'single',
            data:[
                {value:[265,10.0], name: '龙岗', itemStyle: {
                    normal: {
                        color: '#05d3ff'
                    }
                }},
                {value:[318,12.1], name: '光明新区', itemStyle: {
                    normal: {
                        color: '#ab05fc'
                    }
                }},
                {value:[198,7.5], name: '福田', itemStyle: {
                    normal: {
                        color: '#685dee'
                    }
                }},
                {value:[315,11.9], name: '坪山', itemStyle: {
                    normal: {
                        color: '#ed73dc'
                    }
                }},
                {value:[226,8.6], name: '盐田', itemStyle: {
                    normal: {
                        color: '#ff414d'
                    }
                }},
                {value:[209,7.9], name: '大鹏新区', itemStyle: {
                    normal: {
                        color: '#f4943f'
                    }
                }},
                {value:[189,7.2], name: '南山', itemStyle: {
                    normal: {
                        color: '#e6e143'
                    }
                }},
                {value:[367,13.9], name: '宝安', itemStyle: {
                    normal: {
                        color: '#9bfb2e'
                    }
                }},
                {value:[338,12.8], name: '龙华', itemStyle: {
                    normal: {
                        color: '#67fce5'
                    }
                }},
                {value:[213,8.1], name: '罗湖', itemStyle: {
                    normal: {
                        color: '#6bc8fc'
                    }
                }}
            ],
            label: {
                normal: {
                    formatter: function(d) {
                        return d.name+"\n"+d.value[0]+"条/"+d.value[1]+"%";
                    },
                    align: 'left',
                    fontFamily: 'Microsoft YaHei [Regular]',
                    color: '#FFFFFF',
                    fontSize: 12
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
petitionChart.setOption(petitionOption);