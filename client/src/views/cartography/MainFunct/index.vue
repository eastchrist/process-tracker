<template>
    <div class="table-overview-fonction">
        <div class="wrapper">
            <div class="hea01">Header 1 Main Information</div>
            <div class="tab01">
                <carto-main-table :tableData=TableDataFactoryMain :currency=factoryInfo.currency ></carto-main-table>
            </div>
            <div class="tab02">
                <carto-main-info-table :tableData=TableDataFactoryInfo :currency=factoryInfo.currency ></carto-main-info-table>
            </div>

            <div class="hea02">Header 2 Initial and current losses Liters and Sheckels</div>
            <div class="bar01">
                <bar-chart :chart-data="BarChartInitialCurrentLossesQtyByAreas"></bar-chart>
            </div>
            <div class="bar02">
                <bar-chart :chart-data="BarChartInitialCurrentLossesPriceByAreas"></bar-chart>
            </div>

            <div class="hea03">Header 3 Measure points in alarms By factory and areas</div>
            <div class="pie01">
                <pie-chart :chart-data="PieChartMeasurePointStatusByFactory"></pie-chart>
            </div>
            <div class="bar03">
                <bar-chart :chart-data="BarChartMeasurePointStatusByAreas"></bar-chart>
            </div>
            <div class="bar04">
                <bar-chart :chart-data="BarChartMeasurePointInAlarmByAreas"></bar-chart>
            </div>
            <div class="tab08">
                <carto-fonction-list :tableData=TableDataFonctionToCheckByAreas :currency=factoryInfo.currency></carto-fonction-list>
            </div>
            <div class="tab07">
                <carto-fonction-list :tableData=TableDataFonctionNeverDoneByAreas :currency=factoryInfo.currency></carto-fonction-list>
            </div>
            <div class="tab05">
                <carto-fonction-list :tableData=TableDataFonctionAlarmByAreas :currency=factoryInfo.currency></carto-fonction-list>
            </div>

            <div class="hea04">Header 4 Global Overview Projects</div>
            <div class="pie02">
                <pie-chart :chart-data="PieChartProjectStatusByFactory"></pie-chart>
            </div>
            <div class="bar06">
                <bar-chart :chart-data="BarChartProjectStatusByAreas"></bar-chart>
            </div>

            <div class="hea05">Header 5 Project Overview info</div>
            <div class="tab03">
                <carto-project-priority-difficulty :tableData=TableDataFactoryProjectAllPriorityDifficulty :currency=factoryInfo.currency></carto-project-priority-difficulty>
            </div>
            <div class="tab04">
                <carto-project-priority-difficulty :tableData=TableDataFactoryProjectRunningPriorityDifficulty :currency=factoryInfo.currency></carto-project-priority-difficulty>
            </div>

            <div class="hea07">Header 7 Function never checked and have to be checked</div>
            <div class="hea08">Header 8 Function not linked and in alarm</div>
            <div class="tab06">
                <carto-fonction-list :tableData=TableDataFonctionNotLinkedByAreas :currency=factoryInfo.currency></carto-fonction-list>
            </div>



            <div class="hea06">Header 6 Project Overview info</div>
            <div class="mix01">
                <mixed-chart  :chart-data="MixedChartFactoryProjectAllNumberPrice"></mixed-chart>
            </div>
            <div class="mix02">
                <mixed-chart  :chart-data="MixedChartFactoryProjectRunningNumberPrice"></mixed-chart>
            </div>

            <div class="pie03">
                <pie-chart :chart-data="PieChartProjectAllTypeNumberByFactory"></pie-chart>
            </div>
            <div class="pie05">
                <pie-chart :chart-data="PieChartProjectRunningTypeNumberByFactory"></pie-chart>
            </div>
            <div class="pie04">
                <pie-chart :chart-data="PieChartProjectAllInitialLossesByFactory"></pie-chart>
            </div>
            <div class="pie06">
                <pie-chart :chart-data="PieChartProjectRunningInitialLossesByFactory"></pie-chart>
            </div>
            <div class="pie07">
                <pie-chart :chart-data="PieChartProjectRunningCurrentLossesByFactory"></pie-chart>
            </div>
            <div class="bar05">
                <bar-chart :chart-data="BarChartFonctionNotLinkedByAreas"></bar-chart>
            </div>



        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import 'echarts/theme/macarons.js' // Theme used in BarChart, LineChart, PieChart and RadarChart
    import BarChart from '@/components/Charts/BarChart.vue'
    import MixedChart from '@/components/Charts/MixedChart.vue'
    import PieChart from '@/components/Charts/PieChart.vue'

    import { getDBFactorys, defaultFactoryData, AIFactoryQuery, defaultFactoryQuery} from '@/api/factorys'
    import { IDataBaseFactoryData}  from '@/api/types'

    import { getDBTraceabilitys, defaultTraceabilityData, AITraceabilityQuery, defaultTraceabilityQuery } from '@/api/traceability'
    import {
        getFactoryProjectRunningTypeNumberAndInitialLossesAndCurrentLosses,
        getFactoryProjectAllAndProjectRunningNumberPrice,
        getFactoryTableDataFactoryMainAndMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses,

        getAreasMeasurePointStatusAndAlarmAndFonctionNotLinked,
        getAreasInitialCurrentLossesQtyAndPrice,

        getFactoryTableDataFactoryProjectAllPriorityDifficulty,
        getFactoryTableDataFonctionNotLinkedAndNeverDoneAndToCheckAndInAlarmByAreas,



    } from '@/utils/traceability'

    import CartoMainTableTest from '@/components/Tables/Carto/CartoMainTableTest.vue'
    import CartoMainTable from '@/components/Tables/Carto/CartoMainTable.vue'
    import CartoMainInfoTable from '@/components/Tables/Carto/CartoMainInfoTable.vue'
    import CartoProjectPriorityDifficulty from '@/components/Tables/Carto/CartoProjectPriorityDifficulty.vue'
    import CartoFonctionList from '@/components/Tables/Carto/CartoFonctionList.vue'

    import { IBarChart, IPieChart, IMixedChart, ITableDataFactoryMain, ITableDataFactoryInfo, ITableProjectPriorityDifficulty, ITableDataUiDesignedWithData } from '@/api/types'

    import {    defaultBarChartInitialCurrentLossesQtyByAreas, defaultBarChartInitialCurrentLossesPriceByAreas, defaultBarChartMeasurePointStatusByAreas,
                defaultBarChartMeasurePointInAlarmByAreas, defaultBarChartFonctionNotLinkedByAreas, defaultBarChartProjectStatusByAreas } from '@/configDesign/defaulDesignBarChart'

    import {    defaultMixedChartFactoryProjectAllNumberPrice, defaultMixedChartFactoryProjectRunningNumberPrice } from '@/configDesign/defaulDesignMixedChart'

    import {    defaultPieChartMeasurePointStatusByFactory, defaultPieChartProjectStatusByFactory, defaultPieChartProjectAllTypeNumberByFactory,
                defaultPieChartProjectAllInitialLossesByFactory, defaultPieChartProjectRunningTypeNumberByFactory, defaultPieChartProjectRunningInitialLossesByFactory,
                defaultPieChartProjectRunningCurrentLossesByFactory } from '@/configDesign/defaulDesignPieChart'

    import {    defaultTableDataFactoryMain, defaultTableDataFactoryInfo,
                defaultTableDataProjectAllPriorityDifficulty, defaultTableDataProjectRunningPriorityDifficulty,
                 } from '@/configDesign/defaulDesignTableNormal'

    import {    defaultFonctionAlarmByAreas, defaultFonctionNotLinkedByAreas, defaultFonctionNeverDoneByAreas, defaultFonctionToCheckByAreas} from '@/configDesign/defaulDesignTableUi'

    const TableDataFonctionAlarmByAreas: ITableDataUiDesignedWithData = defaultFonctionAlarmByAreas
    const TableDataFonctionNotLinkedByAreas: ITableDataUiDesignedWithData = defaultFonctionNotLinkedByAreas
    const TableDataFonctionNeverDoneByAreas: ITableDataUiDesignedWithData = defaultFonctionNeverDoneByAreas
    const TableDataFonctionToCheckByAreas: ITableDataUiDesignedWithData = defaultFonctionToCheckByAreas

    const BarChartInitialCurrentLossesQtyByAreas: IBarChart = defaultBarChartInitialCurrentLossesQtyByAreas
    const BarChartInitialCurrentLossesPriceByAreas: IBarChart = defaultBarChartInitialCurrentLossesPriceByAreas
    const BarChartMeasurePointStatusByAreas: IBarChart = defaultBarChartMeasurePointStatusByAreas
    const BarChartMeasurePointInAlarmByAreas: IBarChart = defaultBarChartMeasurePointInAlarmByAreas
    const BarChartFonctionNotLinkedByAreas: IBarChart = defaultBarChartFonctionNotLinkedByAreas
    const BarChartProjectStatusByAreas: IBarChart = defaultBarChartProjectStatusByAreas

    const MixedChartFactoryProjectAllNumberPrice: IMixedChart = defaultMixedChartFactoryProjectAllNumberPrice
    const MixedChartFactoryProjectRunningNumberPrice: IMixedChart = defaultMixedChartFactoryProjectRunningNumberPrice

    const PieChartMeasurePointStatusByFactory: IPieChart = defaultPieChartMeasurePointStatusByFactory
    const PieChartProjectStatusByFactory: IPieChart = defaultPieChartProjectStatusByFactory
    const PieChartProjectAllTypeNumberByFactory: IPieChart = defaultPieChartProjectAllTypeNumberByFactory
    const PieChartProjectAllInitialLossesByFactory: IPieChart = defaultPieChartProjectAllInitialLossesByFactory
    const PieChartProjectRunningTypeNumberByFactory: IPieChart = defaultPieChartProjectRunningTypeNumberByFactory
    const PieChartProjectRunningInitialLossesByFactory: IPieChart = defaultPieChartProjectRunningInitialLossesByFactory
    const PieChartProjectRunningCurrentLossesByFactory: IPieChart = defaultPieChartProjectRunningCurrentLossesByFactory

    @Component({
        components: {
            CartoMainTableTest,
            CartoMainTable,
            CartoMainInfoTable,
            CartoProjectPriorityDifficulty,
            CartoFonctionList,
            BarChart,
            MixedChart,
            PieChart
        },
    })

    export default class MainFonction extends Vue {
        @Prop({ default: '' }) private idFactory!: string

        private listQuery: AITraceabilityQuery = defaultTraceabilityQuery
        private factoryQuery: AIFactoryQuery = defaultFactoryQuery
        private factoryInfo: IDataBaseFactoryData = defaultFactoryData

        private TableDataFactoryMain: ITableDataFactoryMain = defaultTableDataFactoryMain
        private TableDataFactoryInfo: ITableDataFactoryInfo = defaultTableDataFactoryInfo
        private TableDataFactoryProjectAllPriorityDifficulty: ITableProjectPriorityDifficulty = defaultTableDataProjectAllPriorityDifficulty
        private TableDataFactoryProjectRunningPriorityDifficulty: ITableProjectPriorityDifficulty = defaultTableDataProjectRunningPriorityDifficulty

        private TableDataFonctionAlarmByAreas = TableDataFonctionAlarmByAreas
        private TableDataFonctionNotLinkedByAreas = TableDataFonctionNotLinkedByAreas
        private TableDataFonctionNeverDoneByAreas = TableDataFonctionNeverDoneByAreas
        private TableDataFonctionToCheckByAreas = TableDataFonctionToCheckByAreas

        private BarChartInitialCurrentLossesQtyByAreas = BarChartInitialCurrentLossesQtyByAreas
        private BarChartInitialCurrentLossesPriceByAreas = BarChartInitialCurrentLossesPriceByAreas
        private BarChartMeasurePointStatusByAreas = BarChartMeasurePointStatusByAreas
        private BarChartMeasurePointInAlarmByAreas = BarChartMeasurePointInAlarmByAreas
        private BarChartFonctionNotLinkedByAreas = BarChartFonctionNotLinkedByAreas
        private BarChartProjectStatusByAreas = BarChartProjectStatusByAreas

        private MixedChartFactoryProjectAllNumberPrice = MixedChartFactoryProjectAllNumberPrice
        private MixedChartFactoryProjectRunningNumberPrice = MixedChartFactoryProjectRunningNumberPrice

        private PieChartMeasurePointStatusByFactory = PieChartMeasurePointStatusByFactory
        private PieChartProjectStatusByFactory = PieChartProjectStatusByFactory
        private PieChartProjectAllTypeNumberByFactory = PieChartProjectAllTypeNumberByFactory
        private PieChartProjectAllInitialLossesByFactory = PieChartProjectAllInitialLossesByFactory
        private PieChartProjectRunningTypeNumberByFactory = PieChartProjectRunningTypeNumberByFactory
        private PieChartProjectRunningInitialLossesByFactory = PieChartProjectRunningInitialLossesByFactory
        private PieChartProjectRunningCurrentLossesByFactory = PieChartProjectRunningCurrentLossesByFactory

        async created() {
            this.listQuery.idFactory = this.idFactory
            this.factoryQuery.id = this.idFactory
            let { data } = await getDBFactorys(this.factoryQuery)
            this.factoryInfo = data.rows[0]

            data  = await getDBTraceabilitys(this.listQuery)


            const fonctionAlarmByAreas = getFactoryTableDataFonctionNotLinkedAndNeverDoneAndToCheckAndInAlarmByAreas( data.data,
                this.TableDataFonctionAlarmByAreas, this.TableDataFonctionNotLinkedByAreas, this.TableDataFonctionNeverDoneByAreas, this.TableDataFonctionToCheckByAreas,
                this.factoryInfo)
            this.TableDataFonctionAlarmByAreas = fonctionAlarmByAreas.tableDataFonctionAlarmByAreas
            this.TableDataFonctionNotLinkedByAreas = fonctionAlarmByAreas.tableDataFonctionNotLinkedByAreas
            this.TableDataFonctionNeverDoneByAreas = fonctionAlarmByAreas.tableDataFonctionNeverDoneByAreas
            this.TableDataFonctionToCheckByAreas = fonctionAlarmByAreas.tableDataFonctionToCheckByAreas

            const factoryProjectAllPriorityDifficulty = getFactoryTableDataFactoryProjectAllPriorityDifficulty( data.data, this.TableDataFactoryProjectAllPriorityDifficulty, this.TableDataFactoryProjectRunningPriorityDifficulty, this.factoryInfo)
            this.TableDataFactoryProjectAllPriorityDifficulty = factoryProjectAllPriorityDifficulty.tableDataFactoryProjectAllPriorityDifficulty
            this.TableDataFactoryProjectRunningPriorityDifficulty = factoryProjectAllPriorityDifficulty.tableDataFactoryProjectRunningPriorityDifficulty

            const factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses = getFactoryTableDataFactoryMainAndMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses( data.data,
                this.TableDataFactoryMain,
                this.TableDataFactoryInfo,
                this.PieChartMeasurePointStatusByFactory,
                this.PieChartProjectStatusByFactory,
                this.PieChartProjectAllTypeNumberByFactory,
                this.PieChartProjectAllInitialLossesByFactory,
                this.factoryInfo)
            this.TableDataFactoryMain = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.tableDataFactoryMain
            this.TableDataFactoryInfo = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.tableDataFactoryInfo
            this.PieChartMeasurePointStatusByFactory = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.PieChartMeasurePointStatusByFactory
            this.PieChartProjectStatusByFactory = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.PieChartProjectStatusByFactory
            this.PieChartProjectAllTypeNumberByFactory = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.PieChartProjectAllTypeNumberByFactory
            this.PieChartProjectAllInitialLossesByFactory = factoryMeasurePointStatusAndProjectStatusAndProjectAllTypeNumberAndProjectAllInitialLosses.PieChartProjectAllInitialLossesByFactory

            const factoryProjectAllAndProjectRunningNumberPrice = getFactoryProjectAllAndProjectRunningNumberPrice( data.data, this.MixedChartFactoryProjectAllNumberPrice, this.MixedChartFactoryProjectRunningNumberPrice, this.factoryInfo)
            this.MixedChartFactoryProjectAllNumberPrice = factoryProjectAllAndProjectRunningNumberPrice.MixedChartFactoryProjectAllNumberPrice
            this.MixedChartFactoryProjectRunningNumberPrice = factoryProjectAllAndProjectRunningNumberPrice.MixedChartFactoryProjectRunningNumberPrice

            const factoryPieChartProjectRunning = getFactoryProjectRunningTypeNumberAndInitialLossesAndCurrentLosses( data.data, this.PieChartProjectRunningTypeNumberByFactory, this.PieChartProjectRunningInitialLossesByFactory, this.PieChartProjectRunningCurrentLossesByFactory, this.factoryInfo)
            this.PieChartProjectRunningTypeNumberByFactory = factoryPieChartProjectRunning.PieChartProjectRunningTypeNumberByFactory
            this.PieChartProjectRunningInitialLossesByFactory = factoryPieChartProjectRunning.PieChartProjectRunningInitialLossesByFactory
            this.PieChartProjectRunningCurrentLossesByFactory = factoryPieChartProjectRunning.PieChartProjectRunningCurrentLossesByFactory

            const areaInitialCurrentLossesQtyAndPrice = getAreasInitialCurrentLossesQtyAndPrice( data.data, this.BarChartInitialCurrentLossesQtyByAreas, this.BarChartInitialCurrentLossesPriceByAreas, this.BarChartProjectStatusByAreas, this.factoryInfo)
            this.BarChartInitialCurrentLossesQtyByAreas = areaInitialCurrentLossesQtyAndPrice.BarChartInitialCurrentLossesQtyByAreas
            this.BarChartInitialCurrentLossesPriceByAreas = areaInitialCurrentLossesQtyAndPrice.BarChartInitialCurrentLossesPriceByAreas
            this.BarChartProjectStatusByAreas = areaInitialCurrentLossesQtyAndPrice.BarChartProjectStatusByAreas

            const areaMeasurePointStatusAndAlarmAndFonctionNotLinked = getAreasMeasurePointStatusAndAlarmAndFonctionNotLinked( data.data, this.BarChartMeasurePointStatusByAreas, this.BarChartMeasurePointInAlarmByAreas, this.BarChartFonctionNotLinkedByAreas, this.factoryInfo)
            this.BarChartMeasurePointStatusByAreas = areaMeasurePointStatusAndAlarmAndFonctionNotLinked.BarChartMeasurePointStatusByAreas
            this.BarChartMeasurePointInAlarmByAreas = areaMeasurePointStatusAndAlarmAndFonctionNotLinked.BarChartMeasurePointInAlarmByAreas
            this.BarChartFonctionNotLinkedByAreas = areaMeasurePointStatusAndAlarmAndFonctionNotLinked.BarChartFonctionNotLinkedByAreas

        }
    }
