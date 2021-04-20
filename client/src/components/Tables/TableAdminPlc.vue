<template>
    <div class="TableAdminPlc-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.plc.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.plc.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idServer" :placeholder="$t('tables.plc.champs.champs4')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type3Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.plc.champs.champs5')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Plc" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Plc" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Plc" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs4')" min-width="250px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs5')" min-width="250px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs6')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.server.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.plc.champs.champs7')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.area.name }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs8')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.brand }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.plc.champs.champs9')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.connection }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.plc.champs.champs10')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.ip }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs11')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.rack }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.plc.champs.champs12')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.slot }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.plc.champs.champs13')" align="center" width="170" class-name="fixed-width">
                        <template slot-scope="{row, $index}">
                            <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                            <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>

            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Plc" :title="$t('tree.plcTree')" Find1="Factory" Find2="Area" Find3="Plc"></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditPlc className="Plc" TableName="Plc" :dialogFormVisible=dialogFormVisible
                         :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                         :Type1Options=Type1Options :Type2Options=Type2Options :Type3Options=Type3Options :tempData=tempData
                         @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditPlc>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBPlcs, updateDBPlcs, updateDBPlc, deleteDBPlc, defaultPlcData, defaultPlcRules, defaultPlcQuery, defaultPlcExcelHeater } from '@/api/plcs'
    import {getDBAreas} from "@/api/areas";
    import {getDBServers} from "@/api/servers";

    import { IDataBasePlcData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditPlc from "@/components/TableComponents/FormEdit/FormEditPlc.vue";
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
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private tableKey = 0
        private list: IDataBasePlcData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultPlcQuery
        private listExcel = defaultPlcExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []
        private Type3Options = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultPlcRules
        private tempData = defaultPlcData

        private sortable: Sortable | null = null

        async created() {
            let data: any
            data = await getDBAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.data.rows
            data = await getDBServers( { page: 1, limit: 1000, name: undefined } )
            this.Type3Options = data.data.rows
            this.getList()
        }
        //beforeDestroy() {}

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBPlcs(this.listQuery)
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
                title: this.$t('tables.generique.notify.notify3.title') + "",
                message: this.$t('tables.generique.notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultPlcData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBPlc(row.id, { id: row.id } )
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
