<template>
    <div class="TableAdminFonction-container">
        <div class="wrapper">
            <div class="header">
                <h3>{{ $t('tables.fonction.title') }}</h3>
            </div>
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.fonction.champs.champs4')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-model="listQuery.idFactory" :placeholder="$t('tables.fonction.champs.champs15')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsFactorys" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idArea" :placeholder="$t('tables.fonction.champs.champs16')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idType" :placeholder="$t('tables.fonction.champs.champs4')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsMeasureTypes" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idPlc" :placeholder="$t('tables.fonction.champs.champs17')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsPlcs" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-model="listQuery.idEquip" :placeholder="$t('tables.fonction.champs.champs18')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsEquips" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel className="ExportToExcel" TableName="Fonction" :TableList=list :defaultExcelHeater="listExcel" ></ExportToExcel>
                <ImportFromExcel className="ImportFromExcel" TableName="Fonction" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode className="UpdateFromNode" TableName="Fonction" @UpdateFromNode="getList"></UpdateFromNode>
            </div>
            <div class="table">
                <el-table ref="draggableTable" row-key="position" :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" @sort-change="sortChange">
                    <el-table-column align="center" label="Drag" width="80">
                        <svg-icon class="draggable-handler" name="drag" width="20" height="20"/>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs3')" min-width="450px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs4')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.measureType.name }}</span>
                        </template>
                    </el-table-column>

                    <!-- Areas -->
                    <el-table-column :label="$t('tables.fonction.champs.champs5')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.tankAreaDefEmptying.name1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs6')" min-width="140px">
                        <template slot-scope="{row}">
                            <span >{{ row.tankAreaDefFilling.name1 }}</span>
                        </template>
                    </el-table-column>

                    <!-- Losses -->
                    <el-table-column :label="$t('tables.fonction.champs.champs7')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.freqCheck }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs8')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.freqDelay }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs9')" min-width="100px">
                        <template slot-scope="{row}">
                            <span >{{ row.maxLosse }}</span>
                        </template>
                    </el-table-column>

                    <!-- Picture -->
                    <el-table-column :label="$t('tables.fonction.champs.champs10')" min-width="100px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.picture1 }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs11')" min-width="100px">
                        <template slot-scope="{row}">
                            <span class="link-type" @click="handleUpdate(row)">{{ row.picture2 }}</span>
                        </template>
                    </el-table-column>

                    <!-- Action -->
                    <el-table-column :label="$t('tables.fonction.champs.champs20')" align="center" width="300" class-name="fixed-width">
                        <template slot-scope="{row}">
                            <el-button v-if="row.haveToBeCheck!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'haveToBeCheck')">{{ $t('tables.fonction.button.button1') }}</el-button>
                            <el-button v-if="row.haveToBeCheck!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'haveToBeCheck')">{{ $t('tables.fonction.button.button1') }}</el-button>

                            <el-button v-if="row.haveBeenCheck!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'haveBeenCheck')">{{ $t('tables.fonction.button.button2') }}</el-button>
                            <el-button v-if="row.haveBeenCheck!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'haveBeenCheck')">{{ $t('tables.fonction.button.button2') }}</el-button>

                            <el-button v-if="row.modeAutoCheckActif !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'modeAutoCheckActif')">{{ $t('tables.fonction.button.button3') }}</el-button>
                            <el-button v-if="row.modeAutoCheckActif !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'modeAutoCheckActif')">{{ $t('tables.fonction.button.button3') }}</el-button>

                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.fonction.champs.champs21')" align="center" width="170" class-name="fixed-width">
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
            <FormEditFonction className="Fonction" TableName="Fonction" :dialogFormVisible=dialogFormVisible
                              :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                              :Type1Options=Type1Options :Type2Options=TypeOptionsMeasureTypes :Type3Options=TypeOptionsFactorys :Type4Options=TypeOptionsAreas :Type5Options=TypeOptionsPlcs
                              :Type6Options=TypeOptionsEquips :Type7Options=TypeOptionsTankAreaDefEmptyings :Type8Options=TypeOptionsTankAreaDefFillings
                              :tempData=tempData
                              @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" @EditFormUpdate="EditFormUpdate">
            </FormEditFonction>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import Sortable from 'sortablejs'

    import { getDBFonctions, updateDBFonctions, updateDBFonction, deleteDBFonction, defaultFonctionData, defaultFonctionRules, defaultFonctionQuery, defaultFonctionExcelHeater} from '@/api/fonctions'
    import { getDBFactorys} from '@/api/factorys'
    import { getDBAreas} from '@/api/areas'
    import { getDBPlcs} from '@/api/plcs'
    import { getDBEquips} from '@/api/equips'
    import { getDBMeasureTypes} from "@/api/measureTypes";
    import { getDBTankAreaDefEmptyings} from "@/api/tankAreaDefEmptyings";
    import { getDBTankAreaDefFillings} from "@/api/tankAreaDefFillings";

    import { IDataBaseFonctionData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditFonction from "@/components/TableComponents/FormEdit/FormEditFonction.vue";
    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAdminFonction',
        components: {
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditFonction,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        private tableKey = 0

        private list: IDataBaseFonctionData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true
        private listQuery = defaultFonctionQuery
        private listExcel = defaultFonctionExcelHeater

        private Type1Options = Type1Options
        private TypeOptionsMeasureTypes = []
        private TypeOptionsFactorys = []
        private TypeOptionsAreas = []
        private TypeOptionsPlcs = []
        private TypeOptionsEquips = []
        private TypeOptionsTankAreaDefEmptyings = []
        private TypeOptionsTankAreaDefFillings = []

        private dialogFormVisible = false
        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultFonctionRules
        private tempData = defaultFonctionData

        private sortable: Sortable | null = null

        async created() {
            let data: any
            data = await getDBMeasureTypes( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsMeasureTypes = data.data.rows

            data = await getDBFactorys( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsFactorys = data.data.rows

            data = await getDBAreas( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsAreas = data.data.rows

            data = await getDBPlcs( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsPlcs = data.data.rows

            data = await getDBEquips( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsEquips = data.data.rows

            data = await getDBTankAreaDefEmptyings( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsTankAreaDefEmptyings = data.data.rows

            data = await getDBTankAreaDefFillings( { page: 1, limit: 10000, name: undefined } )
            this.TypeOptionsTankAreaDefFillings = data.data.rows

            this.getList()
        }
        private async getList() {
            this.listLoading = true
            const { data } = await getDBFonctions(this.listQuery)
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
            const IDataBaseFactoryDatas: IDataBaseFonctionData[] = []
            let index = 0
            for ( const list of this.list) {
                const IDataBase: IDataBaseFonctionData = {
                    id: list.id,
                    position: index,
                    name: list.name,
                    idType: list.idType,
                    idAreaSource: list.idAreaSource,
                    idAreaDest: list.idAreaDest,
                    freqCheck: list.freqCheck,
                    freqDelay: list.freqDelay,
                    maxLosse: list.maxLosse,
                    haveToBeCheck: list.haveToBeCheck,
                    haveBeenCheck: list.haveBeenCheck,
                    modeAutoCheckActif: list.modeAutoCheckActif,
                    picture1: list.picture1,
                    picture2: list.picture2,
                    idProjectLink: list.idProjectLink,
                    projectPosition: list.projectPosition,
                    projectPercentRecovery: list.projectPercentRecovery,
                    idFactory: list.idFactory,
                    idArea: list.idArea,
                    idPlc: list.idPlc,
                    idEquip: list.idEquip,
                    idEquipIndex: list.idEquipIndex
                }
                IDataBaseFactoryDatas.push(IDataBase)
                index++
            }
            const updatedList = await updateDBFonctions (IDataBaseFactoryDatas)
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
            const updateDBData: IDataBaseFonctionData = {
                id: datas.id,
                position: datas.position,
                name: datas.name,
                idType: datas.idType,
                idAreaSource: datas.idAreaSource,
                idAreaDest: datas.idAreaDest,
                freqCheck: datas.freqCheck,
                freqDelay: datas.freqDelay,
                maxLosse: datas.maxLosse,
                haveToBeCheck: datas.haveToBeCheck,
                haveBeenCheck : datas.haveBeenCheck,
                modeAutoCheckActif: datas.modeAutoCheckActif,
                picture1: datas.picture1,
                picture2: datas.picture2,
                idProjectLink: datas.idProjectLink,
                projectPosition: datas.projectPosition,
                projectPercentRecovery: datas.projectPercentRecovery,
                idFactory: datas.idFactory,
                idArea: datas.idArea,
                idPlc: datas.idPlc,
                idEquip: datas.idEquip,
                idEquipIndex: datas.idEquipIndex
            }

            const { data } = await updateDBFonction(datas.id, updateDBData)
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
            const updateDBData: IDataBaseFonctionData = {
                id: datas.id,
                position: datas.position,
                name: datas.name,
                idType: datas.idType,
                idAreaSource: datas.idAreaSource,
                idAreaDest: datas.idAreaDest,
                freqCheck: datas.freqCheck,
                freqDelay: datas.freqDelay,
                maxLosse: datas.maxLosse,
                haveToBeCheck: datas.haveToBeCheck,
                haveBeenCheck : datas.haveBeenCheck,
                modeAutoCheckActif: datas.modeAutoCheckActif,
                picture1: datas.picture1,
                picture2: datas.picture2,
                idProjectLink: datas.idProjectLink,
                projectPosition: datas.projectPosition,
                projectPercentRecovery: datas.projectPercentRecovery,
                idFactory: datas.idFactory,
                idArea: datas.idArea,
                idPlc: datas.idPlc,
                idEquip: datas.idEquip,
                idEquipIndex: datas.idEquipIndex
            }
            const { data } = await updateDBFonction(datas.id, updateDBData)
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
            this.tempData = cloneDeep(defaultFonctionData)
        }
        private async handleModifyValidationStatus(datas: IDataBaseFonctionData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "haveToBeCheck") {
                Mess = this.$t('tables.Computer.message.message1') + ""
                datas.haveToBeCheck = status
            }
            if (niveau === "haveBeenCheck") {
                Mess = this.$t('tables.Computer.message.message2') + ""
                datas.haveBeenCheck = status
            }
            if (niveau === "modeAutoCheckActif") {
                Mess = this.$t('tables.Computer.message.message3') + ""
                datas.modeAutoCheckActif = status
            }

            const { data } = await updateDBFonction (datas.id, { id: datas.id, haveToBeCheck: datas.haveToBeCheck, haveBeenCheck: datas.haveBeenCheck, modeAutoCheckActif: datas.modeAutoCheckActif})
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBFonction(row.id, { id: row.id } )
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

        private handleFactoryName ( id: string) {
            return id + "Toto"
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
            const { data } = await updateDBFonctions( results )
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

