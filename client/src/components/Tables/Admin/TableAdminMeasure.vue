<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.measure.placeholder.placeholder1')" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.measure.placeholder.placeholder2')" clearable class="filter-item" >
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Measure" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Measure" :TableList=list :defaultExcelHeader="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="designTable.title.text">
                        <el-table-column :label="designTable.header.text[0]" prop="id" sortable="custom" :min-width="designTable.columns.design[0].width" >
                            <template slot-scope="{row}"><span>{{ row.id }}</span></template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[1]" :min-width="designTable.columns.design[1].width" >
                            <template slot-scope="{row}">
                                <span >{{ row.position }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[2]" :min-width="designTable.columns.design[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[3]" :min-width="designTable.columns.design[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.comment }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[4]" :min-width="designTable.columns.design[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.type }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[5]" :min-width="designTable.columns.design[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.losses }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[6]" :min-width="designTable.columns.design[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.ts }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[7]" :min-width="designTable.columns.design[7].width">
                            <template slot-scope="{row}">
                                <span >{{ row.measure1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[8]" :min-width="designTable.columns.design[8].width">
                            <template slot-scope="{row}">
                                <span >{{ row.ts1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[9]" :min-width="designTable.columns.design[9].width">
                            <template slot-scope="{row}">
                                <span >{{ row.measure2 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[10]" :min-width="designTable.columns.design[10].width">
                            <template slot-scope="{row}">
                                <span >{{ row.ts2 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[11]" :min-width="designTable.columns.design[11].width">
                            <template slot-scope="{row}">
                                <span >{{ row.measure3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[12]" :min-width="designTable.columns.design[12].width">
                            <template slot-scope="{row}">
                                <span >{{ row.ts3 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[13]" :min-width="designTable.columns.design[13].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idProduct }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[14]" :min-width="designTable.columns.design[14].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idFonction }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[15]" :min-width="designTable.columns.design[15].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="treeview">TREEVIEW</div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditMeasure className="Measure" TableName="Measure" :dialogFormVisible=dialogFormVisible
                             :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                             :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                             @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" @EditFormUpdate="EditFormUpdate">
            </FormEditMeasure>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.measure.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'

    import { getDBMeasures, updateDBMeasures, updateDBMeasure, deleteDBMeasure, defaultMeasureData, defaultMeasureRules, defaultMeasureQuery, defaultMeasureExcelHeader } from '@/api/measures'
    import { getDBFonctions} from '@/api/fonctions'
    import { IDataBaseMeasureData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'

    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditMeasure from "@/components/TableComponents/FormEdit/FormEditMeasure.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultMeasureDesignTable } from '@/configDesign/defaulDesignTableUi'
    import { ITableDataUiDesignedWithoutData } from '@/api/types'
    import { getDesignElementUiHeaderStyleSansData, getDesignElementUiCellsStyleSansData  } from '@/utils/tables'

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminMeasure',
        components: {
            ExportToExcel,
            ImportFromExcel,
            FormEditMeasure,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable: ITableDataUiDesignedWithoutData = defaultMeasureDesignTable

        private tableKey = 0
        private list: IDataBaseMeasureData[] = []
        private total = 0
        private listLoading = true
        private listQuery = defaultMeasureQuery
        private listExcel = defaultMeasureExcelHeader

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultMeasureRules
        private tempData = defaultMeasureData

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }

        async created() {
            this.getList()
        }

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBMeasures(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.listLoading = false
        }

        //Coming from FormEdit
        private EditFormCancel() {
            this.dialogFormVisible = false
        }
        private async EditFormAdd( datas: any ) {
            const updateDBData: IDataBaseMeasureData = {
                id: datas.id,
                position: datas.position,
                comment: datas.comment,
                idType: datas.idType,
                idTankSource: datas.idTankSource,
                idTankDest: datas.idTankDest,
                idProduct: datas.idProduct,
                losses: datas.losses,
                ts: datas.ts,
                measure1: datas.measure1,
                ts1: datas.ts1,
                measure2: datas.measure2,
                ts2: datas.ts2,
                measure3: datas.measure3,
                ts3: datas.ts3,
                idFonction: datas.idFonction
            }
            const { data } = await updateDBMeasure(datas.id, updateDBData)
            this.list.unshift(data[0])
            this.dialogFormVisible = false
            this.$notify({
                title: this.$t('notify.notify2.title') + "",
                message: this.$t('notify.notify2.message') + "",
                type: 'success',
                duration: 2000
            })
        }
        private async EditFormUpdate( datas: any ) {
            const updateDBData: IDataBaseMeasureData = {
                id: datas.id,
                position: datas.position,
                comment: datas.comment,
                idType: datas.idType,
                idTankSource: datas.idTankSource,
                idTankDest: datas.idTankDest,
                idProduct: datas.idProduct,
                losses: datas.losses,
                ts: datas.ts,
                measure1: datas.measure1,
                ts1: datas.ts1,
                measure2: datas.measure2,
                ts2: datas.ts2,
                measure3: datas.measure3,
                ts3: datas.ts3,
                idFonction: datas.idFonction
            }
            const { data } = await updateDBMeasure(datas.id, updateDBData)
            const index = this.list.findIndex(v => v.id === data[0].id)
            this.list.splice(index, 1, data[0])
            this.dialogFormVisible = false
            this.$notify({
                title: this.$t('notify.notify3.title') + "",
                message: this.$t('notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Coming from FormErrorEdit
        private EditFormErrorCancel(  ) {
            this.dialogFormErrorVisible = false
        }
        private handleUpdateFromNodeError(errorList: string) {
            this.tempError = errorList
            this.dialogFormErrorVisible = true
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultMeasureData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBMeasure(row.id, { id: row.id } )
            this.$notify({
                title: this.$t('notify.notify1.title') + "",
                message: this.$t('notify.notify1.message') + "",
                type: 'success',
                duration: 2000
            })
            this.list.splice(index, 1)
        }
        private handleUpdate(row: any) {
            this.tempData = Object.assign({}, row)
            this.dialogStatus = 'update'
            this.dialogFormVisible = true
        }
        private handleCreate() {
            this.resettempData()
            this.dialogStatus = 'create'
            this.dialogFormVisible = true
        }

        //Filter
        private handleFilter() {
            this.listQuery.page = 1
            this.getList()
        }
        private sortChange(data: any) {
            const { prop, order } = data
        }

        //Upload from Excel management
        private beforeUpload(file: File) {
            const isLt1M = file.size / 1024 / 1024 < 1
            if (isLt1M) {
                return true
            }
            this.$message({
                message: this.$t('message.uploadBigFile') + "",
                type: 'warning'
            })
            return false
        }
        private async handleSuccess({ results, header }: { results: any, header: string[]}) {
            //this.tableData = results
            const { data } = await updateDBMeasures( results )
            this.getList()
        }

    }
</script>

<style lang="scss">
    .sortable-ghost {
        opacity: .8;
        color: #fff!important;
        background: #42b983!important;
    }
</style>
<style lang="scss" scoped>
    .table-container {
        background: $adminContainerBgColor;
        padding:2px;
        margin-bottom: 20px;
    }
    .wrapper{
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, minmax(100px, 1fr));
        //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
        grid-template-areas:
                "filter filter filter filter filter filter filter filter filter .      .      .     "
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  .      .      .     "
                "table  table  table  table  table  table  table  table  table  treev  treev  treev "
                "pages  pages  pages  pages  pages  pages  pages  pages  pages  .      .      .     ";
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
            //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
            grid-template-areas:
                    "filter filter filter "
                    "extra  extra  extra  "
                    "treev  treev  treev  "
                    "table  table  table  "
                    "pages  pages  pages  ";
        }
    }

    .draggable-handler {
        cursor: pointer;
    }
    .show-d {
        margin-top: 15px;
    }
</style>


