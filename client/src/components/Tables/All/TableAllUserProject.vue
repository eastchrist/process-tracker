<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.project.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
                <el-select v-if="isAdmin === true" v-model="listQuery.idFactory" :placeholder="$t('tables.project.placeholder.placeholder2')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsFactorys" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <!-- idArea -->
                <el-select v-if="isAdmin === true" v-model="listQuery.idArea" :placeholder="$t('tables.project.placeholder.placeholder3')" clearable class="filter-item" style="width: 200px" @change="optionAreachange">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-if="isAdmin !== true" v-model="listQuery.idArea" :placeholder="$t('tables.project.placeholder.placeholder3')" clearable class="filter-item" style="width: 200px" @change="optionAreachange">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>

                <!-- idStatus -->
                <el-select v-model="listQuery.idStatus" :placeholder="$t('tables.project.placeholder.placeholder4')" clearable class="filter-item" style="width: 200px" @change="optionStatuschange">
                    <el-option v-for="item in TypeOptionsProjectStatus" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <!-- idType -->
                <el-select v-model="listQuery.idType" :placeholder="$t('tables.project.placeholder.placeholder5')" clearable class="filter-item" style="width: 200px" @change="optionTypechange">
                    <el-option v-for="item in TypeOptionsProjectTypes" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleProjectCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>
            <div class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Project" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Project" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
            </div>
            <div class="table" id="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table :key="tableKey" stripe v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.project.title')">
                        <!-- name -->
                        <el-table-column :label="$t('tables.project.champs.champs3')" :min-width="designTable.columns[0].width">
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleProjectActionCreate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- comment -->
                        <el-table-column :label="$t('tables.project.champs.champs15')" :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <span >{{ row.comment }}</span>
                            </template>
                        </el-table-column>

                        <!-- SUB TABLE show-summary :summary-method -->
                        <!-- SUB TABLE Function overview creationDate,dueDate,comment-->
                        <el-table-column :label="$t('tables.project.champs.champs4')" type="expand" :min-width="designTable.columns[2].width" >
                            <template v-slot="{row}">
                                <!--  <el-table  TODO-->
                                <!-- Design Table style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">   -->
                                <el-table :data="row.projectAction" border fit highlight-current-row style="width: 30%;" :header-cell-style="getTableSub1RowClass" :cell-style="tableSub1CellsStyle">
                                    <!-- titre table SUB-->
                                    <el-table-column :label="$t('tables.project.titleSub1')">
                                        <el-table-column :label="$t('tables.project.subTableAction.champs3')" :min-width="designTableSub1.columns[0].width">
                                            <template v-slot="{row}"><span >{{ row.comment }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.project.subTableAction.champs1')" :min-width="designTableSub1.columns[1].width">
                                            <template v-slot="{row}"><span >{{ formatedDate(row.creationDate) }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.project.subTableAction.champs2')" :min-width="designTableSub1.columns[2].width">
                                            <template v-slot="{row}"><span >{{ formatedDate(row.dueDate) }}</span></template>
                                        </el-table-column>
                                        <!-- action -->
                                        <el-table-column :label="$t('tables.project.champs.champs16')" :min-width="designTableSub1.columns[3].width">
                                            <template slot-scope="{row}">
                                                <el-button type="primary" size="mini" @click="handleProjectActionUpdate( row )">{{ $t('tables.generique.button.button7') }}</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                                <br>
                                <br>
                                <!--  <el-table  TODO-->
                                <!-- Design Table style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">   -->
                                <el-table :data="row.fonctionsLinked" border fit highlight-current-row style="width: 30%;" :header-cell-style="getTableSub2RowClass" :cell-style="tableSub2CellsStyle">
                                    <!-- titre table SUB-->
                                    <el-table-column :label="$t('tables.project.titleSub2')">
                                        <el-table-column :label="$t('tables.project.subTableFonction.champs1')" :min-width="designTableSub2.columns[0].width">
                                            <template v-slot="{row}"><span >{{ row.name }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.project.subTableFonction.champs2')" :min-width="designTableSub2.columns[1].width">
                                            <template v-slot="{row}"><span >{{ row.firstLosses }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.project.subTableFonction.champs3')" :min-width="designTableSub2.columns[2].width">
                                            <template v-slot="{row}"><span >{{ row.currentLosses }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.project.subTableFonction.champs4')" :min-width="designTableSub2.columns[3].width">
                                            <template v-slot="{row}"><span >{{ row.projectPercentRecovery }}</span></template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>

                        <!-- SUB TABLE Function overview -->
                        <!-- name,firstLosses,currentLosses,projectPercentRecovery -->
                        <!-- status -->
                        <el-table-column :label="$t('tables.project.champs.champs5')" :min-width="designTable.columns[3].width">
                            <template slot-scope="{row}">
                                <span >{{ row.projectStatus.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- idType -->
                        <el-table-column :label="$t('tables.project.champs.champs6')" :min-width="designTable.columns[4].width">
                            <template slot-scope="{row}">
                                <span >{{ row.projectType.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- lastCreationDate -->
                        <el-table-column :label="$t('tables.project.champs.champs17')" :min-width="designTable.columns[5].width">
                            <template slot-scope="{row}">
                                <span >{{ formatedDate(row.lastCreationDate) }}</span>
                            </template>
                        </el-table-column>
                        <!-- lastDueDate -->
                        <el-table-column :label="$t('tables.project.champs.champs18')" :min-width="designTable.columns[6].width">
                            <template slot-scope="{row}">
                                <span >{{ formatedDate(row.lastDueDate) }}</span>
                            </template>
                        </el-table-column>
                        <!-- priority -->
                        <el-table-column :label="$t('tables.project.champs.champs7')" :min-width="designTable.columns[7].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-for="n in +row.priority" :key="n" name="star" class="meta-item__icon" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!-- difficulty -->
                        <el-table-column :label="$t('tables.project.champs.champs8')" :min-width="designTable.columns[8].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-for="n in +row.difficulty" :key="n" name="star" class="meta-item__icon" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!-- Factory -->
                        <el-table-column :label="$t('tables.project.champs.champs9')" :min-width="designTable.columns[9].width">
                            <template slot-scope="{row}">
                                <span v-if="isAdmin !== true">{{ row.area.factory.name1 }}</span>
                                <span v-if="isAdmin === true">{{ row.area.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- Area -->
                        <el-table-column :label="$t('tables.project.champs.champs10')" :min-width="designTable.columns[10].width">
                            <template slot-scope="{row}">
                                <span v-if="isAdmin !== true">{{ row.area.name1 }}</span>
                                <span v-if="isAdmin === true">{{ row.area.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- payBack -->
                        <el-table-column :label="$t('tables.project.champs.champs11')" :min-width="designTable.columns[11].width">
                            <template slot-scope="{row}">
                                <span >{{ row.payback }}</span>
                            </template>
                        </el-table-column>
                        <!-- hourPrice -->
                        <el-table-column :label="$t('tables.project.champs.champs12')" :min-width="designTable.columns[12].width">
                            <template slot-scope="{row}">
                                <span >{{ row.hoursPrice }}</span>
                            </template>
                        </el-table-column>
                        <!-- materialPrice -->
                        <el-table-column :label="$t('tables.project.champs.champs13')" :min-width="designTable.columns[13].width">
                            <template slot-scope="{row}">
                                <span >{{ row.materialPrice }}</span>
                            </template>
                        </el-table-column>
                        <!-- electricalPrice -->
                        <el-table-column :label="$t('tables.project.champs.champs14')" :min-width="designTable.columns[14].width">
                            <template slot-scope="{row}">
                                <span >{{ row.electricalPrice }}</span>
                            </template>
                        </el-table-column>
                        <!-- action -->
                        <el-table-column :label="$t('tables.project.champs.champs16')" :min-width="designTable.columns[15].width">
                            <template slot-scope="{row, $index}">
                                <el-button type="primary" size="mini" @click="handleProjectUpdate(row)">{{ $t('tables.generique.button.button7') }}</el-button>
                                <el-button type="danger" size="mini" @click="handleProjectDelete(row, $index)">{{ $t('tables.generique.button.button8') }}</el-button>
                            </template>
                        </el-table-column>
                    </el-table-column>
                </el-table>
            </div>
            <div class="pagination">
                <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList"/>
            </div>
            <!-- EDIT FORM -->
            <FormEditProject className="Project" TableName="Project" :dialogFormProjectVisible=dialogFormProjectVisible
                             :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=ProjectRules
                             :idFactory=idFactory
                             :TypeOptionsFactorys=TypeOptionsFactorys
                             :TypeOptionsAreas=TypeOptionsAreas
                             :TypeOptionsProjectTypes=TypeOptionsProjectTypes
                             :tempProject=tempProject
                             @EditFormProjectCancel="EditFormProjectCancel" @EditFormProjectAdd="EditFormProjectAdd" @EditFormProjectUpdate="EditFormProjectUpdate">
            </FormEditProject>
            <FormEditProjectsAction className="ProjectData" TableName="ProjectData" :dialogFormProjectActionVisible=dialogFormProjectActionVisible
                                    :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=ProjectActionRules
                                    :idFactory=idFactory
                                    :tempProject=tempProject
                                    :tempProjectsAction=tempProjectsAction
                                    :TypeOptionsProjectTypes=TypeOptionsProjectTypes
                                    :TypeOptionsProjectStatus=TypeOptionsProjectStatus
                                    @EditFormProjectActionCancel="EditFormProjectActionCancel" @EditFormProjectActionAdd="EditFormProjectActionAdd" @EditFormProjectActionUpdate="EditFormProjectActionUpdate">
            </FormEditProjectsAction>

        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import { formatDate } from '@/utils';

    import { getDBProjects, updateDBProjects, updateDBProject, deleteDBProject, updateDBProjectFonctions, deleteDBProjectFonctions, deleteDBProjectProjectActions, defaultProjectData, defaultProjectRules, AIProjectQuery, defaultProjectQuery, defaultProjectExcelHeater } from '@/api/projects'
    import { addDBProjectAction, updateDBProjectAction, defaultProjectActionData, defaultProjectActionRules } from '@/api/projectActions'


    import { getDBFactorys, AIFactoryQuery, defaultFactoryQuery} from '@/api/factorys'
    import { getDBAreas, AIAreaQuery, defaultAreaQuery } from '@/api/areas'
    import { getDBProjectTypes, AIProjectTypeQuery, defaultProjectTypeQuery} from "@/api/projectTypes";
    import { getDBProjectStatus, AIProjectStatusQuery, defaultProjectStatusQuery} from "@/api/projectStatus";
    import { IDataBaseProjectData, IDataBaseProjectActionData, IDataBaseFonctionData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'

    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditProject from "@/components/TableComponents/FormEdit/FormEditProject.vue";
    import FormEditProjectsAction from "@/components/TableComponents/FormEdit/FormEditProjectsAction.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultProjectDesignTable, defaultProjectDesignTableSub1, defaultProjectDesignTableSub2 } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAllUserProject',
        components: {
            ExportToExcel,
            ImportFromExcel,
            FormEditProject,
            FormEditProjectsAction,
            FormUpdateNodeError,
            Pagination,
        },
    })
    export default class Dashboard extends Vue {
        @Prop({ default: '' }) private idFactory!: string
        @Prop({ default: false }) private isAdmin!: boolean
        @Prop({ default: false }) private isManager!: boolean
        @Prop({ default: false }) private isManagerEdit!: boolean
        @Prop({ default: false }) private isOperator!: boolean

        private designTable = defaultProjectDesignTable
        private designTableSub1 = defaultProjectDesignTableSub1
        private designTableSub2 = defaultProjectDesignTableSub2

        private tableKey = 0
        private subTableKey1 = 0
        private subTableKey2 = 0
        private list: IDataBaseProjectData[] = []
        private total = 0
        private listLoading = true

        private listQuery: AIProjectQuery = defaultProjectQuery
        private listQueryFactory: AIFactoryQuery = defaultFactoryQuery
        private listQueryArea: AIAreaQuery = defaultAreaQuery
        private listQueryProjectType: AIProjectTypeQuery = defaultProjectTypeQuery
        private listQueryProjectStatus: AIProjectStatusQuery = defaultProjectStatusQuery

        private listExcel = defaultProjectExcelHeater

        private TypeOptionsFactorys = []
        private TypeOptionsAreas = []
        private TypeOptionsProjectTypes = []
        private TypeOptionsProjectStatus = []

        private dialogFormProjectVisible = false
        private dialogFormProjectActionVisible = false


        private dialogStatus = ''
        private textMap = textMap

        private ProjectRules = defaultProjectRules
        private ProjectActionRules = defaultProjectActionRules

        private defaultProjectData: IDataBaseProjectData = defaultProjectData
        private tempProject: IDataBaseProjectData = defaultProjectData

        private defaultProjectActionData: IDataBaseProjectActionData= defaultProjectActionData
        private tempProjectsAction: IDataBaseProjectActionData = defaultProjectActionData

        private formatedDate(value: string){
            return formatDate (value)
        }

        //Apply Style to Table Header and SubHeader
        private getDesignElementUiHeaderStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTable, this.total)
        }
        //Apply Style to Table Rows
        private getDesignElementUiCellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number } ) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTable, this.total)
        }

        //Apply Style to SubTable Header and SubHeader ProjectAction
        private getTableSub1RowClass( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTableSub1, this.total)
        }
        //Apply Style to SubTable Rows ProjectAction
        private tableSub1CellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number } ) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTableSub1, this.total)
        }

        //Apply Style to SubTable Header and SubHeader ProjectAction
        private getTableSub2RowClass( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number }) {
            return getDesignElementUiHeaderStyle( rowIndex, columnIndex, this.designTableSub2, this.total)
        }
        //Apply Style to SubTable Rows ProjectAction
        private tableSub2CellsStyle( { row, column, rowIndex, columnIndex }: { row: any, column: any, rowIndex: number, columnIndex: number } ) {
            return getDesignElementUiCellsStyle( rowIndex, columnIndex, this.designTableSub2, this.total)
        }


        async created() {

            this.initBasicOptionListParameters()
            this.getOptionList()
            this.getList()
        }

        private initBasicOptionListParameters() {
            this.listQueryFactory.page = 1
            this.listQueryArea.page = 1
            this.listQueryProjectType.page = 1
            this.listQueryProjectStatus.page = 1

            this.listQueryFactory.limit = 10000
            this.listQueryArea.limit = 10000
            this.listQueryProjectType.limit = 10000
            this.listQueryProjectStatus.limit = 10000

            this.listQueryFactory.name = undefined
            this.listQueryArea.name = undefined
            this.listQueryProjectType.name = undefined
            this.listQueryProjectStatus.name = undefined
        }
        private async getOptionListFactory() {
            if (this.isAdmin) { this.listQueryFactory.id = undefined } else if (this.isManagerEdit || this.isManager || this.isOperator) { this.listQueryFactory.id = this.idFactory }
            const data = await getDBFactorys( this.listQueryFactory )
            this.TypeOptionsFactorys = data.data.rows
        }
        private async getOptionListArea( QueryArea: AIAreaQuery ) {
            const data = await getDBAreas( QueryArea )
            this.TypeOptionsAreas = data.data.rows
        }
        private async getOptionListProjectTypes() {
            const data = await getDBProjectTypes( this.listQueryProjectType)
            this.TypeOptionsProjectTypes = data.data.rows
        }
        private async getOptionListProjectStatus() {
            const data = await getDBProjectStatus( this.listQueryProjectStatus)
            this.TypeOptionsProjectStatus = data.data.rows
        }
        private async getOptionList() {
            this.getOptionListFactory()
            //Area Query
            if (this.isAdmin) {
                this.listQuery.idFactory = undefined
                this.listQueryArea.idFactory = undefined
            }
            else if (this.isManagerEdit || this.isManager || this.isOperator) {
                this.listQuery.idFactory = this.idFactory
                this.listQueryArea.idFactory = this.idFactory
            }
            this.getOptionListArea( this.listQueryArea )
            this.getOptionListProjectTypes()
            this.getOptionListProjectStatus()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBProjects( this.listQuery )
            this.list = data.rows
            this.total = data.count
            this.listLoading = false
        }

        //Coming from FormEdit Project
        private EditFormProjectCancel() {
            this.dialogFormProjectVisible = false
        }
        private verificationdatasfunctions(datasfunctions: IDataBaseFonctionData[], projectId: number) {
            for (let index = 0; index < datasfunctions.length; index++) {
                if (datasfunctions[index].idProjectLinkSelected === true) {
                    datasfunctions[index].idProjectLink = projectId
                } else {
                    datasfunctions[index].idProjectLink = 0
                    datasfunctions[index].projectPercentRecovery = 0
                }
            }
            return datasfunctions
        }
        private async EditFormProjectAdd( datas: any ) {

            //Update Project
            const datasProject: IDataBaseProjectData = datas.project
            const updateDBProjectData: IDataBaseProjectData = {
                id: datasProject.id,
                position: datasProject.position,
                name: datasProject.name,
                comment: datasProject.comment,
                idType: datasProject.idType,
                idStatus: 1,
                priority: datasProject.priority,
                difficulty: datasProject.difficulty,
                idArea: datasProject.idArea,
                payback: datasProject.payback,
                hoursPrice: datasProject.hoursPrice,
                materialPrice: datasProject.materialPrice,
                electricalPrice: datasProject.electricalPrice,
                lastCreationDate: undefined,
                lastDueDate: undefined,
                }
            const { data } = await updateDBProject(updateDBProjectData.id, updateDBProjectData)
            const projectId = data.rows[0].id

            //Update Function
            let datasfunctions: IDataBaseFonctionData[] = datas.fonctions
            datasfunctions = this.verificationdatasfunctions(datasfunctions, projectId)
            const datasProjectFonctions = await updateDBProjectFonctions( datasfunctions )

            //Show Project and Function
            this.listQuery.id = projectId
            const dataProjects = await getDBProjects( this.listQuery )
            this.list.unshift(dataProjects.data.rows[0])
            this.listQuery.id = undefined

            this.dialogFormProjectVisible = false
            this.$notify({
                title: this.$t('notify.notify2.title') + "",
                message: this.$t('notify.notify2.message') + "",
                type: 'success',
                duration: 2000
            })
        }
        private async EditFormProjectUpdate( datas: any ) {
            //Update Project
            const datasProject: IDataBaseProjectData = datas.project
            const updateDBProjectData: IDataBaseProjectData = {
                id: datasProject.id,
                position: datasProject.position,
                name: datasProject.name,
                comment: datasProject.comment,
                idType: datasProject.idType,
                idStatus: datasProject.idStatus,
                priority: datasProject.priority,
                difficulty: datasProject.difficulty,
                idArea: datasProject.idArea,
                payback: datasProject.payback,
                hoursPrice: datasProject.hoursPrice,
                materialPrice: datasProject.materialPrice,
                electricalPrice: datasProject.electricalPrice,
                lastCreationDate: undefined,
                lastDueDate: undefined,
            }
            const { data } = await updateDBProject(updateDBProjectData.id, updateDBProjectData)
            const projectId = data.rows[0].id

            //Update Function
            let datasfunctions: IDataBaseFonctionData[] = datas.fonctions
            datasfunctions = this.verificationdatasfunctions(datasfunctions, projectId)
            const datasProjectFonctions = await updateDBProjectFonctions( datasfunctions )

            //Show Project and Function
            this.listQuery.id = projectId
            const dataProjects = await getDBProjects( {
                id: updateDBProjectData.id,
                idArea: this.listQuery.idArea,
                idFactory: this.listQuery.idFactory,
                idStatus: undefined,
                idType: undefined,
                limit: 30,
                name: undefined,
                page: 1
            } )
            if (( dataProjects !== undefined)) {
                const index = this.list.findIndex(v => v.id === dataProjects.data.rows[0].id)
                this.list.splice(index, 1, dataProjects.data.rows[0])
                //this.listQuery.id = undefined
            }
            this.dialogFormProjectVisible = false
            this.$notify({
                title: this.$t('notify.notify3.title') + "",
                message: this.$t('notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }
        private async handleProjectDelete(row: any, index: number) {
            const deleteProjectFonctions= await deleteDBProjectFonctions(row.id, { id: row.id } )
            const deleteProjectActions= await deleteDBProjectProjectActions(row.id, { id: row.id } )
            const { data } = await deleteDBProject(row.id, { id: row.id } )
            this.$notify({
                title: this.$t('notify.notify1.title') + "",
                message: this.$t('notify.notify1.message') + "",
                type: 'success',
                duration: 2000
            })
            this.list.splice(index, 1)
        }
        private handleProjectUpdate(row: any) {
            this.tempProject = Object.assign({}, row)
            this.dialogStatus = 'update'
            this.dialogFormProjectVisible = true
        }
        private handleProjectCreate() {
            this.tempProject = {
                id: 0,
                position: 0,
                name: "",
                comment: "",
                idType: "",
                idStatus: "",
                priority: 0,
                difficulty: 0,
                idArea: "",
                payback: "",
                hoursPrice: "",
                materialPrice: "",
                electricalPrice: "",
                lastCreationDate: "",
                lastDueDate: "",
            }
            this.dialogStatus = 'create'
            this.dialogFormProjectVisible = true
        }

        //Coming from FormEdit ProjectAction
        private EditFormProjectActionCancel() {
            this.dialogFormProjectActionVisible = false
        }
        private async EditFormProjectActionAdd( datas: any ) {
            //Get Datas from slave screen Project
            const datasProject: IDataBaseProjectData = datas.project
            const datasProjectAction: IDataBaseProjectActionData = datas.projectAction

            //Update Project
            const updateDBProjectData: IDataBaseProjectData = {
                id: datasProject.id,
                position: undefined,
                name: undefined,
                comment: undefined,
                idType: undefined,
                idStatus: datasProjectAction.idStatus,
                priority: undefined,
                difficulty: undefined,
                idArea: undefined,
                payback: undefined,
                hoursPrice: undefined,
                materialPrice: undefined,
                electricalPrice: undefined,
                lastCreationDate: new Date(),
                lastDueDate: datasProjectAction.dueDate,
            }
            const { data } = await updateDBProject(updateDBProjectData.id, updateDBProjectData)
            const projectId = data.rows[0].id

            //Update Project Action
            const updateDBProjectActionData: IDataBaseProjectActionData = {
                id: 0,
                position: 999999,
                idStatus: datasProjectAction.idStatus,
                comment: datasProjectAction.comment,
                creationDate: new Date(),
                dueDate: datasProjectAction.dueDate,
                idProject: projectId,
            }
            const datasProjectActions = await addDBProjectAction( updateDBProjectActionData)

            //Show Project and Function
            //this.listQuery.id = projectId
            //The id Type could change so better do a query
            const dataProjects = await getDBProjects({
                id: updateDBProjectData.id,
                idArea: this.listQuery.idArea,
                idFactory: this.listQuery.idFactory,
                idStatus: undefined,
                idType: undefined,
                limit: 30,
                name: undefined,
                page: 1
            })
            if (( dataProjects !== undefined)) {
                const index = this.list.findIndex(v => v.id === dataProjects.data.rows[0].id)
                this.list.splice(index, 1, dataProjects.data.rows[0])
                //this.listQuery.id = undefined
            }

            this.dialogFormProjectActionVisible = false
        }
        private async EditFormProjectActionUpdate( datas: { project: IDataBaseProjectData, projectAction: IDataBaseProjectActionData} ) {
            //Get Datas from slave screen Project
            const datasProject: IDataBaseProjectData = datas.project
            const datasProjectAction: IDataBaseProjectActionData = datas.projectAction

            //Update Project
            const projectId: string = datasProject.id.toString();

            //Update Project Action
            const updateDBProjectActionData: IDataBaseProjectActionData = {
                id: datasProjectAction.id,
                position: datasProjectAction.position,
                comment: datasProjectAction.comment,
                creationDate: datasProjectAction.creationDate,
                dueDate: datasProjectAction.dueDate,
                idStatus: datasProjectAction.idStatus,
                idProject: datasProjectAction.idProject,
            }
            const datasProjectActions = await updateDBProjectAction( updateDBProjectActionData.id, updateDBProjectActionData)

            //Show Project and Function
            this.listQuery.id = projectId
            const dataProjects = await getDBProjects( this.listQuery )
            const index = this.list.findIndex(v => v.id === dataProjects.data.rows[0].id)
            this.list.splice(index, 1, dataProjects.data.rows[0])
            this.listQuery.id = undefined

            this.dialogFormProjectActionVisible = false
        }
        private findProjectById( idProject: number) {
            let retour: IDataBaseProjectData = this.defaultProjectData
            for (let index = 0; index < this.list.length; index++) {
                if (this.list[index].id === idProject) {
                    retour = this.list[index]
                    break
                }
            }
            return retour
        }
        private handleProjectActionUpdate(row: IDataBaseProjectActionData) {
            const ProjectInfo: IDataBaseProjectData = this.findProjectById( row.idProject )
            this.tempProject.name = ProjectInfo.name
            this.tempProject.id = ProjectInfo.id
            this.tempProject.comment = ProjectInfo.comment
            this.tempProject.idType = ProjectInfo.idType
            this.tempProject.idStatus = ProjectInfo.idStatus

            this.tempProjectsAction = {
                id: row.id,
                comment: row.comment,
                position: row.position,
                creationDate: row.creationDate,
                dueDate: row.dueDate,
                idStatus: this.tempProject.idStatus,
                idProject: row.idProject,
            }

            this.dialogStatus = 'update'
            this.dialogFormProjectActionVisible = true
        }
        private handleProjectActionCreate( row: any ) {
            this.tempProject.name = row.name
            this.tempProject.id = row.id
            this.tempProject.comment = row.comment
            this.tempProject.idType = row.idType
            this.tempProject.idStatus = row.idStatus
            this.tempProjectsAction = cloneDeep(this.defaultProjectActionData)
            this.tempProjectsAction.idStatus = this.tempProject.idStatus //row.idStatus
            this.dialogStatus = 'create'
            this.dialogFormProjectActionVisible = true
        }

        //Filter
        private handleFilter() {
            this.listQuery.page = 1
            this.getList()
        }
        private optionAreachange() {
            this.handleFilter()
        }
        private optionStatuschange() {
            this.handleFilter()
        }
        private optionTypechange() {
            this.handleFilter()
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
            const { data } = await updateDBProjects( results )
            this.getList()
        }
    }
</script>


<style lang="scss" scoped>
    .table-container {
        background: $adminContainerBgColor;
        padding:2px;
        margin-bottom: 20px;
    }
    .wrapper{
        height: 100%;
        display:grid;
        grid-gap: 3px;
        grid-template-columns:repeat(12, minmax(100px, 1fr));
        //grid-template-rows: 0.2fr 0.2fr 0.2fr 1.5fr 0.2fr;
        grid-template-areas:
                "filter filter filter filter filter filter filter filter filter filter filter filter"
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  extra  extra  extra "
                "table  table  table  table  table  table  table  table  table  table  table  table "
                "pages  pages  pages  pages  pages  pages  pages  pages  pages  .      .      .     ";
        background: $adminWrapperBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .filter {
        grid-area: filter;
        background: $adminFilterBgColor;
        padding:1em;
        border:#333 2px solid;
        .filter-item.el-input {
            margin-left: 0px;
            width: 200px
        }
        .filter-item.el-select {
            margin-left: 5px;
            width: 200px
        }
        .filter-item.el-button {
            margin-left: 5px;
            width: 100px
        }
    }
    .extra {
        grid-area: extra;
        background: $adminExtraBgColor;
        padding:1em;
        border:#333 2px solid;
        .ExportToExcel {
            margin-left: 0px;
            width: 150px
        }
        .ImportFromExcel {
            margin-left: 10px;
            width: 200px
        }
        .UpdateFromNode {
            margin-left: 10px;
            width: 200px
        }
    }
    .table {
        grid-area: table;
        background: $adminTableBgColor;
        padding:1em;
        border:#333 2px solid;

    }
    .pagination {
        grid-area: pages;
        background: $adminPaginationBgColor;
        padding:1em;
        border:#333 2px solid;
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
            grid-template-areas:
                    "filter filter filter "
                    "extra  extra  extra  "
                    "table  table  table  "
                    "pages  pages  pages  ";
        }
    }
</style>


