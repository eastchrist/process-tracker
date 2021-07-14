<template>
    <div class="table-carto-normale" :class="className">
        <table style="width:100%;">
            <thead>
                <tr >
                    <td :style="getDesignTableHeaderStyle(0,0)" colspan="5">{{ tableData.title.text }}</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td :style="getDesignTableCellsStyle(0, 0, numberRows)" >{{ tableData.columns.text[0] }}</td>
                    <td :style="getDesignTableCellsStyle(0, 1, numberRows)" >{{tableData.fonctionNb}}</td>
                    <td :style="getDesignTableCellsStyle(0, 2, numberRows)" colspan="3" >{{tableData.columns.text[1]}}</td>
                </tr>
                <tr>
                    <td :style="getDesignTableCellsStyle(1, 0, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(1, 1, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(1, 2, numberRows)" >{{ tableData.columns.text[2] }}</td>
                    <td :style="getDesignTableCellsStyle(1, 3, numberRows)" >{{ tableData.fonctionInitAnnualPrice }}</td>
                    <td :style="getDesignTableCellsStyle(1, 4, numberRows)" >{{ tableData.columns.text[4] }}</td>
                </tr>

                <tr>
                    <td :style="getDesignTableCellsStyle(2, 0, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(2, 1, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(2, 2, numberRows)" >{{ tableData.columns.text[3] }}</td>
                    <td :style="getDesignTableCellsStyle(2, 3, numberRows)" >{{ tableData.fonctionCurrentAnnualPrice }}</td>
                    <td :style="getDesignTableCellsStyle(2, 4, numberRows)" >{{ tableData.columns.text[5] }}</td>
                </tr>


                <tr>
                    <td :style="getDesignTableCellsStyle(3, 0, numberRows)" >{{ tableData.columns.text[6] }}</td>
                    <td :style="getDesignTableCellsStyle(3, 1, numberRows)" >{{tableData.fonctionNotDone}}</td>
                    <td :style="getDesignTableCellsStyle(3, 2, numberRows)" colspan="3" >{{tableData.columns.text[7]}}</td>
                </tr>

                <tr>
                    <td :style="getDesignTableCellsStyle(4, 0, numberRows)" >{{ tableData.columns.text[8] }}</td>
                    <td :style="getDesignTableCellsStyle(4, 1, numberRows)" >{{tableData.fonctionDone}}</td>
                    <td :style="getDesignTableCellsStyle(4, 2, numberRows)" colspan="3" >{{ tableData.columns.text[9] }} {{ tableData.fonctionInAlarm }} {{ tableData.columns.text[10] }}</td>
                </tr>

                <tr>
                    <td :style="getDesignTableCellsStyle(5, 0, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(5, 1, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(5, 2, numberRows)" >{{ tableData.columns.text[11] }}</td>
                    <td :style="getDesignTableCellsStyle(5, 3, numberRows)" >{{ tableData.fonctionNotLink }}</td>
                    <td :style="getDesignTableCellsStyle(5, 4, numberRows)" >{{ tableData.columns.text[12] }}</td>
                </tr>

                <tr>
                    <th :style="getDesignTableCellsStyle(6, 0, numberRows)" ></th>
                    <td :style="getDesignTableCellsStyle(6, 1, numberRows)" ></td>
                    <td :style="getDesignTableCellsStyle(6, 2, numberRows)" >{{ tableData.columns.text[13] }}</td>
                    <th :style="getDesignTableCellsStyle(6, 3, numberRows)" >{{ tableData.fonctionNotLinkInitialLosse }}</th>
                    <th :style="getDesignTableCellsStyle(6, 4, numberRows)" >{{ tableData.columns.text[14] }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { getDesignTableHeaderStyleHeader, getDesignTableCellsStyleHeader  } from '@/utils/tables'

    @Component({
        name: 'CartoMainInfoTable.vue',
        components: {
        }
    })
    export default class CartoMainInfoTable extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'currency' }) private currency!: string
        @Prop({ default: { } }) private tableData!: any

        private numberRows = 5
        private getDesignTableHeaderStyle( rowIndex: number, columnIndex: number) {
            return getDesignTableHeaderStyleHeader( rowIndex, columnIndex, this.tableData)
        }
        private getDesignTableCellsStyle( rowIndex: number, columnIndex: number, rowMax: number) {
            return getDesignTableCellsStyleHeader( rowIndex, columnIndex, rowMax, this.tableData)
        }
    }
</script>

