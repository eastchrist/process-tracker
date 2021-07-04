<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.tank.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>

                <el-select v-model="listQuery.idTankArea" :placeholder="$t('tables.tank.placeholder.placeholder2')" clearable class="filter-item" >
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.tank.placeholder.placeholder3')" clearable class="filter-item" >
                    <el-option v-for="item in Type3Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.tank.placeholder.placeholder4')" clearable class="filter-item" >
                    <el-option v-for="item in Type4Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>


                <el-select v-model="listQuery.idTankDef" :placeholder="$t('tables.tank.placeholder.placeholder5')" clearable class="filter-item" >
                    <el-option v-for="item in Type5Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Tank" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Tank" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="Tank" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.tank.title')">
                        <el-table-column label="Drag" :min-width="designTable.columns[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs4')" :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <span >{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs5')" :min-width="designTable.columns[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs6')" :min-width="designTable.columns[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tankArea.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs7')" :min-width="designTable.columns[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tankArea.area.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs8')" :min-width="designTable.columns[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tankArea.area.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs9')" :min-width="designTable.columns[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idTankDef }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.tank.champs.champs10')" :min-width="designTable.columns[7].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Tank" :title="$t('tree.tankTree.title')" Find1="Area" Find2="TankArea" Find3="Tank"></TreeAdminNodes>
                <TreeAdminNodes class-name="TreeNodes_Tank" :title="$t('tree.tankDefTree.title')" Find1="TankDef" Find2="" Find3=""></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditTank className="Tank" TableName="Tank" :dialogFormVisible=dialogFormVisible
                          :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                          :Type1Options=Type1Options :Type2Options=Type2Options :Type5Options=Type5Options :tempData=tempData
                          @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditTank>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.tank.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBTanks, updateDBTanks, updateDBTank, deleteDBTank, defaultTankData, defaultTankRules, defaultTankQuery, defaultTankExcelHeater } from '@/api/tanks'
    import { getDBTankAreas} from '@/api/tankAreas'
    import { getDBAreas} from '@/api/areas'
    import { getDBFactorys} from '@/api/factorys'
    import { IDataBaseTankData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditTank from "@/components/TableComponents/FormEdit/FormEditTank.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultTankDesignTable } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminTank',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditTank,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable = defaultTankDesignTable

        private tableKey = 0
        private list: IDataBaseTankData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultTankQuery
        private listExcel = defaultTankExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []
        private Type3Options = []
        private Type4Options = []
        private Type5Options = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultTankRules
        private tempData = defaultTankData

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
            let data: any
            data = await getDBTankAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.data.rows
            data = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
            this.Type3Options = data.data.rows
            data = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.Type4Options = data.data.rows

            this.getList()
        }

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBTanks(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseTankData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseTankData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    idTankArea: list.idTankArea,
                    idTankDef: list.idTankDef
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBTanks (IDataBaseFactoryDatas)
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
        private async EditFormUpdate( datas: any ) {
            const updateDBData: IDataBaseTankData = {
                id: datas.id,
                idNode: datas.idNode,
                name: datas.name,
                name1: datas.name1,
                position: datas.position,
                idTankArea: datas.idTankArea,
                idTankDef: datas.idTankDef,
            }
            const { data } = await updateDBTank(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultTankData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBTank(row.id, { id: row.id } )
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
            const { data } = await updateDBTanks( results )
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
                "filter filter filter filter filter filter filter filter filter filter .      .     "
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  extra  .      .     "
                "table  table  table  table  table  table  table  table  table  table  treev  treev "
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
