<template>
    <div class="TableAdminComputer-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.computer.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.computer.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.computer.champs.champs5')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Computer" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Computer" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Computer" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>

                    <el-table-column :label="$t('tables.computer.champs.champs4')" min-width="250px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.computer.champs.champs5')" min-width="150px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.computer.champs.champs6')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.factory.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.computer.champs.champs7')" align="center" width="450" class-name="fixed-width">
                        <template slot-scope="{row}">
                            <el-button v-if="row.isServerMain!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'isServerMain')">{{ $t('tables.computer.button.button1') }}</el-button>
                            <el-button v-if="row.isServerMain!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'isServerMain')">{{ $t('tables.computer.button.button1') }}</el-button>

                            <el-button v-if="row.isServerLocal!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isServerLocal')">{{ $t('tables.computer.button.button2') }}</el-button>
                            <el-button v-if="row.isServerLocal!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isServerLocal')">{{ $t('tables.computer.button.button2') }}</el-button>

                            <el-button v-if="row.isComputerLocal !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isComputerLocal')">{{ $t('tables.computer.button.button3') }}</el-button>
                            <el-button v-if="row.isComputerLocal !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isComputerLocal')">{{ $t('tables.computer.button.button3') }}</el-button>

                            <el-button v-if="row.isComputerCarto !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isComputerCarto')">{{ $t('tables.computer.button.button4') }}</el-button>
                            <el-button v-if="row.isComputerCarto !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isComputerCarto')">{{ $t('tables.computer.button.button4') }}</el-button>

                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.computer.champs.champs8')" align="center" width="170" class-name="fixed-width">
                        <template slot-scope="{row, $index}">
                            <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                            <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Computer" :title="$t('tree.computerTree')" Find1="Factory" Find2="Computer" Find3=""></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditComputer className="Computer" TableName="Computer" :dialogFormVisible=dialogFormVisible
                              :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                              :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                              @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditComputer>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBComputers, updateDBComputers, updateDBComputer, deleteDBComputer, defaultComputerData, defaultComputerRules, defaultComputerQuery, defaultComputerExcelHeater } from '@/api/computers'
    import { getDBFactorys} from '@/api/factorys'

    import { IDataBaseComputerData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditComputer from "@/components/TableComponents/FormEdit/FormEditComputer.vue";

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminComputer',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditComputer,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private tableKey = 0
        private list: IDataBaseComputerData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultComputerQuery
        private listExcel = defaultComputerExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultComputerRules
        private tempData = defaultComputerData

        private sortable: Sortable | null = null

        async created() {
            const { data } = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.Type2Options = data.rows
            this.getList()
        }

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBComputers(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseComputerData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseComputerData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    isServerMain: list.isServerMain,
                    isServerLocal: list.isServerLocal,
                    isComputerLocal: list.isComputerLocal,
                    isComputerCarto: list.isComputerCarto,
                    idFactory: list.idFactory
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBComputers (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBaseComputerData = {
                id: datas.id,
                idNode: datas.idNode,
                name: datas.name,
                name1: datas.name1,
                position: datas.position,
                isServerMain: datas.isServerMain,
                isServerLocal: datas.isServerLocal,
                isComputerLocal: datas.isComputerLocal,
                isComputerCarto: datas.isComputerCarto,
                idFactory: datas.idFactory,
            }
            const { data } = await updateDBComputer(datas.id, updateDBData)
            const index = this.list.findIndex(v => v.id === data[0].id)
            this.list.splice(index, 1, data[0])
            this.dialogFormVisible = false
            this.$notify({
                title: this.$t('tables.generique.notify.notify3.title') + "",
                message: this.$t('tables.generique.notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultComputerData)
        }
        private async handleModifyValidationStatus(row: IDataBaseComputerData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "isServerMain") {
                Mess = this.$t('tables.Computer.message.message1') + ""
                row.isServerMain = status
            }
            if (niveau === "isServerLocal") {
                Mess = this.$t('tables.Computer.message.message2') + ""
                row.isServerLocal = status
            }
            if (niveau === "isComputerLocal") {
                Mess = this.$t('tables.Computer.message.message3') + ""
                row.isComputerLocal = status
            }
            if (niveau === "isComputerCarto") {
                Mess = this.$t('tables.Computer.message.message4') + ""
                row.isComputerCarto = status
            }
            const { data } = await updateDBComputer(row.id, { id: row.id, isServerMain: row.isServerMain, isServerLocal: row.isServerLocal, isComputerLocal: row.isComputerLocal, isComputerCarto: row.isComputerCarto})
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBComputer(row.id, { id: row.id } )
            this.$notify({
                title: this.$t('tables.generique.notify.notify1.title') + "",
                message: this.$t('tables.generique.notify.notify1.message') + "",
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
                message: 'Please do not upload files larger than 1m in size.',
                type: 'warning'
            })
            return false
        }
        private async handleSuccess({ results, header }: { results: any; header: string[]}) {
            //this.tableData = results
            const { data } = await updateDBComputers( results )
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
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, 1fr);
        grid-template-areas:
                "h h h h h h h h h h h h"
                ". f f f f f . e e e e ."
                ". t t t t t t t t t x x"
                ". . p p p p p p p p p ."
    }
    .header {
        //grid-column: span 12;
        grid-area:h;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .filter {
        //grid-column: span 8;
        grid-area: f;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .extra {
        //grid-column: span 8;
        grid-area: e;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .table {
        //grid-column: span 8;
        grid-area: t;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .treeview {
        //grid-column: span 4;
        grid-area: x;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }
    .pagination {
        //grid-column: span 12;
        grid-area: p;
        background:#eee;
        padding:1em;
        border:#333 1px solid;
    }

    .draggable-handler {
        cursor: pointer;
    }
    .show-d {
        margin-top: 15px;
    }
</style>
