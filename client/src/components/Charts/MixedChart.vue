<template>
    <div :class="className" :style="{height: chartData.dimensions.height, width: chartData.dimensions.width}"/>
</template>

<script lang="ts">
    //import echarts, { EChartOption } from 'echarts'
    //import echarts from 'echarts'
    //import * as echarts from 'echarts/dist/echarts.js';
    import * as echarts from 'echarts'

    import { Component, Prop, Watch } from 'vue-property-decorator'
    import { mixins } from 'vue-class-component'
    import ResizeMixin from '@/components/Charts/mixins/resize'
    import { IBarAndMixeChart } from '@/api/types'
    const animationDuration = 3000

@Component({
  name: 'MixedChart'
})
export default class extends mixins(ResizeMixin) {
    @Prop({ required: true }) private chartData!: IBarAndMixeChart
    @Prop({ default: 'chart' }) private className!: string
    //@Prop({ default: '100%' }) private width!: string
    //@Prop({ default: '300px' }) private height!: string

    @Watch('chartData', { deep: true })
    private onChartDataChange(value: IBarAndMixeChart) {
        this.setOptions(value)
    }
    mounted() {
        this.$nextTick(() => {
            this.initChart()
        })
    }
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    }

    private initChart() {
        this.chart = echarts.init(this.$el as HTMLDivElement, 'macarons')
        this.setOptions(this.chartData)
    }

    private setOptions( chartData: IBarAndMixeChart ) {
        if (this.chart) {
            this.chart.setOption( {
                title: {
                    show: chartData.title.show,
                    text: chartData.title.text,
                    subtext: chartData.title.titleSub.text,
                    left: chartData.title.left,
                    top: chartData.title.top,
                    textStyle: chartData.title.textStyle,
                    subtextStyle: chartData.title.titleSub.textStyle,
                },
                tooltip: chartData.tooltip,
                legend: {
                    show: chartData.legend.show,
                    orient: chartData.legend.orient,
                    left: chartData.legend.left,

                    top: chartData.legend.top,
                    right: chartData.legend.right,
                    align: chartData.legend.align,

                    textStyle: chartData.legend.textStyle,
                    data: chartData.serieName,

                    itemGap: chartData.legend.itemGap,
                    itemHeight: chartData.legend.itemHeight,
                    itemWidth:  chartData.legend.itemWidth,
                    formatter: function(name: string) {
                        const indexSerie = chartData.serieName.indexOf(name)
                        if (chartData.series[indexSerie].Value.length == 0) {
                            return name ;
                        } else {
                            const valeur = chartData.series[indexSerie].Value.reduce(
                                function(accumulateur, valeurCourante, index, array){
                                    return accumulateur + valeurCourante;
                                }
                            );
                            return '(' + valeur + ') ' + name ;
                        }
                    }
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: false},
                        saveAsImage: {show: true}
                    },
                    right: chartData.toolbox.right,
                    bottom: chartData.toolbox.bottom,
                },
                grid: {
                    left: chartData.grid.left,
                    right: chartData.grid.right,
                    bottom: chartData.grid.bottom,
                    width: chartData.grid.width,
                    height: chartData.grid.height,
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: chartData.xAxisText,
                    axisLabel: {
                        interval: 0,
                        rotate: chartData.xAxisRotation
                    },
                    axisTick: {
                        show: false
                    },
                }],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: { show: true },
                        axisTick: { show: false },
                        splitNumber: chartData.yAxisSplitNumber,
                        axisLine: {
                            lineStyle: { color: '#90979c' } },
                        axisLabel: {
                            interval: 0,
                            formatter: '{value}',
                        },
                        splitArea: { show: false }
                    },
                    {
                        type: 'value',
                        splitLine: { show: true },
                        axisTick: { show: false },
                        splitNumber: chartData.yAxisSplitNumber,
                        axisLine: {
                            lineStyle: { color: '#90979c' } },
                        axisLabel: {
                            interval: 0,
                            formatter: '{value}',
                        },
                        splitArea: { show: false }
                    }
                ],
                series: [
                    {
                        name: chartData.serieName[0],
                        barGap: chartData.series[0].barGap,
                        type: chartData.series[0].type,
                        stack: chartData.series[0].serieStack,
                        symbolSize: chartData.series[0].symbolSize,
                        symbol: chartData.series[0].symbol,
                        label: {
                            show: chartData.serieLabelShow,
                            fontSize: chartData.seriesLabels.fontSize,
                            position: chartData.seriesLabels.position,
                            rotate: chartData.series[0].label.rotate,
                            fontStyle: chartData.seriesLabels.fontStyle,
                            fontWeight: chartData.seriesLabels.fontWeight,
                            fontFamily: chartData.seriesLabels.fontFamily,
                            offset: chartData.series[0].label.offset,
                            color: chartData.series[0].label.color,
                        },
                        emphasis: {
                            focus: 'series'
                        },
                        yAxisIndex: chartData.series[0].yAxisIndex,
                        data: chartData.series[0].Value,
                        itemStyle: chartData.series[0].itemStyle,
                    },
                    {
                        name: chartData.serieName[1],
                        barGap: chartData.series[1].barGap,
                        type: chartData.series[1].type,
                        stack: chartData.series[1].serieStack,
                        symbolSize: chartData.series[1].symbolSize,
                        symbol: chartData.series[1].symbol,
                        label: {
                            show: chartData.serieLabelShow,
                            fontSize: chartData.seriesLabels.fontSize,
                            position: chartData.seriesLabels.position,
                            rotate: chartData.series[1].label.rotate,
                            fontStyle: chartData.seriesLabels.fontStyle,
                            fontWeight: chartData.seriesLabels.fontWeight,
                            fontFamily: chartData.seriesLabels.fontFamily,
                            offset: chartData.series[1].label.offset,
                            color: chartData.series[1].label.color,
                        },
                        barMaxWidth: 35,
                        yAxisIndex: chartData.series[1].yAxisIndex,
                        data: chartData.series[1].Value,
                        itemStyle: chartData.series[1].itemStyle,
                    },
                    {
                        name: chartData.serieName[2],
                        barGap: chartData.series[2].barGap,
                        type: chartData.series[2].type,
                        stack: chartData.series[2].serieStack,
                        symbolSize: chartData.series[2].symbolSize,
                        symbol: chartData.series[2].symbol,
                        label: {
                            show: chartData.serieLabelShow,
                            fontSize: chartData.seriesLabels.fontSize,
                            position: chartData.seriesLabels.position,
                            rotate: chartData.series[2].label.rotate,
                            fontStyle: chartData.seriesLabels.fontStyle,
                            fontWeight: chartData.seriesLabels.fontWeight,
                            fontFamily: chartData.seriesLabels.fontFamily,
                            offset: chartData.series[2].label.offset,
                            color: chartData.series[2].label.color,
                        },
                        barMaxWidth: 35,
                        yAxisIndex: chartData.series[2].yAxisIndex,
                        data: chartData.series[2].Value,
                        itemStyle: chartData.series[2].itemStyle,
                    },
                    {
                        name: chartData.serieName[3],
                        barGap: chartData.series[3].barGap,
                        type: chartData.series[3].type,
                        stack: chartData.series[3].serieStack,
                        symbolSize: chartData.series[3].symbolSize,
                        symbol: chartData.series[3].symbol,
                        label: {
                            show: chartData.serieLabelShow,
                            fontSize: chartData.seriesLabels.fontSize,
                            position: chartData.seriesLabels.position,
                            rotate: chartData.series[3].label.rotate,
                            fontStyle: chartData.seriesLabels.fontStyle,
                            fontWeight: chartData.seriesLabels.fontWeight,
                            fontFamily: chartData.seriesLabels.fontFamily,
                            offset: chartData.series[3].label.offset,
                            color: chartData.series[3].label.color,
                        },
                        barMaxWidth: 35,
                        yAxisIndex: chartData.series[3].yAxisIndex,
                        data: chartData.series[3].Value,
                        itemStyle: chartData.series[3].itemStyle,
                    },
                ]
            } )
        }
    }

}
</script>
