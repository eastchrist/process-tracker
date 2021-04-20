<template>
    <div class="TableAdminAnalog-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.analog.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.analog.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.analog.champs.champs5')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Analog" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Analog" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Analog" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>

                    <el-table-column :label="$t('tables.analog.champs.champs3')" min-width="140px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.analog.champs.champs4')" min-width="140px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.analog.champs.champs5')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.tag }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.analog.champs.champs6')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.address }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.analog.champs.champs7')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.type }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.analog.champs.champs8')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.idEquip }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.analog.champs.champs9')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.idTank }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.analog.champs.champs10')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.indexCreation }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.analog.champs.champs12')" align="center" width="170" class-name="fixed-width">
                        <template slot-scope="{row, $index}">
                            <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                            <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                        </template>
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
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
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
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultAnalogRules
        private tempData = defaultAnalogData

        private sortable: Sortable | null = null

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
                title: this.$t('tables.generique.notify.notify2.title') + "",
                message: this.$t('tables.generique.notify.notify2.message') + "",
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
                title: this.$t('tables.generique.notify.notify3.title') + "",
                message: this.$t('tables.generique.notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultAnalogData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBAnalog(row.id, { id: row.id } )
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
                message: 'Please do not upload files larger than 1m in size.',
                type: 'warning'
            })
            return false
        }
        private async handleSuccess({ results, header }: { results: any; header: string[]}) {
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



