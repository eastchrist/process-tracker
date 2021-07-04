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
      import { IBarChart } from '@/api/types'
      const animationDuration = 3000

//export interface AIBarChartData {
//      title: string;
//      titleSub: string;
//      titleShow: boolean;
//      legendShow: boolean;
//      serieLabelShow: boolean;
//      serieStack: string; // 'Total'= On Top
//      xAxisRotation: number;
//      yAxisSplitNumber: number;
//      serieName: string[];
//      xAxisText: string[];
//      serie1Value: number[];
//      serie2Value: number[];
//      serie3Value: number[];
//      expectedData: number[];
//      actualData: number[];
//}

@Component({
      name: 'BarChart',
})
export default class extends mixins(ResizeMixin) {
      @Prop({ required: true }) private chartData!: IBarChart
      @Prop({ default: 'chart' }) private className!: string
      //@Prop({ default: '100%' }) private width!: string
      //@Prop({ default: '300px' }) private height!: string

      @Watch('chartData', { deep: true })
      private onChartDataChange(value: IBarChart) {
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

      private setOptions(chartData: IBarChart) {
            if (this.chart) {
                  this.chart.setOption(
                          {
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
                                    trigger: 'axis',
                                    axisPointer: {
                                          type: 'shadow'
                                    }
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
                                    left: chartData.grid.left,
                                    right: chartData.grid.right,
                                    bottom: chartData.grid.bottom,
                                    width: chartData.grid.width,
                                    height: chartData.grid.height,
                                    containLabel: true
                              },
                              xAxis: [
                                    {
                                          type: 'category',
                                          data: chartData.xAxisText,
                                          axisLabel: {
                                                interval: 0,
                                                rotate: chartData.xAxisRotation
                                          },
                                          axisTick: {
                                                alignWithLabel: true
                                          },

                                    }],
                              yAxis: [
                                    {
                                          type: 'value',
                                          splitLine: { show: true },
                                          axisTick: { show: false },
                                          splitNumber: chartData.yAxisSplitNumber,
                                          axisLine: { lineStyle: { color: '#90979c' } },
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
                                          type: 'bar',
                                          stack: chartData.serieStack,
                                          label: {
                                                show: chartData.serieLabelShow
                                          },
                                          emphasis: {
                                                focus: 'series'
                                          },
                                          yAxisIndex: 0,
                                          data: chartData.series[0].Value,
                                          itemStyle: chartData.series[0].itemStyle,
                                          animationDuration
                                    },
                                    {
                                          name: chartData.serieName[1],
                                          type: 'bar',
                                          stack: chartData.serieStack,
                                          label: {
                                                show: chartData.serieLabelShow
                                          },
                                          emphasis: {
                                                focus: 'series'
                                          },
                                          yAxisIndex: 0,
                                          data: chartData.series[1].Value,
                                          itemStyle: chartData.series[1].itemStyle,
                                          animationDuration
                                    },
                                    {
                                          name: chartData.serieName[2],
                                          type: 'bar',
                                          stack: chartData.serieStack,
                                          label: {
                                                show: chartData.serieLabelShow
                                          },
                                          emphasis: {
                                                focus: 'series'
                                          },
                                          yAxisIndex: 0,
                                          data: chartData.series[2].Value,
                                          itemStyle: chartData.series[2].itemStyle,
                                          animationDuration
                                    }
                              ],
                        }
                  )
            }
      }
}
</script>