</script>
<style lang="scss" scoped>
    .table-overview-fonction {
        .wrapper{
            display:grid;
            grid-gap: 3px;
            grid-template-columns:repeat(12, minmax(100px, 1fr));
            //grid-template-rows: repeat(30, minmax(100px, 0.2fr));
            grid-template-rows: repeat(60, 100px);
            //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
            grid-template-areas:
                    "hea01   hea01   hea01   hea01   hea01   hea01   hea01   hea01   hea01   hea01   hea01   hea01"
                    "tab01   tab01   tab01   tab01   tab01   .       tab02   tab02   tab02   tab02   tab02   tab02"
                    "tab01   tab01   tab01   tab01   tab01   .       tab02   tab02   tab02   tab02   tab02   tab02"
                    "tab01   tab01   tab01   tab01   tab01   .       tab02   tab02   tab02   tab02   tab02   tab02"
                    "tab01   tab01   tab01   tab01   tab01   .       .       .       .       .       .       ."

                    "hea02   hea02   hea02   hea02   hea02   hea02   hea02   hea02   hea02   hea02   hea02   hea02 "
                    "bar01   bar01   bar01   bar01   bar01   .       bar02   bar02   bar02   bar02   bar02   bar02"
                    "bar01   bar01   bar01   bar01   bar01   .       bar02   bar02   bar02   bar02   bar02   bar02"
                    "bar01   bar01   bar01   bar01   bar01   .       bar02   bar02   bar02   bar02   bar02   bar02"

                    "hea03   hea03   hea03   hea03   hea03   hea03   hea03   hea03   hea03   hea03   hea03   hea03 "
                    "pie01   pie01   pie01   .       .       tab08   tab08   tab08   tab08   tab08   tab08   tab08"
                    "pie01   pie01   pie01   .       .       tab08   tab08   tab08   tab08   tab08   tab08   tab08"
                    ".       .       .       .       .       .       .       .       .       .       .       .    "
                    "bar03   bar03   bar03   bar03   .       tab07   tab07   tab07   tab07   tab07   tab07   tab07"
                    "bar03   bar03   bar03   bar03   .       tab07   tab07   tab07   tab07   tab07   tab07   tab07"
                    "bar03   bar03   bar03   bar03   .       tab07   tab07   tab07   tab07   tab07   tab07   tab07"
                    ".       .       .       .       .       .       .       .       .       .       .       .    "
                    "bar04   bar04   bar04   bar04   .       tab05   tab05   tab05   tab05   tab05   tab05   tab05"
                    "bar04   bar04   bar04   bar04   .       tab05   tab05   tab05   tab05   tab05   tab05   tab05"
                    "bar04   bar04   bar04   bar04   .       tab05   tab05   tab05   tab05   tab05   tab05   tab05"
                    ".       .       .       .       .       .       .       .       .       .       .       .    "

                    ".       .       .       .       .       .       .       .       .       .       .       .    "

                    "hea04   hea04   hea04   hea04   hea04   hea04   hea04   hea04   hea04   hea04   hea04   hea04"
                    "pie02   pie02   pie02   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06"
                    "pie02   pie02   pie02   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06"
                    ".       .       .       bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06"
                    ".       .       .       bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06   bar06"

                    "hea05   hea05   hea05   hea05   hea05   hea05   hea05   hea05   hea05   hea05   hea05   hea05"
                    "pie03   pie03   pie03   pie03   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"
                    "pie03   pie03   pie03   pie03   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"
                    "pie03   pie03   pie03   pie03   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"
                    "pie04   pie04   pie04   pie04   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"
                    "pie04   pie04   pie04   pie04   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"
                    "pie04   pie04   pie04   pie04   .       tab03   tab03   tab03   tab03   tab03   tab03   tab03"

                    "pie05   pie05   pie05   pie05   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"
                    "pie05   pie05   pie05   pie05   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"
                    "pie05   pie05   pie05   pie05   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"
                    "pie06   pie06   pie06   pie06   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"
                    "pie06   pie06   pie06   pie06   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"
                    "pie06   pie06   pie06   pie06   .       tab04   tab04   tab04   tab04   tab04   tab04   tab04"

                    "bar05   bar05   bar05   bar05   bar05   bar05   tab06   tab06   tab06   tab06   tab06   tab06"
                    "bar05   bar05   bar05   bar05   bar05   bar05   tab06   tab06   tab06   tab06   tab06   tab06"
                    "bar05   bar05   bar05   bar05   bar05   bar05   tab06   tab06   tab06   tab06   tab06   tab06"
                    "pie07   pie07   pie07   pie07   pie07   pie07   .       .       .       .       .       .    "
                    "pie07   pie07   pie07   pie07   pie07   pie07   .       .       .       .       .       .    "
                    "pie07   pie07   pie07   pie07   pie07   pie07   .       .       .       .       .       .    "

                    "hea07   hea07   hea07   hea07   hea07   hea07   hea07   hea07   hea07   hea07   hea07   hea07 "
                    ".       .       .       .       .       hea08   hea08   hea08   hea08   hea08   hea08   hea08 "

                    "hea06   hea06   hea06   hea06   hea06   hea06   hea06   hea06   hea06   hea06   hea06   hea06 "
                    "mix01   mix01   mix01   mix01   mix01   mix01   mix02   mix02   mix02   mix02   mix02   mix02"
                    "mix01   mix01   mix01   mix01   mix01   mix01   mix02   mix02   mix02   mix02   mix02   mix02"
                    "mix01   mix01   mix01   mix01   mix01   mix01   mix02   mix02   mix02   mix02   mix02   mix02"
                    "mix01   mix01   mix01   mix01   mix01   mix01   mix02   mix02   mix02   mix02   mix02   mix02"



        ;



            .hea01 {
                grid-area: hea01;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea02 {
                grid-area: hea02;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea03 {
                grid-area: hea03;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea04 {
                grid-area: hea04;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea05 {
                grid-area: hea05;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea06 {
                grid-area: hea06;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea07 {
                grid-area: hea07;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }
            .hea08 {
                grid-area: hea08;
                background: $adminFilterBgColor;
                padding:1em;
                border:#333 2px solid;
            }

            .tab01 {
                //grid-column: span 12;
                grid-area: tab01;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab01A {
                //grid-column: span 12;
                grid-area: tab01A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab01B {
                //grid-column: span 12;
                grid-area: tab01B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab02 {
                //grid-column: span 12;
                grid-area: tab02;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab02A {
                //grid-column: span 12;
                grid-area: tab02A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab02B {
                //grid-column: span 12;
                grid-area: tab02B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab03 {
                //grid-column: span 12;
                grid-area: tab03;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab03A {
                //grid-column: span 12;
                grid-area: tab03A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab03B {
                //grid-column: span 12;
                grid-area: tab03B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab04 {
                //grid-column: span 12;
                grid-area: tab04;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab04A {
                //grid-column: span 12;
                grid-area: tab04A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab04B {
                //grid-column: span 12;
                grid-area: tab04B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab05 {
                //grid-column: span 12;
                grid-area: tab05;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab05A {
                //grid-column: span 12;
                grid-area: tab05A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab05B {
                //grid-column: span 12;
                grid-area: tab05B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab06 {
                //grid-column: span 12;
                grid-area: tab06;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab06A {
                //grid-column: span 12;
                grid-area: tab06A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab06B {
                //grid-column: span 12;
                grid-area: tab06B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab07 {
                //grid-column: span 12;
                grid-area: tab07;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab07A {
                //grid-column: span 12;
                grid-area: tab07A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab07B {
                //grid-column: span 12;
                grid-area: tab07B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .tab08 {
                //grid-column: span 12;
                grid-area: tab08;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab08A {
                //grid-column: span 12;
                grid-area: tab08A;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }
            .tab08B {
                //grid-column: span 12;
                grid-area: tab08B;
                background:#eee;
                //width: 100%;
                //height: 100%;
                //padding:1em;
                //border:#333 1px solid;
            }

            .pie01 {
                grid-area: pie01;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie02 {
                grid-area: pie02;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie03 {
                grid-area: pie03;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie04 {
                grid-area: pie04;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie05 {
                grid-area: pie05;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie06 {
                grid-area: pie06;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie07 {
                grid-area: pie07;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie08 {
                grid-area: pie08;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .pie09 {
                grid-area: pie09;
                background:#eee;
                //padding:1em;
                //border:#333 1px solid;
            }
            .bar01 {
                grid-area: bar01;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .bar02 {
                grid-area: bar02;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .bar03 {
                grid-area: bar03;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .bar04 {
                grid-area: bar04;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .bar05 {
                grid-area: bar05;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .bar06 {
                grid-area: bar06;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .mix01 {
                grid-area: mix01;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
            .mix02 {
                grid-area: mix02;
                background:#eee;
                padding:1em;
                border:#333 1px solid;
            }
        }
    }
</style>
