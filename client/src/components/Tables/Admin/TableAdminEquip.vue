<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.equip.placeholder.placeholder1')" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idPlc" :placeholder="$t('tables.equip.placeholder.placeholder2')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionPlc" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.equip.placeholder.placeholder3')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionArea" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.equip.placeholder.placeholder4')" clearable class="filter-item" >
                    <el-option v-for="item in TypeOptionFactory" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Equip" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel"  className="ImportFromExcel" TableName="Equip" :TableList=list :defaultExcelHeader="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode"  className="UpdateFromNode" TableName="Equip" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row @sort-change="sortChange" style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="designTable.title.text">
                        <el-table-column align="center" :label="designTable.header.text[0]" :min-width="designTable.columns.design[0].width" >
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[1]" :min-width="designTable.columns.design[1].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[2]" :min-width="designTable.columns.design[2].width">
                            <template slot-scope="{row}">
                                <span >{{ row.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[3]" :min-width="designTable.columns.design[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.menu }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[4]" :min-width="designTable.columns.design[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.plc.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[5]" :min-width="designTable.columns.design[5].width">
                            <template slot-scope="{row}">
                                <span >{{ row.plc.area.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[6]" :min-width="designTable.columns.design[6].width">
                            <template slot-scope="{row}">
                                <span >{{ row.plc.area.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[7]" :min-width="designTable.columns.design[7].width">
                            <template slot-scope="{row}">
                                <span >{{ row.idEquipDef }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[8]" :min-width="designTable.columns.design[8].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Equip" :title="$t('tree.equipTree.title')" Find1="Area" Find2="Plc" Find3="Equip"></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditEquip className="Equip" TableName="Equip" :dialogFormVisible=dialogFormVisible
                           :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                           :Type1Options=Type1Options :TypeOptionPlc=TypeOptionPlc :tempData=tempData
                           @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditEquip>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.equip.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBEquips, updateDBEquips, updateDBEquip, deleteDBEquip, defaultEquipData, defaultEquipRules, defaultEquipQuery, defaultEquipExcelHeader } from '@/api/equips'
    import { getDBPlcs} from '@/api/plcs'
    import { getDBAreas} from '@/api/areas'
    import { getDBFactorys} from '@/api/factorys'
    import { IDataBaseEquipData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditEquip from "@/components/TableComponents/FormEdit/FormEditEquip.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultEquipDesignTable } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminEquip',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditEquip,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private designTable: ITableDataUiDesignedWithoutData = defaultEquipDesignTable

        private tableKey = 0
        private list: IDataBaseEquipData[] = []
        private total = 0
        private oldRows: number[] = []
        private newRows: number[] = []

        private listLoading = true
        private listQuery = defaultEquipQuery
        private listExcel = defaultEquipExcelHeader

        private Type1Options = Type1Options
        private TypeOptionPlc = []
        private TypeOptionArea = []
        private TypeOptionFactory = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultEquipRules
        private tempData = defaultEquipData

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
            data = await getDBPlcs( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionPlc = data.data.rows
            data = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionArea = data.data.rows
            data = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionFactory = data.data.rows
            this.getList()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBEquips(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseEquipData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseEquipData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    menu: list.menu,
                    idPlc: list.idPlc,
                    idEquipDef: list.idEquipDef
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBEquips (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBaseEquipData = {
                id: datas.id,
                idNode: datas.idNode,
                position: datas.position,
                name: datas.name,
                name1: datas.name1,
                menu: datas.menu,
                idPlc: datas.idPlc,
                idEquipDef: datas.idEquipDef,
            }
            const { data } = await updateDBEquip(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultEquipData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBEquip(row.id, { id: row.id } )
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
            const { data } = await updateDBEquips( results )
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
