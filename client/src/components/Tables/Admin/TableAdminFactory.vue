<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.factory.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Factory" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Factory" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="Factory" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table
                        ref="draggableTable" row-key="position" :key="tableKey"
                        stripe v-loading="listLoading" :data="list"
                        border fit highlight-current-row @sort-change="sortChange"
                        style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.factory.title')">
                        <el-table-column label="Drag" :min-width="designTable.columns[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs4')" :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs5')" :min-width="designTable.columns[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs6')" :min-width="designTable.columns[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.langue | langueFilter }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs7')" :min-width="designTable.columns[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.address }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs8')" :min-width="designTable.columns[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.logoClient }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs9')" :min-width="designTable.columns[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.logoContractor }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs10')" :min-width="designTable.columns[7].width">
                            <template slot-scope="{row}">
                                <span >{{ row.currency }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs11')" :min-width="designTable.columns[8].width">
                            <template slot-scope="{row}">
                                <span >{{ row.currencyEuro }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs12')" :min-width="designTable.columns[9].width">
                            <template slot-scope="{row}">
                                <el-button v-if="row.isCartography!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'isCartography')">{{ $t('tables.factory.button.button1') }}</el-button>
                                <el-button v-if="row.isCartography!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'isCartography')">{{ $t('tables.factory.button.button1') }}</el-button>

                                <el-button v-if="row.isOptimisation!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isOptimisation')">{{ $t('tables.factory.button.button2') }}</el-button>
                                <el-button v-if="row.isOptimisation!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isOptimisation')">{{ $t('tables.factory.button.button2') }}</el-button>

                                <el-button v-if="row.isTraceability !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isTraceability')">{{ $t('tables.factory.button.button3') }}</el-button>
                                <el-button v-if="row.isTraceability !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isTraceability')">{{ $t('tables.factory.button.button3') }}</el-button>

                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.factory.champs.champs13')" :min-width="designTable.columns[10].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Factory"  :title="$t('tree.factoryTree.title')"  Find1="Factory" Find2="" Find3=""></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditFactory className="Factory" TableName="Factory" :dialogFormVisible=dialogFormVisible
                             :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                             :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                             @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditFactory>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.factory.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBFactorys, updateDBFactorys, updateDBFactory, deleteDBFactory, defaultFactoryData, defaultFactoryRules, defaultFactoryQuery, defaultFactoryExcelHeater } from '@/api/factorys'
    import { IDataBaseFactoryData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditFactory from "@/components/TableComponents/FormEdit/FormEditFactory.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultFactoryDesignTable } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const Type2Options = [
        { key: "en", displayName: 'English' },
        { key: "fr", displayName: 'French' },
        { key: "es", displayName: 'Spanish' },
    ]
    const langueTypeKeyValue = Type2Options.reduce((acc: { [key: string]: string }, cur) => {
        acc[cur.key] = cur.displayName
        return acc
    }, {}) as { [key: string]: string }

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }


    @Component({
        name: 'TableAdminFactory',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditFactory,
            FormUpdateNodeError,
            Pagination
        },
        filters: {
            langueFilter: (type: string) => {
                return langueTypeKeyValue[type]
            }
        }
    })
    export default class Dashboard extends Vue {
        private designTable = defaultFactoryDesignTable

        private tableKey = 0
        private list: IDataBaseFactoryData[] = []
        private total = 0
        private oldListIndex: number[] = []
        private newListIndex: number[] = []

        private listLoading = true
        private listQuery = defaultFactoryQuery
        private listExcel = defaultFactoryExcelHeater

        private Type1Options = Type1Options
        private Type2Options = Type2Options

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultFactoryRules
        private tempData = defaultFactoryData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTable, this.total)
        }

        //beforeDestroy() {}
        created() {
            this.getList()
        }
        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBFactorys(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseFactoryData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseFactoryData = {
                    id: list.id,
                    idNode: list.id,
                    name: list.name,
                    name1: list.name1,
                    position: index,
                    langue: list.langue,
                    address: list.address,
                    logoClient: list.logoClient,
                    logoContractor: list.logoContractor,
                    currency: list.currency,
                    currencyEuro: list.currencyEuro,
                    isCartography: list.isCartography,
                    isOptimisation: list.isOptimisation,
                    isTraceability: list.isTraceability
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBFactorys (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBaseFactoryData = {
                id: datas.id,
                idNode: datas.idNode,
                name: datas.name,
                name1: datas.name1,
                langue: datas.langue,
                address: datas.address,
                logoClient: datas.logoClient,
                logoContractor: datas.logoContractor,
                currency: datas.currency,
                currencyEuro: datas.currencyEuro,
                position: datas.position,
                isCartography: datas.isCartography,
                isOptimisation: datas.isOptimisation,
                isTraceability: datas.isTraceability,
            }
            const { data } = await updateDBFactory(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultFactoryData)
        }
        private async handleModifyValidationStatus(row: IDataBaseFactoryData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "isCartography") {
                Mess = this.$t('tables.factory.message.message1') + ""
                row.isCartography = status
            }
            if (niveau === "isOptimisation") {
                Mess = this.$t('tables.factory.message.message2') + ""
                row.isOptimisation = status
            }
            if (niveau === "isTraceability") {
                Mess = this.$t('tables.factory.message.message3') + ""
                row.isTraceability = status
            }
            const { data } = await updateDBFactory(row.id, { id: row.id, isCartography: row.isCartography, isTraceability: row.isTraceability, isOptimisation: row.isOptimisation})
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBFactory(row.id, { id: row.id } )
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
            const { data } = await updateDBFactorys( results )
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

