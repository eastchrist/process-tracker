import {IBarAndMixeChart} from "@/api/types";
import i18n from "@/i18n";

//Bar01 ' +
export const defaultBarChartInitialCurrentLossesQtyByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar01 ' + i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.serieName1`) + '', i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.serieName2`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [20, 0],
                color: 'blue',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [20, 0],
                color: 'red',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [20, 10],
                color: 'green',
                rotate: 45,
            }
        }
    ],
}

//'Bar02 ' +
export const defaultBarChartInitialCurrentLossesPriceByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar02 ' + i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.serieName1`) + '', i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.serieName2`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [20, 0],
                color: 'blue',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [20, 0],
                color: 'red',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [20, 0],
                color: 'green',
                rotate: 45,
            }
        }
    ],
}

//'Bar03 ' +
export const defaultBarChartMeasurePointStatusByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar03 ' + i18n.t(`trend.BarChartMeasurePointStatusByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartMeasurePointStatusByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top" ,//['50%', '50%'],
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName1`) + '', i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName2`) + '', i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName3`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: 'Total', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [10, 15],
                color: 'blue',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: 'Total', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [10, -5],
                color: 'red',
                rotate: 45,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: 'Total', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [10, -25],
                color: 'green',
                rotate: 45,
            }
        }
    ],
}

//'Bar04 ' +
export const defaultBarChartMeasurePointInAlarmByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar04 ' + i18n.t(`trend.BarChartMeasurePointInAlarmByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartMeasurePointInAlarmByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartMeasurePointInAlarmByAreas.serieName1`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [0, 0],
                color: 'blue',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [20, 0],
                color: 'red',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [20, 0],
                color: 'green',
                rotate: 0,
            }
        }
    ],
}

//'Bar05 ' +
export const defaultBarChartFonctionNotLinkedByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar05 ' + i18n.t(`trend.BarChartFonctionNotLinkedByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartFonctionNotLinkedByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartFonctionNotLinkedByAreas.serieName1`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [0, 0],
                color: 'blue',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [20, 0],
                color: 'red',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: undefined,
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [20, 0],
                color: 'green',
                rotate: 0,
            }
        }
    ],
}

//'Bar06 ' +
export const defaultBarChartProjectStatusByAreas: IBarAndMixeChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        text: 'Bar06 ' + i18n.t(`trend.BarChartProjectStatusByAreas.title`) + '',
        textStyle: {
            fontSize: 12,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        left: "0%",
        top: "0%",
        titleSub: {
            text: i18n.t(`trend.BarChartProjectStatusByAreas.titleSub`) + '',
            textStyle: {
                fontSize: 12,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        }
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 5,
        textStyle: {
            fontSize: 10,
            color: "black",
            fontWeight: 'normal',
            fontFamily: "Arial",
            fontStyle: "normal"
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            fontSize: 10,
            color: 'black',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        },
        borderWidth: 2 ,
        borderColor: '#333',
        formatter: undefined,
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        right: "2%",
        bottom: "5%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieLabelShow: true,
    seriesLabels: {
        fontSize: 10,
        position: "top",
        fontStyle: "normal",
        fontWeight: "normal",
        fontFamily: "Arial",
    },
    serieName: [i18n.t(`trend.BarChartProjectStatusByAreas.serieName1`) + '',i18n.t(`trend.BarChartProjectStatusByAreas.serieName2`) + '',i18n.t(`trend.BarChartProjectStatusByAreas.serieName3`) + ''],
    xAxisText: [],
    series: [
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: 0,
            itemStyle: {
                color: 'blue',
            },
            label: {
                offset: [0, 0],
                color: 'blue',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'red',
            },
            label: {
                offset: [0, 0],
                color: 'red',
                rotate: 0,
            }
        },
        {
            Value: [],
            type: 'bar',
            serieStack: '', // 'Total'= On Top
            yAxisIndex: 0,
            symbolSize: undefined,
            symbol: undefined,
            barGap: undefined,
            itemStyle: {
                color: 'green',
            },
            label: {
                offset: [0, 0],
                color: 'green',
                rotate: 0,
            }
        }
    ],
}
