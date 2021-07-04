<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">FILTER</div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="ProjectStatus" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="ProjectStatus" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->

                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.projectStatus.title')">
                        <el-table-column label="Drag" :min-width="designTable.columns[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="$t('tables.projectStatus.champs.champs3')" :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <span >{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.projectStatus.champs.champs4')" :min-width="designTable.columns[2].width">
                            <template slot-scope="{row}">
                                <span >{{ row.value }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.projectStatus.champs.champs5')" :min-width="designTable.columns[3].width">
                            <template slot-scope="{row, $index}">
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
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBProjectStatus, updateDBProjectStatuss, deleteDBProjectStatus, defaultProjectStatusData, defaultProjectStatusQuery, defaultProjectStatusExcelHeater } from '@/api/projectStatus'
    import { IDataBaseProjectStatusData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'

    import { defaultProjectStatusDesignTable } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminProjectStatus',
        components: {
            ExportToExcel,
            ImportFromExcel,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable = defaultProjectStatusDesignTable

        private tableKey = 0
        private list: IDataBaseProjectStatusData[] = []
        private total = 0
        private oldListIndex: number[] = []
        private newListIndex: number[] = []

        private listLoading = true
        private listQuery = defaultProjectStatusQuery
        private listExcel = defaultProjectStatusExcelHeater

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private tempData = defaultProjectStatusData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTable, this.total)
        }

        async created() {
            this.getList()
        }

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBProjectStatus(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.oldListIndex = this.list.map((v) => v.position)
            this.newListIndex = this.oldListIndex.slice()
            this.$nextTick(() => {
                this.setSort()
            })
            this.listLoading = false
        }

        private async dragUpdateDatabaseList() {
            const IDataBaseFactoryDatas: IDataBaseProjectStatusData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseProjectStatusData = {
                    id: list.id,
                    position: index,
                    name: list.name,
                    value: list.value
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBProjectStatuss (IDataBaseFactoryDatas)
        }
        private setSort() {
            const el = (this.$refs.draggableTable as Vue).$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0] as HTMLElement
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

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultProjectStatusData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBProjectStatus(row.id, { id: row.id } )
            this.$notify({
                title: this.$t('notify.notify1.title') + "",
                message: this.$t('notify.notify1.message') + "",
                type: 'success',
                duration: 2000
            })
            this.list.splice(index, 1)
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
            const { data } = await updateDBProjectStatuss( results )
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
    .container {
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
        .container {
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


