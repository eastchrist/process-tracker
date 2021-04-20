<template>
    <div class="TableAdminFactory-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.factory.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.factory.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Factory" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Factory" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Factory" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs4')" min-width="250px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs5')" min-width="150px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs6')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.langue | langueFilter }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs7')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.address }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs8')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.currency }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs9')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.currencyEuro }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs10')" align="center" width="320" class-name="fixed-width">
                        <template slot-scope="{row}">
                            <el-button v-if="row.isCartography!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'isCartography')">{{ $t('tables.factory.button.button1') }}</el-button>
                            <el-button v-if="row.isCartography!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'isCartography')">{{ $t('tables.factory.button.button1') }}</el-button>

                            <el-button v-if="row.isOptimisation!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isOptimisation')">{{ $t('tables.factory.button.button2') }}</el-button>
                            <el-button v-if="row.isOptimisation!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isOptimisation')">{{ $t('tables.factory.button.button2') }}</el-button>

                            <el-button v-if="row.isTraceability !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isTraceability')">{{ $t('tables.factory.button.button3') }}</el-button>
                            <el-button v-if="row.isTraceability !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isTraceability')">{{ $t('tables.factory.button.button3') }}</el-button>

                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.factory.champs.champs11')" align="center" width="170" class-name="fixed-width">
                        <template slot-scope="{row, $index}">
                            <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                            <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Factory"  :title="$t('tree.factoryTree')"  Find1="Factory" Find2="" Find3=""></TreeAdminNodes>
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
            Pagination,
            FormEditFactory
        },
        filters: {
            langueFilter: (type: string) => {
                return langueTypeKeyValue[type]
            }
        }
    })
    export default class Dashboard extends Vue {
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
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultFactoryRules
        private tempData = defaultFactoryData

        private sortable: Sortable | null = null

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
                title: this.$t('tables.generique.notify.notify3.title') + "",
                message: this.$t('tables.generique.notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
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
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, 1fr);
        grid-template-areas:
                "h h h h h h h h h h h h"
                ". f f f f f . e e e e ."
                ". t t t t t t t t t x x"
                ". p p p p p p p p p . ."
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

