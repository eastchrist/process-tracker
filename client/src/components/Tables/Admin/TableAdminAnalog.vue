<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.analog.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.analog.placeholder.placeholder2')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Analog" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Analog" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="Analog" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.analog.title')">
                        <el-table-column align="center" label="Drag" :min-width="designTable.columns[0].width" >
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs3')"  :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs4')"  :min-width="designTable.columns[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs5')"  :min-width="designTable.columns[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tag }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs6')"  :min-width="designTable.columns[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.address }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs7')"  :min-width="designTable.columns[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.type }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs8')"  :min-width="designTable.columns[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idEquip }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs9')"  :min-width="designTable.columns[7].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idTank }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs10')" :min-width="designTable.columns[8].width">
                            <template slot-scope="{row}">
                                <span >{{ row.indexCreation }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.analog.champs.champs12')" :min-width="designTable.columns[9].width" >
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
            <FormEditAnalog className="Analog" TableName="Analog" :dialogFormVisible=dialogFormVisible
                            :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                            :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                            @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" @EditFormUpdate="EditFormUpdate">
            </FormEditAnalog>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.analog.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBAnalogs, updateDBAnalogs, updateDBAnalog, deleteDBAnalog, defaultAnalogData, defaultAnalogRules, defaultAnalogQuery, defaultAnalogExcelHeater } from '@/api/analogs'
    import { getDBFactorys} from '@/api/factorys'
    import { IDataBaseAnalogData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditAnalog from "@/components/TableComponents/FormEdit/FormEditAnalog.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultAnalogDesignTable } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminAnalog',
        components: {
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditAnalog,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {

        private designTable = defaultAnalogDesignTable

        private tableKey = 0
        private list: IDataBaseAnalogData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultAnalogQuery
        private listExcel = defaultAnalogExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultAnalogRules
        private tempData = defaultAnalogData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getTableRowClass( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
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
            const { data } = await getDBAnalogs(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseAnalogData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseAnalogData = {
                    id: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    tag: list.tag,
                    address: list.address,
                    type: list.type,
                    idEquip: list.idEquip,
                    idTank: list.idTank,
                    indexCreation: list.indexCreation
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBAnalogs (IDataBaseFactoryDatas)
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
        private async EditFormAdd( datas: any ) {
            const updateDBData: IDataBaseAnalogData = {
                id: datas.id,
                name: datas.name,
                name1: datas.name1,
                tag: datas.tag,
                address: datas.address,
                type: datas.type,
                position: datas.position,
                idEquip: datas.idEquip,
                idTank: datas.idTank,
                indexCreation: datas.indexCreation
            }
            const { data } = await updateDBAnalog(datas.id, updateDBData)
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
            const updateDBData: IDataBaseAnalogData = {
                id: datas.id,
                name: datas.name,
                name1: datas.name1,
                tag: datas.tag,
                address: datas.address,
                type: datas.type,
                position: datas.position,
                idEquip: datas.idEquip,
                idTank: datas.idTank,
                indexCreation: datas.indexCreation
            }
            const { data } = await updateDBAnalog(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultAnalogData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBAnalog(row.id, { id: row.id } )
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
            const { data } = await updateDBAnalogs( results )
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



