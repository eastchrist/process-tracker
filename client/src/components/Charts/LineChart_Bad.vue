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

@Component({
  name: 'LineChart'
})
export default class extends mixins(ResizeMixin) {

  @Prop({ required: true }) private chartData!: IBarChart
  @Prop({ default: 'chart' }) private className!: string
  //@Prop({ default: '100%' }) private width!: string
  //@Prop({ default: '350px' }) private height!: string

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
          xAxis: {
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              boundaryGap: false,
              axisTick: {
                  show: false
              }
          },
          grid: {
              left: 10,
              right: 10,
              bottom: 20,
              top: 30,
              containLabel: true
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross'
              },
              padding: 8
          },
          yAxis: {
              axisTick: {
                  show: false
              }
          },
          legend: {
              data: ['expected', 'actual']
          },
          series: [
              {
                  name: 'expected',
                  itemStyle: {
                      color: '#FF005A',
                      lineStyle: {
                          color: '#FF005A',
                          width: 2
                      }
                  },
                  smooth: true,
                  type: 'line',
                  data: [100, 120, 161, 134, 105, 160, 165],
                  animationDuration: 2800,
                  animationEasing: 'cubicInOut'
              },
              {
                  name: 'actual',
                  smooth: true,
                  type: 'line',
                  itemStyle: {
                      color: '#3888fa',
                      lineStyle: {
                          color: '#3888fa',
                          width: 2
                      },
                      areaStyle: {
                          color: '#f3f8ff'
                      }
                  },
                  data: [120, 82, 91, 154, 162, 140, 145],
                  animationDuration: 2800,
                  animationEasing: 'quadraticOut'
              }]
      } )
    }
  }
}
</script>
