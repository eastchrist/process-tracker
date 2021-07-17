<template>
    <!--
    <table style="width:100%; height :100%; " >
    -->
    <div class="table-carto-normale" :class="className">
        <table style="width:100%;">
            <thead>
                    <tr >
                        <td :style="getDesignTableHeaderStyle(0,0)" colspan="4">{{ tableData.title.text }}</td>
                    </tr>
                    <tr >
                            <td v-for="(textHeader,indexHeader) in tableData.header.text" :key="indexHeader" :style="getDesignTableHeaderStyle(1,indexHeader)">{{ tableData.header.text[indexHeader] }}</td>
                    </tr>
            </thead>
            <tbody>
                    <tr>
                            <td :style="getDesignTableCellsStyle(0, 0, 4, tableData.columns.text.length)" >{{ tableData.columns.text[0] }}</td>
                            <td :style="getDesignTableCellsStyle(0, 1, 4, tableData.columns.text.length)" >{{ tableData.fonctionFirstAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(0, 2, 4, tableData.columns.text.length)" >{{ tableData.fonctionFirstAnnual.price  }}</td>
                            <td :style="getDesignTableCellsStyle(0, 3, 4, tableData.columns.text.length)" >{{ tableData.fonctionFirstAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <td :style="getDesignTableCellsStyle(1, 0, 4, tableData.columns.text.length)" >{{ tableData.columns.text[1] }}</td>
                            <td :style="getDesignTableCellsStyle(1, 1, 4, tableData.columns.text.length)" >{{ tableData.fonctionCurrentAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(1, 2, 4, tableData.columns.text.length)" >{{ tableData.fonctionCurrentAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(1, 3, 4, tableData.columns.text.length)" >{{ tableData.fonctionCurrentAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <td :style="getDesignTableCellsStyle(2, 0, 4, tableData.columns.text.length)" >{{ tableData.columns.text[2] }}</td>
                            <td :style="getDesignTableCellsStyle(2, 1, 4, tableData.columns.text.length)" >{{ tableData.fonctionSavingAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(2, 2, 4, tableData.columns.text.length)" >{{ tableData.fonctionSavingAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(2, 3, 4, tableData.columns.text.length)" >{{ tableData.fonctionSavingAnnual.priceEuro }}</td>
                    </tr>
                    <tr>
                            <td :style="getDesignTableCellsStyle(3, 0, 4, tableData.columns.text.length)" >{{ tableData.columns.text[3] }}</td>
                            <td :style="getDesignTableCellsStyle(3, 1, 4, tableData.columns.text.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.losses }}</td>
                            <td :style="getDesignTableCellsStyle(3, 2, 4, tableData.columns.text.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.price }}</td>
                            <td :style="getDesignTableCellsStyle(3, 3, 4, tableData.columns.text.length)" >{{ tableData.fonctionProjectRecoveryRequestAnnual.priceEuro }}</td>
                    </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { getDesignTableHeaderStyleHeader, getDesignTableCellsStyleHeader  } from '@/utils/tables'
    import { ITableDataFactoryMain } from "@/api/types";

    @Component({
        name: 'CartoMainTable.vue',
        components: {
        }
    })
    export default class CartoMainTable extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'currency' }) private currency!: string
        @Prop({ default: { } }) private tableData!: ITableDataFactoryMain

        private getDesignTableHeaderStyle( rowIndex: number, columnIndex: number) {
            return getDesignTableHeaderStyleHeader( rowIndex, columnIndex, this.tableData)
        }
        private getDesignTableCellsStyle( rowIndex: number, columnIndex: number, rowMax: number, columnMax: number) {
            return getDesignTableCellsStyleHeader( rowIndex, columnIndex, rowMax, this.tableData)
        }
    }
</script>

<style lang="scss" scoped>

</style>
