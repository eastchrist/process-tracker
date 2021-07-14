<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.tankAreaDefEmptying.placeholder.placeholder1')" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel"  className="ExportToExcel" TableName="TankAreaDefEmptying" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel"  className="ImportFromExcel" TableName="TankAreaDefEmptying" :TableList=list :defaultExcelHeader="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode"  className="UpdateFromNode" TableName="TankAreaDefEmptying" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="designTable.title.text">
                        <el-table-column :label="designTable.header.text[0]" :min-width="designTable.columns.design[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <!--  SUB TABLE -->
                        <el-table-column :label="designTable.header.text[1]" type="expand" :min-width="designTable.columns.design[1].width" >
                            <template v-slot="{row}">
                                <!--  <el-table-sub -->
                                <el-table :key="subTableKey" :data="row.options" border fit highlight-current-row style="width: 100%;" :header-cell-style="getTableSubRowClass" :cell-style="tableSubCellsStyle">
                                    <!-- titre table SUB-->
                                    <el-table-column :label="designTableSub.title.text">
                                        <el-table-column :label="designTableSub.header.text[0]" :min-width="designTableSub.columns.design[0].width">
                                            <template v-slot="{row}"><span >{{ row.number }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[1]" :min-width="designTableSub.columns.design[1].width">
                                            <template v-slot="{row}"><span >{{ row.name }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[2]" :min-width="designTableSub.columns.design[2].width">
                                            <template v-slot="{row}"><span >{{ row.name1 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[3]" :min-width="designTableSub.columns.design[3].width">
                                            <template v-slot="{row}"><span >{{ row.idTank }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[4]" :min-width="designTableSub.columns.design[4].width">
                                            <template v-slot="{row}"><span >{{ row.inLine }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[5]" :min-width="designTableSub.columns.design[5].width">
                                            <template v-slot="{row}"><span >{{ row.inColl }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[6]" :min-width="designTableSub.columns.design[6].width">
                                            <template v-slot="{row}"><span >{{ row.volCollInlet }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="designTableSub.header.text[7]" :min-width="designTableSub.columns.design[7].width">
                                            <template v-slot="{row}"><span >{{ row.volCollOutlet }}</span></template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[2]" :min-width="designTable.columns.design[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[3]" :min-width="designTable.columns.design[3].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[4]" :min-width="designTable.columns.design[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.dataComment }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[5]" :min-width="designTable.columns.design[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.dataType }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[6]" :min-width="designTable.columns.design[6].width">
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
            <FormEditTankAreaDefEmptying className="TankAreaDefEmptying" TableName="TankAreaDefEmptying" :dialogFormVisible=dialogFormVisible
                                         :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                                         :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                                         @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditTankAreaDefEmptying>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.tankAreaDefEmptying.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBTankAreaDefEmptyings, updateDBTankAreaDefEmptyings, updateDBTankAreaDefEmptying, deleteDBTankAreaDefEmptying, defaultTankAreaDefEmptyingData, defaultTankAreaDefEmptyingRules, defaultTankAreaDefEmptyingQuery, defaultTankAreaDefEmptyingExcelHeader} from '@/api/tankAreaDefEmptyings'
    import {getDBAreas} from "@/api/areas";

    import { IDataBaseTankAreaDefEmptyingData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditTankAreaDefEmptying from "@/components/TableComponents/FormEdit/FormEditTankAreaDefEmptying.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultTankAreaDefEmptyingDesignTable, defaultTankAreaDefEmptyingDesignTableSub } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminTankAreaDefEmptying',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditTankAreaDefEmptying,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable: ITableDataUiDesignedWithoutData = defaultTankAreaDefEmptyingDesignTable
        private designTableSub: ITableDataUiDesignedWithoutData = defaultTankAreaDefEmptyingDesignTableSub

        private tableKey = 0
        private subTableKey = 0
        private list: IDataBaseTankAreaDefEmptyingData[] = []
        private total = 0
        private oldRows: number[] = []
        private newRows: number[] = []

        private listLoading = true
        private listQuery = defaultTankAreaDefEmptyingQuery
        private listExcel = defaultTankAreaDefEmptyingExcelHeader

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultTankAreaDefEmptyingRules
        private tempData = defaultTankAreaDefEmptyingData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to SubTable Header and SubHeader
        private getTableSubRowClass( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyleSansData( rowIndex, columnIndex, this.designTableSub, this.total)
        }
        //Apply Style to SubTable Rows
        private tableSubCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyleSansData( rowIndex, columnIndex, this.designTableSub, this.total)
        }

        async created() {
            const { data } = await getDBAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.rows
            this.getList()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBTankAreaDefEmptyings(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.oldRows = this.list.map((v) => v.position)
            this.newRows = this.oldRows.slice()
            this.$nextTick(() => {
                this.setSort()
            })
            this.listLoading = false
        }
        private async dragUpdateDatabaseList() {
            const IDataBaseFactoryDatas: IDataBaseTankAreaDefEmptyingData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseTankAreaDefEmptyingData = {
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
            const updatedList = await updateDBTankAreaDefEmptyings (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBaseTankAreaDefEmptyingData = {
                id: datas.id,
                idNode: datas.idNode,
                position: datas.position,
                name: datas.name,
                name1: datas.name1,
                dataComment: datas.dataComment,
                dataType: datas.dataType,
                options: datas.options,

            }
            const { data } = await updateDBTankAreaDefEmptying(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultTankAreaDefEmptyingData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBTankAreaDefEmptying(row.id, { id: row.id } )
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
            const { data } = await updateDBTankAreaDefEmptyings( results )
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
