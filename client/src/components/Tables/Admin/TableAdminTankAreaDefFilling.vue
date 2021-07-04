<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.tankAreaDefFilling.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ImportFromExcel" className="ExportToExcel" TableName="TankAreaDefFilling" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="TankAreaDefFilling" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="TankAreaDefFilling" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table   -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.tankAreaDefFilling.title')">
                        <el-table-column align="center" label="Drag" width="80" :min-width="designTable.columns[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <!--  SUB TABLE -->
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs4')" type="expand" :min-width="designTable.columns[1].width">
                            <template v-slot="{row}">
                                <!--  <el-table-sub -->
                                <!-- Design Table    -->
                                <el-table :key="subTableKey" :data="row.options" border fit highlight-current-row style="width: 100%;" :header-cell-style="getTableSubRowClass" :cell-style="tableSubCellsStyle">
                                    <!-- titre table SUB-->
                                    <el-table-column :label="$t('tables.tankAreaDefFilling.titleSub1')">
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs1')" :min-width="designTableSub.columns[0].width">
                                            <template v-slot="{row}"><span >{{ row.number }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs2')" :min-width="designTableSub.columns[1].width">
                                            <template v-slot="{row}"><span >{{ row.name }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs3')" :min-width="designTableSub.columns[2].width">
                                            <template v-slot="{row}"><span >{{ row.name1 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs4')" :min-width="designTableSub.columns[3].width">
                                            <template v-slot="{row}"><span >{{ row.idTank }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs5')" :min-width="designTableSub.columns[4].width">
                                            <template v-slot="{row}"><span >{{ row.inLine }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs6')" :min-width="designTableSub.columns[5].width">
                                            <template v-slot="{row}"><span >{{ row.inColl }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs7')" :min-width="designTableSub.columns[6].width">
                                            <template v-slot="{row}"><span >{{ row.volCollInlet }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs8')" :min-width="designTableSub.columns[7].width">
                                            <template v-slot="{row}"><span >{{ row.volCollOutlet }}</span></template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs5')" :min-width="designTable.columns[2].width">
                            <template v-slot="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs6')" :min-width="designTable.columns[3].width">
                            <template v-slot="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs7')" :min-width="designTable.columns[4].width">
                            <template v-slot="{row}">
                                <span >{{ row.dataComment }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs8')" :min-width="designTable.columns[5].width">
                            <template v-slot="{row}">
                                <span >{{ row.dataType }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs9')" :min-width="designTable.columns[6].width">
                            <template v-slot="{row, $index}">
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
            <FormEditTankAreaDefFilling className="TankAreaDefFilling" TableName="TankAreaDefFilling" :dialogFormVisible=dialogFormVisible
                                        :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                                        :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                                        @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditTankAreaDefFilling>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.tankAreaDefFilling.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBTankAreaDefFillings, updateDBTankAreaDefFillings, updateDBTankAreaDefFilling, deleteDBTankAreaDefFilling, defaultTankAreaDefFillingData, defaultTankAreaDefFillingRules, defaultTankAreaDefFillingQuery, defaultTankAreaDefFillingExcelHeater} from '@/api/tankAreaDefFillings'
    import {getDBAreas} from "@/api/areas";

    import { IDataBaseTankAreaDefFillingData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditTankAreaDefFilling from "@/components/TableComponents/FormEdit/FormEditTankAreaDefFilling.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultTankAreaDefFillingDesignTable, defaultTankAreaDefFillingDesignTableSub } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const textMap = {
        update: 'Edit',
        create: 'Create'
    }
    @Component({
        name: 'TableAdminTankAreaDefFilling',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditTankAreaDefFilling,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable = defaultTankAreaDefFillingDesignTable
        private designTableSub = defaultTankAreaDefFillingDesignTableSub

        private tableKey = 0
        private subTableKey = 0
        private list: IDataBaseTankAreaDefFillingData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultTankAreaDefFillingQuery
        private listExcel = defaultTankAreaDefFillingExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultTankAreaDefFillingRules
        private tempData = defaultTankAreaDefFillingData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTable, this.total)
        }

        //Apply Style to SubTable Header and SubHeader
        private getTableSubRowClass( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTableSub, this.total)
        }
        //Apply Style to SubTable Rows
        private tableSubCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTableSub, this.total)
        }



        async created() {
            const { data } = await getDBAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.rows
            this.getList()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBTankAreaDefFillings(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.oldList = this.list.map((v) => v.position)
            this.newList = this.oldList.slice()
            this.$nextTick(() => {
                this.setSort()
            })
            this.listLoading = false
        }
        private async dragUpdateDatabaseList() {
            const IDataBaseFactoryDatas: IDataBaseTankAreaDefFillingData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseTankAreaDefFillingData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    dataComment: list.dataComment,
                    dataType: list.dataType,
                    options: list.options
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBTankAreaDefFillings (IDataBaseFactoryDatas)
        }
        private setSort() {
            const el = (this.$refs.draggableTable as Vue).$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0] as HTMLElement
            console.log("********************setSort list")
            this.sortable = Sortable.create(el, {
                ghostClass: 'sortable-ghost', // Class name for the drop placeholder
                onEnd: evt => {
                    if (typeof (evt.oldIndex) !== 'undefined' && typeof (evt.newIndex) !== 'undefined') {
                        const targetRow = this.list.splice(evt.oldIndex, 1)[0]
                        this.list.splice(evt.newIndex, 0, targetRow)
                        this.dragUpdateDatabaseList()
                    }
                }
            })
        }

        //Coming from FormEdit
        private EditFormCancel() {
            this.dialogFormVisible = false
        }
        private async EditFormUpdate( datas: any ) {
            const updateDBData: IDataBaseTankAreaDefFillingData = {
                id: datas.id,
                idNode: datas.idNode,
                position: datas.position,
                name: datas.name,
                name1: datas.name1,
                dataComment: datas.dataComment,
                dataType: datas.dataType,
                options: datas.options,
            }
            const { data } = await updateDBTankAreaDefFilling(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultTankAreaDefFillingData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBTankAreaDefFilling(row.id, { id: row.id } )
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
            const { data } = await updateDBTankAreaDefFillings( results )
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
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, minmax(100px, 1fr));
        //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
        grid-template-areas:
                "filter filter filter filter filter filter filter filter filter .      .      .     "
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  .      .      .     "
                "table  table  table  table  table  table  table  table  table  treev  treev  treev "
                "pages  pages  pages  pages  pages  pages  pages  pages  pages  .      .      .     ";
        background: $adminWrapperBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .filter {
        grid-area: filter;
        background: $adminFilterBgColor;
        padding:1em;
        border:#333 2px solid;
        .filter-item.el-input {
            margin-left: 0px;
            width: 200px
        }
        .filter-item.el-select {
            margin-left: 5px;
            width: 200px
        }
        .filter-item.el-button {
            margin-left: 5px;
            width: 100px
        }
    }
    .extra {
        grid-area: extra;
        background: $adminExtraBgColor;
        padding:1em;
        border:#333 2px solid;
        .ExportToExcel {
            margin-left: 0px;
        }
        .ImportFromExcel {
            margin-left: 10px;
        }
        .UpdateFromNode {
            margin-left: 10px;
        }
    }
    .table {
        grid-area: table;
        background: $adminTableBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .pagination {
        grid-area: pages;
        background: $adminPaginationBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .treeview {
        grid-area: treev;
        background:$adminTreeviewBgColor;
        padding:1em;
        border:#333 1px solid;
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
