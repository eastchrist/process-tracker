<template>
    <div :class="className">
        <table style="width:100%">
            <thead>
                <tr >
                    <th :style="getDesignTableHeaderStyle(0,0, 1)" colspan="16">{{ tableData.title.title }}</th>
                </tr>
                <tr >
                    <td :style="getDesignTableHeaderStyle(1,0, 6)" rowspan="2">{{ tableData.textHeader[0] }}</td>
                    <th :style="getDesignTableHeaderStyle(1,1, 6)" colspan="3">{{ tableData.textHeader[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(1,2, 6)" colspan="3">{{ tableData.textHeader[2] }}</th>
                    <th :style="getDesignTableHeaderStyle(1,3, 6)" colspan="3">{{ tableData.textHeader[3] }}</th>
                    <th :style="getDesignTableHeaderStyle(1,4, 6)" colspan="3">{{ tableData.textHeader[4] }}</th>
                    <th :style="getDesignTableHeaderStyle(1,5, 6)" colspan="3">{{ tableData.textHeader[5] }}</th>
                </tr>
                <tr >

                    <th :style="getDesignTableHeaderStyle(2,1, 16)" >{{ tableData.textHeaderSub[0] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,2, 16)">{{ tableData.textHeaderSub[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,3, 16)">{{ tableData.textHeaderSub[2] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,4, 16)">{{ tableData.textHeaderSub[0] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,5, 16)">{{ tableData.textHeaderSub[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,6, 16)">{{ tableData.textHeaderSub[2] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,7, 16)">{{ tableData.textHeaderSub[0] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,8, 16)">{{ tableData.textHeaderSub[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,9, 16)">{{ tableData.textHeaderSub[2] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,10, 16)">{{ tableData.textHeaderSub[0] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,11, 16)">{{ tableData.textHeaderSub[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,12, 16)">{{ tableData.textHeaderSub[2] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,13, 16)">{{ tableData.textHeaderSub[0] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,14, 16)">{{ tableData.textHeaderSub[1] }}</th>
                    <th :style="getDesignTableHeaderStyle(2,15, 16)">{{ tableData.textHeaderSub[2] }}</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th :style="getDesignTableCellsStyle(0, 0, 5, 16)" >{{ tableData.textColumn[0] }}</th>

                <td :style="getDesignTableCellsStyle(0, 1, 5, 16)" >{{ tableData.veryHigh.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 2, 5, 16)" >{{ tableData.veryHigh.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 3, 5, 16)" >{{ tableData.veryHigh.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 4, 5, 16)" >{{ tableData.veryHigh.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(0, 5, 5, 16)" >{{ tableData.veryHigh.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 6, 5, 16)" >{{ tableData.veryHigh.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 7, 5, 16)" >{{ tableData.veryHigh.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 8, 5, 16)" >{{ tableData.veryHigh.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 9, 5, 16)" >{{ tableData.veryHigh.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 10, 5, 16)" >{{ tableData.veryHigh.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 11, 5, 16)" >{{ tableData.veryHigh.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 12, 5, 16)" >{{ tableData.veryHigh.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(0, 13, 5, 16)" >{{ tableData.veryHigh.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(0, 14, 5, 16)" >{{ tableData.veryHigh.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(0, 15, 5, 16)" >{{ tableData.veryHigh.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(1, 0, 5, 16)">{{ tableData.textColumn[1] }}</th>

                <td :style="getDesignTableCellsStyle(1, 1, 5, 16)">{{ tableData.high.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 2, 5, 16)">{{ tableData.high.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 3, 5, 16)">{{ tableData.high.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 4, 5, 16)">{{ tableData.high.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(1, 5, 5, 16)">{{ tableData.high.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 6, 5, 16)">{{ tableData.high.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 7, 5, 16)">{{ tableData.high.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 8, 5, 16)">{{ tableData.high.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 9, 5, 16)">{{ tableData.high.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 10, 5, 16)">{{ tableData.high.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 11, 5, 16)">{{ tableData.high.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 12, 5, 16)">{{ tableData.high.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(1, 13, 5, 16)">{{ tableData.high.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(1, 14, 5, 16)">{{ tableData.high.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(1, 15, 5, 16)">{{ tableData.high.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(2, 0, 5, 16)">{{ tableData.textColumn[2] }}</th>

                <td :style="getDesignTableCellsStyle(2, 1, 5, 16)">{{ tableData.normal.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 2, 5, 16)">{{ tableData.normal.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 3, 5, 16)">{{ tableData.normal.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 4, 5, 16)">{{ tableData.normal.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(2, 5, 5, 16)">{{ tableData.normal.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 6, 5, 16)">{{ tableData.normal.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 7, 5, 16)">{{ tableData.normal.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 8, 5, 16)">{{ tableData.normal.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 9, 5, 16)">{{ tableData.normal.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 10, 5, 16)">{{ tableData.normal.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 11, 5, 16)">{{ tableData.normal.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 12, 5, 16)">{{ tableData.normal.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(2, 13, 5, 16)">{{ tableData.normal.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(2, 14, 5, 16)">{{ tableData.normal.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(2, 15, 5, 16)">{{ tableData.normal.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(3, 0, 5, 16)">{{ tableData.textColumn[3] }}</th>

                <td :style="getDesignTableCellsStyle(3, 1, 5, 16)">{{ tableData.low.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 2, 5, 16)">{{ tableData.low.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 3, 5, 16)">{{ tableData.low.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 4, 5, 16)">{{ tableData.low.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(3, 5, 5, 16)">{{ tableData.low.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 6, 5, 16)">{{ tableData.low.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 7, 5, 16)">{{ tableData.low.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 8, 5, 16)">{{ tableData.low.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 9, 5, 16)">{{ tableData.low.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 10, 5, 16)">{{ tableData.low.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 11, 5, 16)">{{ tableData.low.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 12, 5, 16)">{{ tableData.low.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(3, 13, 5, 16)">{{ tableData.low.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(3, 14, 5, 16)">{{ tableData.low.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(3, 15, 5, 16)">{{ tableData.low.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            <tr>
                <th :style="getDesignTableCellsStyle(4, 0, 5, 16)">{{ tableData.textColumn[4] }}</th>

                <td :style="getDesignTableCellsStyle(4, 1, 5, 16)">{{ tableData.veryLow.veryHard.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 2, 5, 16)">{{ tableData.veryLow.veryHard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 3, 5, 16)">{{ tableData.veryLow.veryHard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 4, 5, 16)">{{ tableData.veryLow.hard.number  }}</td>
                <td :style="getDesignTableCellsStyle(4, 5, 5, 16)">{{ tableData.veryLow.hard.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 6, 5, 16)">{{ tableData.veryLow.hard.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 7, 5, 16)">{{ tableData.veryLow.difficile.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 8, 5, 16)">{{ tableData.veryLow.difficile.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 9, 5, 16)">{{ tableData.veryLow.difficile.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 10, 5, 16)">{{ tableData.veryLow.normal.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 11, 5, 16)">{{ tableData.veryLow.normal.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 12, 5, 16)">{{ tableData.veryLow.normal.projectFunctionLinkedCurrentAnnualPrice }}</td>

                <td :style="getDesignTableCellsStyle(4, 13, 5, 16)">{{ tableData.veryLow.easy.number }}</td>
                <td :style="getDesignTableCellsStyle(4, 14, 5, 16)">{{ tableData.veryLow.easy.projectFunctionLinkedFirstAnnualPrice }}</td>
                <td :style="getDesignTableCellsStyle(4, 15, 5, 16)">{{ tableData.veryLow.easy.projectFunctionLinkedCurrentAnnualPrice }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import { getDesignTableHeaderStyle, getDesignTableCellsStyle  } from '@/utils/tables'

    @Component({
        name: 'CartoMainTable.vue',
        components: {}
    })
    export default class TableOperatorPushFinal extends Vue {
        @Prop({default: ''}) private className!: string
        @Prop({default: 'currency'}) private currency!: string
        @Prop({default: {}}) private tableData!: any

        private getDesignTableHeaderStyle( rowIndex: number, columnIndex: number, columnMax: number) {
            return getDesignTableHeaderStyle( rowIndex, columnIndex, columnMax, this.tableData)
        }
        private getDesignTableCellsStyle( rowIndex: number, columnIndex: number, rowMax: number, columnMax: number) {
            return getDesignTableCellsStyle( rowIndex, columnIndex, rowMax, columnMax, this.tableData)
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
