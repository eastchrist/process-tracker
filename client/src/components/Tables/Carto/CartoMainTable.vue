<template>
    <!--
    style="background-color: blue; border: 5px solid black;"
    style="background-color: red; border: 3px solid black;"
    style="background-color: green;"
    -->
    <div :class="className">
        <table style="width:100%; height :100%; " >
            <thead>
                    <tr >
                        <th :style="getDesignTableHeaderStyle(0,0, 1)" colspan="4">{{ tableData.title.title }}</th>
                    </tr>
                    <tr >
                            <th v-for="(textHeader,indexHeader) in tableData.textHeader" :key="indexHeader" :style="getDesignTableHeaderStyle(1,indexHeader, tableData.textHeader.length)">{{ tableData.textHeader[indexHeader] }}</th>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                            <th :style="getDesignTableCellsStyle(0, 0, 4, tableData.columns.length)" >{{ tableData.textColumn[0] }}</th>
                            <td :style="getDesignTableCellsStyle(0, 1, 4, tableData.columns.length)" >{{ tableData.fonctionFirstAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(0, 2, 4, tableData.columns.length)" >{{ tableData.fonctionFirstAnnual.price  }}</td>
                            <td :style="getDesignTableCellsStyle(0, 3, 4, tableData.columns.length)" >{{ tableData.fonctionFirstAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <th :style="getDesignTableCellsStyle(1, 0, 4, tableData.columns.length)" >{{ tableData.textColumn[1] }}</th>
                            <td :style="getDesignTableCellsStyle(1, 1, 4, tableData.columns.length)" >{{ tableData.fonctionCurrentAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(1, 2, 4, tableData.columns.length)" >{{ tableData.fonctionCurrentAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(1, 3, 4, tableData.columns.length)" >{{ tableData.fonctionCurrentAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <th :style="getDesignTableCellsStyle(2, 0, 4, tableData.columns.length)" >{{ tableData.textColumn[2] }}</th>
                            <td :style="getDesignTableCellsStyle(2, 1, 4, tableData.columns.length)" >{{ tableData.fonctionSavingAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(2, 2, 4, tableData.columns.length)" >{{ tableData.fonctionSavingAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(2, 3, 4, tableData.columns.length)" >{{ tableData.fonctionSavingAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <th :style="getDesignTableCellsStyle(3, 0, 4, tableData.columns.length)" >{{ tableData.textColumn[3] }}</th>
                            <td :style="getDesignTableCellsStyle(3, 1, 4, tableData.columns.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(3, 2, 4, tableData.columns.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(3, 3, 4, tableData.columns.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.priceEuro }}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { getDesignTableHeaderStyle, getDesignTableCellsStyle  } from '@/utils/tables'

    @Component({
        name: 'CartoMainTable.vue',
        components: {
        }
    })
    export default class CartoMainTable extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'currency' }) private currency!: string
        @Prop({ default: { } }) private tableData!: any

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
        width: 100%;
    }
    /*
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 20px;
    }
   */
</style>
