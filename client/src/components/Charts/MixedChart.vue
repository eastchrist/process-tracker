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
    import { IMixedChart } from '@/api/types'
    const animationDuration = 3000

@Component({
  name: 'MixedChart'
})
export default class extends mixins(ResizeMixin) {
    @Prop({ required: true }) private chartData!: IMixedChart
    @Prop({ default: 'chart' }) private className!: string
    //@Prop({ default: '100%' }) private width!: string
    //@Prop({ default: '300px' }) private height!: string

    @Watch('chartData', { deep: true })
    private onChartDataChange(value: IMixedChart) {
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

    private setOptions( chartData: IMixedChart ) {
        if (this.chart) {
            this.chart.setOption( {
                title: {
                    show: chartData.title.show,
                    text: chartData.title.title,
                    subtext: chartData.title.titleSub.title,
                    left: chartData.title.left,
                    top: chartData.title.top,
                    textStyle: chartData.title.textStyle,
                    subtextStyle: chartData.title.titleSub.textStyle,
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    show: chartData.legend.show,
                    orient: chartData.legend.orient,
                    left: chartData.legend.left,

                    top: chartData.legend.top,
                    right: chartData.legend.right,
                    align: chartData.legend.align,
                    textStyle: chartData.legend.textStyle,
                    data: chartData.serieName,
                    formatter: function(name: string) {
                        const indexSerie = chartData.serieName.indexOf(name)
                        if (chartData.series[indexSerie].Value.length == 0) {
                            return name ;
                        } else {
                            const valeur = chartData.series[indexSerie].Value.reduce((a, b) => a + b)
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
                    right: "6%",
                    bottom: "1%"
                },
                grid: {
                    //top: 10,
                    left: '3%',
                    right: '0%',
                    bottom: '10%',
                    width: "70%",
                    height: "70%",
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
                        type: 'line',
                        stack: 'total',
                        symbolSize: 10,
                        symbol: 'circle',
                        yAxisIndex: 1,
                        data: chartData.series[0].Value,
                        itemStyle: chartData.series[0].itemStyle,
                    },
                    {
                        name: chartData.serieName[1],
                        type: 'bar',
                        stack: chartData.serieStack,
                        barMaxWidth: 35,
                        barGap: '10%',
                        yAxisIndex: 0,
                        data: chartData.series[1].Value,
                        itemStyle: chartData.series[1].itemStyle,
                    },
                    {
                        name: chartData.serieName[2],
                        type: 'bar',
                        stack: chartData.serieStack,
                        barMaxWidth: 35,
                        barGap: '10%',
                        yAxisIndex: 0,
                        data: chartData.series[2].Value,
                        itemStyle: chartData.series[2].itemStyle,
                    },
                    {
                        name: chartData.serieName[3],
                        type: 'bar',
                        stack: chartData.serieStack,
                        barMaxWidth: 35,
                        barGap: '10%',
                        yAxisIndex: 0,
                        data: chartData.series[3].Value,
                        itemStyle: chartData.series[3].itemStyle,
                    },
                ]
            } )
        }
    }

}
</script>
