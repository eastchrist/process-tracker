import {IMixedChart} from "@/api/types";
import i18n from "@/i18n";

//'Mix01 ' +
export const defaultMixedChartFactoryProjectAllNumberPrice: IMixedChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Mix01 ' + i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.title`) + '',
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
            text: i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.titleSub`) + '',
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
    yAxisSplitNumber: 9,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [ i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.serieName1`) + '',
        i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.serieName2`) + '',
        i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.serieName3`) + '',
        i18n.t(`trend.MixedChartFactoryProjectAllNumberPrice.serieName4`) + '',],
    xAxisText: [],
    series: [
        { Value: [],
            itemStyle: {
                color: 'orange',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            }, },
        { Value: [],
            itemStyle: {
                color: 'blue',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } },
        { Value: [],
            itemStyle: {
                color: 'green',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } },
        { Value: [],
            itemStyle: {
                color: 'red',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            }  }
    ],
}

//'Mix02 ' +
export const defaultMixedChartFactoryProjectRunningNumberPrice: IMixedChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        text: 'Mix02 ' + i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.title`) + '',
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
            text: i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.titleSub`) + '',
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
    yAxisSplitNumber: 9,
    xAxisRotation: 45,
    serieStack: '', // 'Total'= On Top
    serieName: [ i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.serieName1`) + '',
        i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.serieName2`) + '',
        i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.serieName3`) + '',
        i18n.t(`trend.MixedChartFactoryProjectRunningNumberPrice.serieName4`) + '',],
    xAxisText: [],
    series: [
        { Value: [],
            itemStyle: {
                color: 'orange',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } },
        { Value: [],
            itemStyle: {
                color: 'blue',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } },
        { Value: [],
            itemStyle: {
                color: 'green',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } },
        { Value: [],
            itemStyle: {
                color: 'red',
                label: {
                    show: true,
                    textStyle: { color: '#fff' },
                    position: 'insideTop',
                    formatter(p: any) { return p.value > 0 ? p.value : '' }
                }
            } }
    ],
}
