<template>
    <div class="TableAdminTank-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.tank.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.tank.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idTankArea" :placeholder="$t('tables.tank.champs.champs6')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idTankDef" :placeholder="$t('tables.tank.champs.champs7')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type3Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Tank" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Tank" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Tank" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>

                    <el-table-column :label="$t('tables.tank.champs.champs4')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tank.champs.champs5')" min-width="150px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.tank.champs.champs6')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.tankArea.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tank.champs.champs7')" min-width="150px">
                        <template slot-scope="{row}">
                            <span >{{ row.idTankDef }}</span>
                        </template>
                    </el-table-column>


                    <el-table-column :label="$t('tables.tank.champs.champs8')" align="center" width="170" class-name="fixed-width">
                        <template slot-scope="{row, $index}">
                            <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                            <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <div class="treeview">
                <TreeAdminNodes class-name="TreeNodes_Tank" :title="$t('tree.tankTree')" Find1="Area" Find2="TankArea" Find3="Tank"></TreeAdminNodes>
                <TreeAdminNodes class-name="TreeNodes_Tank" :title="$t('tree.tankDefTree')" Find1="TankDef" Find2="" Find3=""></TreeAdminNodes>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditTank className="Tank" TableName="Tank" :dialogFormVisible=dialogFormVisible
                          :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                          :Type1Options=Type1Options :Type2Options=Type2Options :Type3Options=Type3Options :tempData=tempData
                          @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditTank>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBTanks, updateDBTanks, updateDBTank, deleteDBTank, defaultTankData, defaultTankRules, defaultTankQuery, defaultTankExcelHeater } from '@/api/tanks'
    import { getDBTankAreas} from '@/api/tankAreas'
    import { IDataBaseTankData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditTank from "@/components/TableComponents/FormEdit/FormEditTank.vue";


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
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
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

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultTankRules
        private tempData = defaultTankData

        private sortable: Sortable | null = null

        async created() {
            const { data } = await getDBTankAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.rows
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
                title: this.$t('tables.generique.notify.notify3.title') + "",
                message: this.$t('tables.generique.notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultTankData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBTank(row.id, { id: row.id } )
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
