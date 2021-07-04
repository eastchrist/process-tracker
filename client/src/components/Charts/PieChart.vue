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
  import { IPieChart } from '@/api/types'

@Component({
  name: 'PieChart'
})
export default class extends mixins(ResizeMixin) {
  @Prop({ required: true }) private chartData!: IPieChart
  @Prop({ default: 'chart' }) private className!: string
  //@Prop({ default: '100%' }) private width!: string
  //@Prop({ default: '300px' }) private height!: string

  @Watch('chartData', { deep: true })
  private onChartDataChange(value: IPieChart) {
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
    this.setOptions( this.chartData )
  }
  private genSerie1Data() {
        const legendData = [];
        const seriesData = [];

        const serie1Name = this.chartData.serie1Name;
        const serie1Value = this.chartData.serie1Value;
        for (let index = 0; index < serie1Name.length; index++) {
              legendData.push( serie1Name[index] );
              seriesData.push({
                  name: serie1Name[index],
                  value: serie1Value[index]
              });
        }
        return {
            legendData: legendData,
            seriesData: seriesData
        };
  }


  private setOptions( chartData: IPieChart ) {
    if (this.chart) {
      const Serie1Data = this.genSerie1Data();
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
                tooltip: chartData.tooltip,
                legend: {
                  show: chartData.legend.show,
                  orient: chartData.legend.orient,
                  left: chartData.legend.left,

                  top: chartData.legend.top,
                  right: chartData.legend.right,
                  align: chartData.legend.align,
                  textStyle: chartData.legend.textStyle,
                  data: Serie1Data.legendData,
                  formatter: function(name: string) {
                    const valeur = chartData.serie1Value[chartData.serie1Name.indexOf(name)]
                    return '(' + valeur + ') ' + name ;
                  }
                  //
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
                series: [
                  {
                    type: 'pie',
                    name: 'chartData.serie.name',
                    radius: chartData.series.radius,
                    center: chartData.series.center,
                    legendHoverLink: chartData.series.legendHoverLink,
                    avoidLabelOverlap: chartData.series.avoidLabelOverlap,
                    stillShowZeroSum: chartData.series.stillShowZeroSum,
                    cursor: "move",
                    label: chartData.series.label,
                    data: Serie1Data.seriesData,
                    color: this.chartData.serie1Color,
                    animationEasing: chartData.series.animationEasing,
                    animationDuration: chartData.series.animationDuration,
                  }
                ],
              }
      )
    }
  }

}
</script>
