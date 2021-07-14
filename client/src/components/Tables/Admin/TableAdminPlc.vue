<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.plc.placeholder.placeholder1')" class="filter-item" @keyup.enter.native="handleFilter"/>

                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.plc.placeholder.placeholder2')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionFactory" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.plc.placeholder.placeholder3')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionArea" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <el-select v-model="listQuery.idServer" :placeholder="$t('tables.plc.placeholder.placeholder4')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionServer" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Plc" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Plc" :TableList=list :defaultExcelHeader="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="Plc" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
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
                        <el-table-column :label="designTable.header.text[1]" :min-width="designTable.columns.design[1].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[2]" :min-width="designTable.columns.design[2].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[3]" :min-width="designTable.columns.design[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.server.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[4]" :min-width="designTable.columns.design[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.area.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[5]" :min-width="designTable.columns.design[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.area.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[6]" :min-width="designTable.columns.design[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.brand }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[7]" :min-width="designTable.columns.design[7].width">
                            <template slot-scope="{row}">
                                <span >{{ row.connection }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[8]" :min-width="designTable.columns.design[8].width">
                            <template slot-scope="{row}">
                                <span >{{ row.ip }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[9]" :min-width="designTable.columns.design[9].width">
                            <template slot-scope="{row}">
                                <span >{{ row.rack }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[10]" :min-width="designTable.columns.design[10].width">
                            <template slot-scope="{row}">
                                <span >{{ row.slot }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[11]" :min-width="designTable.columns.design[11].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>

            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Plc" :title="$t('tree.plcTree.title')" Find1="Factory" Find2="Area" Find3="Plc"></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditPlc className="Plc" TableName="Plc" :dialogFormVisible=dialogFormVisible
                         :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                         :Type1Options=Type1Options :TypeOptionArea=TypeOptionArea :TypeOptionServer=TypeOptionServer :tempData=tempData
                         @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditPlc>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.plc.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBPlcs, updateDBPlcs, updateDBPlc, deleteDBPlc, defaultPlcData, defaultPlcRules, defaultPlcQuery, defaultPlcExcelHeader } from '@/api/plcs'
    import {getDBAreas} from "@/api/areas";
    import {getDBServers} from "@/api/servers";
    import { getDBFactorys} from '@/api/factorys'

    import { IDataBasePlcData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditPlc from "@/components/TableComponents/FormEdit/FormEditPlc.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultPlcDesignTable } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminPlc',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditPlc,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable: ITableDataUiDesignedWithoutData = defaultPlcDesignTable

        private tableKey = 0
        private list: IDataBasePlcData[] = []
        private total = 0
        private oldRows: number[] = []
        private newRows: number[] = []

        private listLoading = true
        private listQuery = defaultPlcQuery
        private listExcel = defaultPlcExcelHeader

        private Type1Options = Type1Options
        private TypeOptionServer = []
        private TypeOptionArea = []
        private TypeOptionFactory = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultPlcRules
        private tempData = defaultPlcData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }

        async created() {
            let data: any
            data = await getDBAreas( { page: 1, limit: 1000, name: undefined } )
            this.TypeOptionArea = data.data.rows
            data = await getDBServers( { page: 1, limit: 1000, name: undefined } )
            this.TypeOptionServer = data.data.rows
            data = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionFactory = data.data.rows
            this.getList()
        }
        //beforeDestroy() {}

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBPlcs(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBasePlcData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBasePlcData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    brand: list.brand,
                    connection: list.connection,
                    slot: list.slot,
                    rack: list.rack,
                    ip: list.ip,
                    idServer: list.idServer,
                    idArea: list.idArea
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBPlcs (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBasePlcData = {
                id: datas.id,
                idNode: datas.idNode,
                position: datas.position,
                name: datas.name,
                name1: datas.name1,
                brand: datas.brand,
                connection: datas.connection,
                slot: datas.slot,
                rack: datas.rack,
                ip: datas.ip,
                idServer: datas.idServer,
                idArea: datas.idArea,
            }
            const { data } = await updateDBPlc(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultPlcData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBPlc(row.id, { id: row.id } )
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
            const { data } = await updateDBPlcs( results )
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
