import {IPieChart} from "@/api/types";
import i18n from "@/i18n";

//'Pie01 ' +
export const defaultPieChartMeasurePointStatusByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        title: 'Pie01 ' + i18n.t(`trend.PieChartMeasurePointStatusByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartMeasurePointStatusByFactory.titleSub`) + '',
            textStyle: {
                fontSize: 14,
                color: "blue",
                fontWeight: 'normal',
                fontFamily: "Arial",
                fontStyle: "italic"
            },
        },
    },
    legend: {
        show: true,
        orient: "vertical",
        top: "0%",
        left: undefined,
        right: "2%",
        align: 'left',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,  //Whether to enable highlighting chart when legend is being hovered
        avoidLabelOverlap: true, //Whether to enable the strategy to avoid labels overlap. Defaults to be enabled, which will move the label positions in the case of labels overlapping
        stillShowZeroSum: true, //Whether to show sector when all data are zero
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 10,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartMeasurePointStatusByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartMeasurePointStatusByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartMeasurePointStatusByFactory.serieName3`) + '',
    ],
    serie1Value: [],
    serie1Color: ['green','red','orange'],
}

//'Pie02 ' +
export const defaultPieChartProjectStatusByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        title: 'Pie02 ' + i18n.t(`trend.PieChartProjectStatusByFactory.title`) + '',
        textStyle: {
            fontSize: 14,
            color: 'green',
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic",
        },
        left: "0%",
        top: "0%",
        titleSub: {
            title: i18n.t(`trend.PieChartProjectStatusByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 13,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectStatusByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectStatusByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectStatusByFactory.serieName3`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green'],
}

//'Pie03 ' +
export const defaultPieChartProjectAllTypeNumberByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        title: 'Pie03 ' + i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 13,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName3`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName4`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName5`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName6`) + '',
        i18n.t(`trend.PieChartProjectAllTypeNumberByFactory.serieName7`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green','yellow','orange','pink','blue'],
}

//'Pie04 ' +
export const defaultPieChartProjectAllInitialLossesByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        title: 'Pie04 ' + i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 13,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName3`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName4`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName5`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName6`) + '',
        i18n.t(`trend.PieChartProjectAllInitialLossesByFactory.serieName7`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green','yellow','orange','pink','blue'],
}

//'Pie05 ' +
export const defaultPieChartProjectRunningTypeNumberByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '300px',
    },
    title: {
        show: true,
        title: 'Pie05 ' + i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 13,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName3`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName4`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName5`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName6`) + '',
        i18n.t(`trend.PieChartProjectRunningTypeNumberByFactory.serieName7`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green','yellow','orange','pink','blue'],
}

//'Pie06 ' +
export const defaultPieChartProjectRunningInitialLossesByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        title: 'Pie06 ' +i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 10,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName3`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName4`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName5`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName6`) + '',
        i18n.t(`trend.PieChartProjectRunningInitialLossesByFactory.serieName7`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green','yellow','orange','pink','blue'],
}

//'Pie07 ' +
export const defaultPieChartProjectRunningCurrentLossesByFactory: IPieChart = {
    dimensions: {
        width: '100%',
        height: '100%',
    },
    title: {
        show: true,
        title: 'Pie07 ' + i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.title`) + '',
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
            title: i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.titleSub`) + '',
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
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            fontFamily: "Arial",
            fontStyle: "italic"
        }
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(50,50,50,0)',
        textStyle: {
            color: 'black',
        },
        borderWidth: 2 ,
        formatter: '{b} : {c} ({d}%)'
    },
    series: {
        radius: ["0%", "50%"],
        center: ['40%', '60%'],
        legendHoverLink: false,
        avoidLabelOverlap: true,
        stillShowZeroSum: true,
        animationEasing: 'cubicInOut',
        animationDuration: 2600,
        label: {
            show: true,
            position: 'outside',
            fontWeight: "bold",
            fontFamily: "Arial",
            fontSize: 13,
            overflow: "break",
        },
    },
    serie1Name: [
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName1`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName2`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName3`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName4`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName5`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName6`) + '',
        i18n.t(`trend.PieChartProjectRunningCurrentLossesByFactory.serieName7`) + '',
    ],
    serie1Value: [],
    serie1Color: ['red','blue','green','yellow','orange','pink','blue'],
}
