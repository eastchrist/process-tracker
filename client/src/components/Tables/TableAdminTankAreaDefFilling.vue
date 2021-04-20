<template>
    <div class="TableAdminTankAreaDefFilling-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.tankAreaDefFilling.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.tankAreaDefFilling.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="TankAreaDefFilling" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="TankAreaDefFilling" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="TankAreaDefFilling" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange" >>
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>

                    <!--  SUB TABLE -->
                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs4')" type="expand" width="100px" >
                        <template v-slot="{row}">
                            <el-table :key="subTableKey" :data="row.options" border fit highlight-current-row style="width: 100%;" >
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs1')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.number }}</span></template>
                                </el-table-column>
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs2')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.idTank }}</span></template>
                                </el-table-column>
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs3')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.inLine }}</span></template>
                                </el-table-column>
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs4')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.inColl }}</span></template>
                                </el-table-column>
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs5')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.volCollInlet }}</span></template>
                                </el-table-column>
                                <el-table-column :label="$t('tables.tankAreaDefFilling.subTable.champs6')" min-width="100px">
                                    <template v-slot="{row}"><span >{{ row.volCollOutlet }}</span></template>
                                </el-table-column>
                            </el-table>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs5')" min-width="250px">
                        <template v-slot="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs6')" min-width="150px">
                        <template v-slot="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs7')" min-width="150px">
                        <template v-slot="{row}">
                            <span >{{ row.dataComment }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs8')" min-width="150px">
                        <template v-slot="{row}">
                            <span >{{ row.dataType }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.tankAreaDefFilling.champs.champs9')" align="center" width="170" class-name="fixed-width">
                        <template v-slot="{row, $index}">
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
            <FormEditTankAreaDefFilling className="TankAreaDefFilling" TableName="TankAreaDefFilling" :dialogFormVisible=dialogFormVisible
                                        :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                                        :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                                        @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditTankAreaDefFilling>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBTankAreaDefFillings, updateDBTankAreaDefFillings, updateDBTankAreaDefFilling, deleteDBTankAreaDefFilling, defaultTankAreaDefFillingData, defaultTankAreaDefFillingRules, defaultTankAreaDefFillingQuery, defaultTankAreaDefFillingExcelHeater} from '@/api/tankAreaDefFillings'
    import {getDBAreas} from "@/api/areas";

    import { IDataBaseTankAreaDefFillingData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import TreeAdminNodes from '@/components/Trees/Tree_Admin_Nodes.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditTankAreaDefFilling from "@/components/TableComponents/FormEdit/FormEditTankAreaDefFilling.vue";
    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const textMap = {
        update: 'Edit',
        create: 'Create'
    }
    @Component({
        name: 'TableAdminTankAreaDefFilling',
        components: {
            TreeAdminNodes,
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditTankAreaDefFilling,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private tableKey = 0
        private subTableKey = 0
        private list: IDataBaseTankAreaDefFillingData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultTankAreaDefFillingQuery
        private listExcel = defaultTankAreaDefFillingExcelHeater

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultTankAreaDefFillingRules
        private tempData = defaultTankAreaDefFillingData

        private sortable: Sortable | null = null

        async created() {
            const { data } = await getDBAreas( { page: 1, limit: 1000, name: undefined } )
            this.Type2Options = data.rows
            this.getList()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBTankAreaDefFillings(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseTankAreaDefFillingData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseTankAreaDefFillingData = {
                    id: list.id,
                    idNode: list.id,
                    position: index,
                    name: list.name,
                    name1: list.name1,
                    dataComment: list.dataComment,
                    dataType: list.dataType,
                    options: list.options
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBTankAreaDefFillings (IDataBaseFactoryDatas)
        }
        private setSort() {
            const el = (this.$refs.draggableTable as Vue).$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0] as HTMLElement
            console.log("********************setSort list")
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
            const updateDBData: IDataBaseTankAreaDefFillingData = {
                id: datas.id,
                idNode: datas.idNode,
                position: datas.position,
                name: datas.name,
                name1: datas.name1,
                dataComment: datas.dataComment,
                dataType: datas.dataType,
                options: datas.options,
            }
            const { data } = await updateDBTankAreaDefFilling(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultTankAreaDefFillingData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBTankAreaDefFilling(row.id, { id: row.id } )
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
            const { data } = await updateDBTankAreaDefFillings( results )
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
