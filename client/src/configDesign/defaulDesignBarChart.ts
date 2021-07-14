import {IBarChart} from "@/api/types";
import i18n from "@/i18n";

//Bar01 ' +
export const defaultBarChartInitialCurrentLossesQtyByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar01 ' + i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.serieName1`) + '', i18n.t(`trend.BarChartInitialCurrentLossesQtyByAreas.serieName2`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}

//'Bar02 ' +
export const defaultBarChartInitialCurrentLossesPriceByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar02 ' + i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.serieName1`) + '', i18n.t(`trend.BarChartInitialCurrentLossesPriceByAreas.serieName2`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}

//'Bar03 ' +
export const defaultBarChartMeasurePointStatusByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar03 ' + i18n.t(`trend.BarChartMeasurePointStatusByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: 'Total', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName1`) + '', i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName2`) + '', i18n.t(`trend.BarChartMeasurePointStatusByAreas.serieName3`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}

//'Bar04 ' +
export const defaultBarChartMeasurePointInAlarmByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar04 ' + i18n.t(`trend.BarChartMeasurePointInAlarmByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartMeasurePointInAlarmByAreas.serieName1`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}

//'Bar05 ' +
export const defaultBarChartFonctionNotLinkedByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar05 ' + i18n.t(`trend.BarChartFonctionNotLinkedByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartFonctionNotLinkedByAreas.serieName1`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}

//'Bar06 ' +
export const defaultBarChartProjectStatusByAreas: IBarChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Bar06 ' + i18n.t(`trend.BarChartProjectStatusByAreas.title`) + '',
        textStyle: {
            fontSize: 14,
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
                fontSize: 14,
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
        right: "6%",
        bottom: "1%"
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        width: "90%",
        height: "70%"
    },
    serieLabelShow: true,
    yAxisSplitNumber: 5,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [i18n.t(`trend.BarChartProjectStatusByAreas.serieName1`) + '',i18n.t(`trend.BarChartProjectStatusByAreas.serieName2`) + '',i18n.t(`trend.BarChartProjectStatusByAreas.serieName3`) + ''],
    xAxisText: [],
    series: [
        { Value: [], itemStyle: { color: 'blue' } },
        { Value: [], itemStyle: { color: 'red'  } },
        { Value: [], itemStyle: { color: 'green'} },
    ],
}
