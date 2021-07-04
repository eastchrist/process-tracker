<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="table">
                <!--  <el-table  -->
                <el-table :data="tableData.data"  :span-method="cellMerge" style="width: 100%;" max-height="400" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="tableData.title.title">
                            <el-table-column :label="tableData.textHeader[0]" :min-width="designTable.columns[0].width" >
                                <template slot-scope="{row}">
                                    <span >{{ row.area }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column :label="tableData.textHeader[1]" :min-width="designTable.columns[1].width" >
                                <template slot-scope="{row}">
                                    <span >{{ row.name }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column :label="tableData.textHeader[2]" :min-width="designTable.columns[2].width" >
                                <template slot-scope="{row}">
                                    <span >{{ row.lastLosses }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column :label="tableData.textHeader[3]" :min-width="designTable.columns[3].width" >
                                <template slot-scope="{row}">
                                    <span >{{ row.maxLosse }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column :label="tableData.textHeader[4]" :min-width="designTable.columns[4].width" >
                                <template slot-scope="{row}">
                                    <span >{{ row.lastAnnualLossesPrice }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column :label="tableData.textHeader[5]" :min-width="designTable.columns[5].width" >
                                <template slot-scope="{row}">
                                    <PersoIcons v-if="row.haveToBeCheckActif!==true"  name="chart" @click="handleModifyValidationStatus(row, true, 'haveToBeCheck')" color="white" width='1em' height='1em' />
                                    <PersoIcons v-if="row.haveToBeCheckActif!==false" name="chart" @click="handleModifyValidationStatus(row, false, 'haveToBeCheck')" color="green" width='1em' height='1em' />
                                </template>
                            </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
    import { ITableDataFonctionByAreas, IFonctionByAreas } from '@/api/types'

    import { updateDBFonction } from '@/api/fonctions'
    import { IDataBaseFonctionData } from '@/api/types'

    import { defaultFonctionCartoDesignTable } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    @Component({
        name: 'CartoFonctionList',
        components: {
        }
    })
    export default class TableOperatorPushFinal extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'currency' }) private currency!: string
        @Prop({ required: true }) private tableData!: ITableDataFonctionByAreas

        private designTable = defaultFonctionCartoDesignTable

        private spanArr: number[] = [];
        private pos = 0

        @Watch('tableData', { deep: true })
        private onDataChange(value: ITableDataFonctionByAreas) {
            this.getSpanArr(this.tableData.data)
        }

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTable, 9999)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTable, 9999)
        }


        created() {
            this.getSpanArr(this.tableData.data)
        }
        private getSpanArr(data: IFonctionByAreas[]) {
            this.spanArr = []
            for (let i = 0; i < data.length; i++) {
                if (i === 0) {
                    this.spanArr.push(1);
                    //this.spanArr.push(data[i].area);
                    this.pos = 0
                } else {
                    // Determine whether the current element is the same as the previous element
                    if (data[i].area === data[i - 1].area) {
                        this.spanArr[this.pos] += 1;
                        this.spanArr.push(0);
                    } else {
                        this.spanArr.push(1);
                        this.pos = i;
                    }
                }
            }
        }
        cellMerge( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            if (columnIndex === 0) {
                const _row = this.spanArr[rowIndex];
                const _col = _row > 0 ? 1 : 0;
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }
        }


        private async handleModifyValidationStatus(datas: IDataBaseFonctionData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "haveToBeCheck") {
                Mess = this.$t('tables.fonction.message.message1') + ""
                datas.haveToBeCheck = status
                datas.haveToBeCheckActif = status
            }
            const { data } = await updateDBFonction (datas.id, {
                id: datas.id,
                haveToBeCheck: datas.haveToBeCheck,
            })
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
    }

</script>

<style lang="scss" scoped>
    .table-container {
        background: $adminContainerBgColor;
        padding:2px;
        margin-bottom: 20px;
    }
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, minmax(100px, 1fr));
        grid-template-areas:
                "table  table  table  table  table  table  table  table  table  table  table  table ";
        background: $adminWrapperBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .table {
        grid-area: table;
        background: $adminTableBgColor;
        padding:1em;
        border:#333 2px solid;
    }

    @media only screen and (max-width: 768px) {
        .table-container {
            background: $adminContainerBgColor;
            padding:2px;
            margin-bottom: 20px;
        }
        .wrapper{
            display:grid;
            height: 100vh;
            grid-gap: 0.2rem;
            grid-template-columns:1fr;
            grid-template-areas:
                    "table  table  table  ";
        }
    }
</style>
