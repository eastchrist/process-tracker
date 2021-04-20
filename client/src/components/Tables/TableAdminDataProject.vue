<template>
    <div class="TableAdminDataProject-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.dataProject.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.dataProject.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.dataProject.champs.champs5')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="DataProject" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="DataProject" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
            </div>
            <div class="table">
                <el-table :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column :label="$t('tables.dataProject.champs.champs1')" prop="id" sortable="custom" align="center" width="100" >
                        <template slot-scope="{row}"><span>{{ row.id }}</span></template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.dataProject.champs.champs2')" width="100" >
                        <template slot-scope="{row}">
                            <span >{{ row.position }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.dataProject.champs.champs3')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.comment }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.dataProject.champs.champs4')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.creationDate }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.dataProject.champs.champs5')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.dueDate }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.dataProject.champs.champs6')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.idProject }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.dataProject.champs.champs7')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.status }}</span>
                        </template>
                    </el-table-column>

                    <el-table-column :label="$t('tables.dataProject.champs.champs8')" align="center" width="170" class-name="fixed-width">
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
            <FormEditDataProject className="DataProject" TableName="DataProject" :dialogFormVisible=dialogFormVisible
                                 :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                                 :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                                 @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" @EditFormUpdate="EditFormUpdate">
            </FormEditDataProject>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'

    import { getDBDataProjects, updateDBDataProjects, updateDBDataProject, deleteDBDataProject, defaultDataProjectData, defaultDataProjectRules, defaultDataProjectQuery, defaultDataProjectExcelHeater } from '@/api/dataProjects'
    //import { getDBProjects} from '@/api/projects'
    import { IDataBaseDataProjectData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'

    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditDataProject from "@/components/TableComponents/FormEdit/FormEditDataProject.vue";

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminDataProject',
        components: {
            ExportToExcel,
            ImportFromExcel,
            FormEditDataProject,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private tableKey = 0
        private list: IDataBaseDataProjectData[] = []
        private total = 0
        private listLoading = true
        private listQuery = defaultDataProjectQuery
        private listExcel = defaultDataProjectExcelHeater
        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap
        private rules = defaultDataProjectRules
        private tempData = defaultDataProjectData

        private tableData: any = []
        private tableHeader: string[] = []

        async created() {
            this.getList()
        }

        private async getList() {
            console.log("getList")
            this.listLoading = true
            const { data } = await getDBDataProjects(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.listLoading = false
        }

        //Coming from FormEdit
        private EditFormCancel() {
            this.dialogFormVisible = false
        }
        private async EditFormAdd( datas: any ) {
            const updateDBData: IDataBaseDataProjectData = {
                id: datas.id,
                position: datas.position,
                comment: datas.comment,
                creationDate: datas.creationDate,
                dueDate: datas.dueDate,
                idProject: datas.idProject,
                status: datas.status,
            }
            const { data } = await updateDBDataProject(datas.id, updateDBData)
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
            const updateDBData: IDataBaseDataProjectData = {
                id: datas.id,
                position: datas.position,
                comment: datas.comment,
                creationDate: datas.creationDate,
                dueDate: datas.dueDate,
                idProject: datas.idProject,
                status: datas.status,
            }
            const { data } = await updateDBDataProject(datas.id, updateDBData )
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
            this.tempData = cloneDeep(defaultDataProjectData)
        }

        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBDataProject(row.id, { id: row.id } )
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
            const { data } = await updateDBDataProjects( results )
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

