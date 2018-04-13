//危险废物类别分析饼状图
var dangerChart = echarts.init(document.getElementById('danger-pie'));
var dangerOption = {
    title: {
        text: '危险废物类别分析',
        textStyle: {
            color: '#FFFFFF',
            fontFamily: '黑体',
            fontSize: 18
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}:{c}%"
    },
    series : [
        {
            type: 'pie',
            roseType: 'radius',
            radius: ['20%', '65%'],
            center: ['50%', '65%'],
            selectedMode: 'single',
            data:[
                {value:47.5,name: 'HW22',itemStyle:{
                    normal:{
                        color: '#04C0FF'
                    }
                }},
                {value:14.2, name: 'HW17',itemStyle:{
                    normal:{
                        color: '#7403FF'
                    }
                }},
                {value:11.6, name: 'HW18',itemStyle:{
                    normal:{
                        color: '#B555F5'
                    }
                }},
                {value:10.3, name: 'HW34',itemStyle:{
                    normal:{
                        color: '#ED76DB'
                    }
                }},
                {value:3.5, name: 'HW01',itemStyle:{
                    normal:{
                        color: '#FF7F86'
                    }
                }},
                {value:2.6, name: 'HW46',itemStyle:{
                    normal:{
                        color: '#F3EF6B'
                    }
                }},
                {value:2.4, name: 'HW12',itemStyle:{
                    normal:{
                        color: '#F5AC76'
                    }
                }},
                {value:2.3, name: 'HW06',itemStyle:{
                    normal:{
                        color: '#ACFB46'
                    }
                }},
                {value:5.5, name: '其他',itemStyle:{
                    normal:{
                        color: '#46FBD3'
                    }
                }}
            ],
            label: {
                normal: {
                    formatter: "{b}:{c}%",
                    align: 'left',
                    fontFamily: 'Microsoft YaHei [Regular]',
                    color: '#FFFFFF',
                    fontSize: 14
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
dangerChart.setOption(dangerOption);