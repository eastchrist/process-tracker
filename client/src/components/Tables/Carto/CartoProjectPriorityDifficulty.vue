<template>
    <div :class="className">
        <table style="width:100%">
            <thead>
                <tr >
                    <td :style="getDesignTableHeaderStyle(0,0)" colspan="16">{{ tableData.title.text }}</td>
                </tr>
                <tr >
                    <td :style="getDesignTableHeaderStyle(1,0)" rowspan="2">{{ tableData.header.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(1,1)" colspan="3">{{ tableData.header.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(1,2)" colspan="3">{{ tableData.header.text[2] }}</td>
                    <td :style="getDesignTableHeaderStyle(1,3)" colspan="3">{{ tableData.header.text[3] }}</td>
                    <td :style="getDesignTableHeaderStyle(1,4)" colspan="3">{{ tableData.header.text[4] }}</td>
                    <td :style="getDesignTableHeaderStyle(1,5)" colspan="3">{{ tableData.header.text[5] }}</td>
                </tr>
                <tr >

                    <td :style="getDesignTableHeaderStyle(2,1)" >{{ tableData.headerSub.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,2)">{{ tableData.headerSub.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,3)">{{ tableData.headerSub.text[2] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,4)">{{ tableData.headerSub.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,5)">{{ tableData.headerSub.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,6)">{{ tableData.headerSub.text[2] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,7)">{{ tableData.headerSub.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,8)">{{ tableData.headerSub.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,9)">{{ tableData.headerSub.text[2] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,10)">{{ tableData.headerSub.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,11)">{{ tableData.headerSub.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,12)">{{ tableData.headerSub.text[2] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,13)">{{ tableData.headerSub.text[0] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,14)">{{ tableData.headerSub.text[1] }}</td>
                    <td :style="getDesignTableHeaderStyle(2,15)">{{ tableData.headerSub.text[2] }}</td>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td :style="getDesignTableCellsStyle(0, 0, 5)" >{{ tableData.columns.text[0] }}</td>

                <td :style="getDesignTableCellsStyle(0, 1, 5)" >{{ tableData.veryHigh.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 2, 5)" >{{ tableData.veryHigh.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 3, 5)" >{{ tableData.veryHigh.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 4, 5)" >{{ tableData.veryHigh.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(0, 5, 5)" >{{ tableData.veryHigh.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 6, 5)" >{{ tableData.veryHigh.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 7, 5)" >{{ tableData.veryHigh.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 8, 5)" >{{ tableData.veryHigh.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 9, 5)" >{{ tableData.veryHigh.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 10, 5)" >{{ tableData.veryHigh.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 11, 5)" >{{ tableData.veryHigh.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 12, 5)" >{{ tableData.veryHigh.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 13, 5)" >{{ tableData.veryHigh.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 14, 5)" >{{ tableData.veryHigh.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 15, 5)" >{{ tableData.veryHigh.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(1, 0, 5)">{{ tableData.columns.text[1] }}</th>

                <td :style="getDesignTableCellsStyle(1, 1, 5)">{{ tableData.high.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 2, 5)">{{ tableData.high.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 3, 5)">{{ tableData.high.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 4, 5)">{{ tableData.high.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(1, 5, 5)">{{ tableData.high.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 6, 5)">{{ tableData.high.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 7, 5)">{{ tableData.high.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 8, 5)">{{ tableData.high.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 9, 5)">{{ tableData.high.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 10, 5)">{{ tableData.high.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 11, 5)">{{ tableData.high.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 12, 5)">{{ tableData.high.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 13, 5)">{{ tableData.high.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 14, 5)">{{ tableData.high.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 15, 5)">{{ tableData.high.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(2, 0, 5)">{{ tableData.columns.text[2] }}</th>

                <td :style="getDesignTableCellsStyle(2, 1, 5)">{{ tableData.normal.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 2, 5)">{{ tableData.normal.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 3, 5)">{{ tableData.normal.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 4, 5)">{{ tableData.normal.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(2, 5, 5)">{{ tableData.normal.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 6, 5)">{{ tableData.normal.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 7, 5)">{{ tableData.normal.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 8, 5)">{{ tableData.normal.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 9, 5)">{{ tableData.normal.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 10, 5)">{{ tableData.normal.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 11, 5)">{{ tableData.normal.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 12, 5)">{{ tableData.normal.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 13, 5)">{{ tableData.normal.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 14, 5)">{{ tableData.normal.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 15, 5)">{{ tableData.normal.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(3, 0, 5)">{{ tableData.columns.text[3] }}</th>

                <td :style="getDesignTableCellsStyle(3, 1, 5)">{{ tableData.low.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 2, 5)">{{ tableData.low.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 3, 5)">{{ tableData.low.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 4, 5)">{{ tableData.low.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(3, 5, 5)">{{ tableData.low.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 6, 5)">{{ tableData.low.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 7, 5)">{{ tableData.low.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 8, 5)">{{ tableData.low.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 9, 5)">{{ tableData.low.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 10, 5)">{{ tableData.low.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 11, 5)">{{ tableData.low.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 12, 5)">{{ tableData.low.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 13, 5)">{{ tableData.low.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 14, 5)">{{ tableData.low.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 15, 5)">{{ tableData.low.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(4, 0, 5)">{{ tableData.columns.text[4] }}</th>

                <td :style="getDesignTableCellsStyle(4, 1, 5)">{{ tableData.veryLow.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 2, 5)">{{ tableData.veryLow.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 3, 5)">{{ tableData.veryLow.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 4, 5)">{{ tableData.veryLow.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(4, 5, 5)">{{ tableData.veryLow.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 6, 5)">{{ tableData.veryLow.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 7, 5)">{{ tableData.veryLow.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 8, 5)">{{ tableData.veryLow.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 9, 5)">{{ tableData.veryLow.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 10, 5)">{{ tableData.veryLow.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 11, 5)">{{ tableData.veryLow.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 12, 5)">{{ tableData.veryLow.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 13, 5)">{{ tableData.veryLow.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 14, 5)">{{ tableData.veryLow.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 15, 5)">{{ tableData.veryLow.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import { getDesignTableHeaderStyleHeaders, getDesignTableCellsStyleHeaders  } from '@/utils/tables'

    @Component({
        name: 'CartoMainTable.vue',
        components: {}
    })
    export default class TableOperatorPushFinal extends Vue {
        @Prop({default: ''}) private className!: string
        @Prop({default: 'currency'}) private currency!: string
        @Prop({default: {}}) private tableData!: any

        private getDesignTableHeaderStyle( rowIndex: number, columnIndex: number) {
            return getDesignTableHeaderStyleHeaders( rowIndex, columnIndex, this.tableData)
        }
        private getDesignTableCellsStyle( rowIndex: number, columnIndex: number, rowMax: number, columnMax: number) {
            return getDesignTableCellsStyleHeaders( rowIndex, columnIndex, rowMax, this.tableData)
        }
    }
</script>

<style lang="scss" scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
    }

    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
</style>
