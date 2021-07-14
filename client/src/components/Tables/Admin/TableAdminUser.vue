<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.username" :placeholder="$t('tables.password.placeholder.placeholder1')" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.password.placeholder.placeholder2')" clearable class="filter-item">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Password" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Password" :TableList=list :defaultExcelHeader="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload" ></ImportFromExcel>
            </div>
            <div class="table">
                <!--  <el-table  -->

                <!-- Design Table    -->
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row
                          style="width: 100%;" @sort-change="sortChange" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="designTable.title.text">
                        <el-table-column align="center" :label="designTable.header.text[0]" :min-width="designTable.columns.design[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[1]" :min-width="designTable.columns.design[1].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.username }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[2]" :min-width="designTable.columns.design[2].width">
                            <template slot-scope="{row}">
                                <span >{{ row.email }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[3]" :min-width="designTable.columns.design[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[4]" :min-width="designTable.columns.design[4].width" class-name="fixed-width">
                            <template slot-scope="{row}">
                                <el-button v-if="row.isAdmin!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'isAdmin')">{{ $t('tables.password.button.button1') }}</el-button>
                                <el-button v-if="row.isAdmin!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'isAdmin')">{{ $t('tables.password.button.button1') }}</el-button>

                                <el-button v-if="row.isManager!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isManager')">{{ $t('tables.password.button.button2') }}</el-button>
                                <el-button v-if="row.isManager!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isManager')">{{ $t('tables.password.button.button2') }}</el-button>

                                <el-button v-if="row.isOperator!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isOperator')">{{ $t('tables.password.button.button3') }}</el-button>
                                <el-button v-if="row.isOperator!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isOperator')">{{ $t('tables.password.button.button3') }}</el-button>

                                <el-button v-if="row.isVisitor!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isVisitor')">{{ $t('tables.password.button.button4') }}</el-button>
                                <el-button v-if="row.isVisitor!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isVisitor')">{{ $t('tables.password.button.button4') }}</el-button>

                                <el-button v-if="row.isActif!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'isActif')">{{ $t('tables.password.button.button5') }}</el-button>
                                <el-button v-if="row.isActif!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'isActif')">{{ $t('tables.password.button.button5') }}</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column :label="designTable.header.text[5]" :min-width="designTable.columns.design[5].width" class-name="fixed-width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditPassword className="Password" TableName="Password" :dialogFormVisible=dialogFormVisible
                              :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                              :Type1Options=Type1Options :Type2Options=Type2Options :tempData=tempData
                              @EditFormCancel="EditFormCancel" @EditFormUpdate="EditFormUpdate">
            </FormEditPassword>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBUsers, updateDBUsers, updateDBUser, deleteDBUser, defaultUserData, defaultUserRules, defaultUserQuery, defaultUserExcelHeader } from '@/api/users'
    import { getDBFactorys} from '@/api/factorys'
    import { IDataBaseUserData } from '@/api/types'
    import Pagination from '@/components/Pagination/index.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from "@/components/UploadExcel/index.vue";
    import FormEditPassword from "@/components/TableComponents/FormEdit/FormEditUser.vue";

    import { defaultUserDesignTable } from '@/configDesign/defaulDesignTableUi'
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
        name: 'TableAdminPassword',
        components: {
            ImportFromExcel,
            Pagination,
            ExportToExcel,
            FormEditPassword
        },
        //filters: { typeFilter: (type: string) => { return factoryTypeKeyValue[type]} }
    })
    export default class extends Vue {

        private designTable: ITableDataUiDesignedWithoutData = defaultUserDesignTable

        private tableKey = 0
        private list: IDataBaseUserData[] = []

        private total = 0
        private oldRows: number[] = []
        private newRows: number[] = []

        private listLoading = true
        private listQuery = defaultUserQuery
        private listExcel = defaultUserExcelHeader

        private Type1Options = Type1Options
        private Type2Options = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultUserRules
        private tempData = defaultUserData

        private sortable: Sortable | null = null

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiCellsStyleSansData( rowIndex, columnIndex, this.designTable, this.total)
        }

        //beforeDestroy() {}
        async created() {
            const { data } = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.Type2Options = data.rows
            this.getList()
        }


        private async getList() {
            this.listLoading = true
            const { data } = await getDBUsers(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseUserData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseUserData = {
                    id: list.id,
                    position: index,
                    username: list.username,
                    email: list.email,
                    idFactory: list.idFactory,
                    isAdmin: list.isAdmin,
                    isManager: list.isManager,
                    isOperator: list.isOperator,
                    isVisitor: list.isVisitor,
                    isActif: list.isActif
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBUsers (IDataBaseFactoryDatas)
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
        private async EditFormUpdate( datas: IDataBaseUserData ) {
            const updateDBData: IDataBaseUserData = {
                id: datas.id,
                username: datas.username,
                email: datas.email,
                position: datas.position,
                idFactory: datas.idFactory,
                isAdmin: datas.isAdmin,
                isManager: datas.isManager,
                isOperator: datas.isOperator,
                isVisitor: datas.isVisitor,
                isActif: datas.isActif,
            }
            const { data } = await updateDBUser(datas.id, updateDBData)
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

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultUserData)
        }
        private async handleModifyValidationStatus(row: IDataBaseUserData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "isAdmin") {
                Mess = this.$t('tables.password.message.message1') + ""
                row.isAdmin = status
            }
            if (niveau === "isManager") {
                Mess = this.$t('tables.password.message.message2') + ""
                row.isManager = status
            }
            if (niveau === "isOperator") {
                Mess = this.$t('tables.password.message.message3') + ""
                row.isOperator = status
            }
            if (niveau === "isVisitor") {
                Mess = this.$t('tables.password.message.message4') + ""
                row.isVisitor = status
            }
            if (niveau === "isActif") {
                Mess = this.$t('tables.password.message.message5') + ""
                row.isActif = status
            }
            await updateDBUser(row.id, { id: row.id, email: row.email, isAdmin: row.isAdmin, isManager: row.isManager, isOperator: row.isOperator, isVisitor: row.isVisitor, isActif: row.isActif})
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBUser(row.id, { id: row.id } )
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
            const { data } = await updateDBUsers( results )
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
        //grid-template-rows: 0.2fr 1.5fr 0.2fr;
        grid-template-areas:
                "filter filter filter filter filter filter filter filter filter filter filter filter"
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  extra  extra  extra"
                "table  table  table  table  table  table  table  table  table  table  table  table"
                "pages  pages  pages  pages  pages  .      .      .      .      .      .      . ";

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

