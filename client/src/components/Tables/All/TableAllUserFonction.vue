<template>
    <div class="table-container">
        <div class="wrapper">
            <div class="filter">
                <el-input v-model="listQuery.name" :placeholder="$t('tables.fonction.placeholder.placeholder1')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>

                <el-select v-if="isAdmin === true" v-model="listQuery.idFactory" :placeholder="$t('tables.fonction.placeholder.placeholder4')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsFactorys" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>

                <!-- idArea depend of the level Admin=name Manager=name1 -->
                <el-select v-if="isAdmin === true" v-model="listQuery.idArea" :placeholder="$t('tables.fonction.placeholder.placeholder5')" clearable class="filter-item" style="width: 200px" @change="optionAreachange">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-if="isAdmin !== true" v-model="listQuery.idArea" :placeholder="$t('tables.fonction.placeholder.placeholder5')" clearable class="filter-item" style="width: 200px" @change="optionAreachange">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>

                <!-- idPlc depend of the level Admin=name Manager=name1 -->
                <el-select v-if="isAdmin === true" v-model="listQuery.idPlc" :placeholder="$t('tables.fonction.placeholder.placeholder6')" clearable class="filter-item" style="width: 200px" @change="optionPlcchange">
                    <el-option v-for="item in TypeOptionsPlcs" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-if="isAdmin !== true" v-model="listQuery.idPlc" :placeholder="$t('tables.fonction.placeholder.placeholder6')" clearable class="filter-item" style="width: 200px" @change="optionPlcchange">
                    <el-option v-for="item in TypeOptionsPlcs" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>

                <!-- idEquip depend of the level Admin=name Manager=name1 -->
                <el-select v-if="isAdmin === true" v-model="listQuery.idEquip" :placeholder="$t('tables.fonction.placeholder.placeholder7')" clearable class="filter-item" style="width: 200px" @change="optionEquipchange">
                    <el-option v-for="item in TypeOptionsEquips" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
                <el-select v-if="isAdmin !== true" v-model="listQuery.idEquip" :placeholder="$t('tables.fonction.placeholder.placeholder7')" clearable class="filter-item" style="width: 200px" @change="optionEquipchange">
                    <el-option v-for="item in TypeOptionsEquips" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>

                <!-- Type measurement, nb Lost -->
                <el-select v-model="listQuery.idType" :placeholder="$t('tables.fonction.placeholder.placeholder2')" clearable class="filter-item" style="width: 200px" @change="optionTypechange">
                    <el-option v-for="item in TypeOptionsMeasureTypes" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>

                <el-select v-model="listQuery.NbLost" :placeholder="$t('tables.fonction.placeholder.placeholder3')" clearable class="filter-item" style="width: 200px">
                    <el-option v-for="item in TypeOptionsNbLost" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>

            </div>
            <div class="checkbox">
                <!-- checkbox alarmLosses, haveToBeCheckActif, haveBeenCheck -->
                <el-checkbox v-model="listQuery.alarmLosses" class="filter-item" style="margin-left:15px;" >{{ $t('tables.fonction.checkbox.checkbox1') }}</el-checkbox>
                <el-checkbox v-model="listQuery.haveToBeCheckActif" class="filter-item" style="margin-left:15px;" >{{ $t('tables.fonction.checkbox.checkbox2') }}</el-checkbox>
                <el-checkbox v-model="listQuery.haveBeenCheck" class="filter-item" style="margin-left:15px;" >{{ $t('tables.fonction.checkbox.checkbox3') }}</el-checkbox>

                <!-- checkbox initialhaveNotBeenDone, currenthaveNotBeenDone -->
                <el-checkbox v-model="listQuery.initialhaveNotBeenDone" class="filter-item" style="margin-left:15px;" >{{ $t('tables.fonction.checkbox.checkbox4') }}</el-checkbox>
                <el-checkbox v-model="listQuery.currenthaveNotBeenDone" class="filter-item" style="margin-left:15px;" >{{ $t('tables.fonction.checkbox.checkbox5') }}</el-checkbox>
            </div>
            <div class="bouton">
                <!-- Button search -->
                <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">{{ $t('tables.generique.button.button1') }}</el-button>
                <!-- Button Add Only for Admin -->
                <el-button v-if="isAdmin === true" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">{{ $t('tables.generique.button.button2') }}</el-button>
            </div>

            <div v-if="isAdmin === true" class="extra">
                <ExportToExcel class="ExportToExcel" className="ExportToExcel" TableName="Fonction" ></ExportToExcel>
                <ImportFromExcel class="ImportFromExcel" className="ImportFromExcel" TableName="Fonction" :TableList=list :defaultExcelHeater="listExcel" :on-success="handleSuccess" :before-upload="beforeUpload"></ImportFromExcel>
                <UpdateFromNode class="UpdateFromNode" className="UpdateFromNode" TableName="Fonction" @UpdateFromNode="getList" @UpdateFromNodeError="handleUpdateFromNodeError"></UpdateFromNode>
            </div>
            <div class="table">
                <!--  <el-table  -->
                <!-- Design Table    -->
                <el-table
                        ref="draggableTable" row-key="position" :key="tableKey"
                        stripe v-loading="listLoading" :data="list"
                        border fit highlight-current-row @sort-change="sortChange"
                        style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">
                    <!-- titre table -->
                    <el-table-column :label="$t('tables.fonction.title')">
                        <!-- DragDrop -->
                        <el-table-column v-if="isAdmin === true" label="Drag" :min-width="designTable.columns[0].width">
                            <PersoIcons class="draggable-handler" name="drag" width="20" height="20"/>
                        </el-table-column>
                        <!-- Alarm -->
                        <el-table-column v-if="isManager === true" :label="$t('tables.fonction.champs.champs23')" :min-width="designTable.columns[1].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-if="row.alarmLosses === true" color="red" name="bug" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!-- toCheck -->
                        <el-table-column v-if="isManager === true" :label="$t('tables.fonction.champs.champs24')" :min-width="designTable.columns[2].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-if="row.haveToBeCheckActif!==true"  name="chart" @click="handleModifyValidationStatus(row, true, 'haveToBeCheck')" color="white" width='1em' height='1em'/>
                                <PersoIcons v-if="row.haveToBeCheckActif!==false" name="chart" @click="handleModifyValidationStatus(row, false, 'haveToBeCheck')" color="green" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!-- HaveBeenChecked -->
                        <el-table-column v-if="isManager === true" :label="$t('tables.fonction.champs.champs25')" :min-width="designTable.columns[3].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-if="row.haveBeenCheck===true" color="blue" name="back-top" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!-- HaveToBeValidate -->
                        <el-table-column v-if="isManager === true" :label="$t('tables.fonction.champs.champs26')" :min-width="designTable.columns[4].width">
                            <template slot-scope="{row}">
                                <PersoIcons v-if="row.haveToBeValidated===true" name="edit" color="blue" @click="handleModifyValidationStatus(row, false, 'haveToBeValidated')" width='1em' height='1em'/>
                            </template>
                        </el-table-column>
                        <!--  SUB TABLE measurement overview-->
                        <el-table-column v-if="((isAdmin !== true) && (isManagerEdit !== true))" :label="$t('tables.fonction.champs.champs35')" type="expand" :min-width="designTable.columns[5].width" >
                            <template v-slot="{row}"  >
                                <!--  <el-table  -->
                                <!-- Design Table style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">   -->
                                <el-table :key="subTableKey" :data="row.measurement" border fit highlight-current-row style="width: 100%;" >
                                    <!-- titre table SUB-->
                                    <el-table-column :label="$t('tables.fonction.titleSub1')">
                                        <el-table-column :label="$t('tables.fonction.subTable.champs1')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.losses }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs2')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.measure1 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs3')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.ts1 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs4')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.measure2 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs5')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.ts2 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs6')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.measure3 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs7')" min-width="50px">
                                            <template v-slot="{row}"><span >{{ row.ts3 }}</span></template>
                                        </el-table-column>
                                        <el-table-column :label="$t('tables.fonction.subTable.champs8')" min-width="300px">
                                            <template v-slot="{row}"><span >{{ row.comment }}</span></template>
                                        </el-table-column>
                                    </el-table-column>
                                </el-table>
                            </template>
                        </el-table-column>
                        <!-- Function Name Link operator Fill Data measure -->
                        <el-table-column v-if="((isManager === true) || (isOperator === true))" :label="$t('tables.fonction.champs.champs22')" :min-width="designTable.columns[6].width" >
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleLinkNewMeasure(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- Function Name Link Update Data form-->
                        <el-table-column v-if="((isAdmin === true) || (isManagerEdit === true))" :label="$t('tables.fonction.champs.champs3')" :min-width="designTable.columns[7].width" >
                            <template slot-scope="{row}">
                                <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
                            </template>
                        </el-table-column>
                        <!--  idType -->
                        <el-table-column :label="$t('tables.fonction.champs.champs4')" :min-width="designTable.columns[8].width">
                            <template slot-scope="{row}">
                                <span >{{ row.measureType.name }}</span>
                            </template>
                        </el-table-column>
                        <!--  lastCheckDate -->
                        <el-table-column :label="$t('tables.fonction.champs.champs37')" :min-width="designTable.columns[9].width">
                            <template slot-scope="{row}">
                                <span >{{ formatedDate(row.lastCheckDate) }}</span>
                            </template>
                        </el-table-column>
                        <!-- LostUnitaire -->
                        <el-table-column :label="$t('tables.fonction.champs.champs27')" :min-width="designTable.columns[10].width">
                            <template slot-scope="{row}">
                                <span v-if="row.currentLosses !== null" >{{ row.currentLosses }}</span>
                                <span v-if="row.currentLosses === null">{{ row.firstLosses }}</span>
                            </template>
                        </el-table-column>
                        <!-- LostUnitairePrice -->
                        <el-table-column :label="$t('tables.fonction.champs.champs28')" :min-width="designTable.columns[11].width">
                            <template slot-scope="{row}">
                                <span v-if="row.currentLossesPrice !== null" >{{ row.currentLossesPrice }}</span>
                                <span v-if="row.currentLossesPrice === null" >{{ row.firstLossesPrice }}</span>
                            </template>
                        </el-table-column>
                        <!-- LostYear -->
                        <el-table-column :label="$t('tables.fonction.champs.champs29')" :min-width="designTable.columns[12].width">
                            <template slot-scope="{row}">
                                <span v-if="row.currentAnnualLosses !== ''" >{{ row.currentAnnualLosses }}</span>
                                <span v-if="row.currentAnnualLosses === ''" >{{ row.firstAnnualLosses }}</span>
                            </template>
                        </el-table-column>
                        <!-- LostPriceYear -->
                        <el-table-column :label="$t('tables.fonction.champs.champs30')" :min-width="designTable.columns[13].width">
                            <template slot-scope="{row}">
                                <span v-if="row.currentAnnualPrice !== ''" >{{ row.currentAnnualPrice }}</span>
                                <span v-if="row.currentAnnualPrice === ''" >{{ row.firstAnnualPrice }}</span>
                            </template>
                        </el-table-column>
                        <!-- Areas Source Destination -->
                        <el-table-column :label="$t('tables.fonction.champs.champs5')" :min-width="designTable.columns[14].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tankAreaDefEmptying.name1 }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column :label="$t('tables.fonction.champs.champs6')" :min-width="designTable.columns[15].width">
                            <template slot-scope="{row}">
                                <span >{{ row.tankAreaDefFilling.name1 }}</span>
                            </template>
                        </el-table-column>
                        <!-- Losses -->
                        <el-table-column v-if="((isAdmin === true) || (isManagerEdit === true) || (isManager === true))" :label="$t('tables.fonction.champs.champs34')" :min-width="designTable.columns[16].width">
                            <template slot-scope="{row}">
                                <span >{{ row.nbLosse }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="((isAdmin === true) || (isManagerEdit === true))" :label="$t('tables.fonction.champs.champs7')" :min-width="designTable.columns[17].width">
                            <template slot-scope="{row}">
                                <span >{{ row.freqCheck }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="((isAdmin === true) || (isManagerEdit === true))" :label="$t('tables.fonction.champs.champs8')" :min-width="designTable.columns[18].width">
                            <template slot-scope="{row}">
                                <span >{{ row.freqDelay }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="((isAdmin === true) || (isManagerEdit === true))" :label="$t('tables.fonction.champs.champs9')" :min-width="designTable.columns[19].width">
                            <template slot-scope="{row}">
                                <span >{{ row.maxLosse }}</span>
                            </template>
                        </el-table-column>
                        <!-- FACTORY AREA PLC EQUIP -->
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs15')" :min-width="designTable.columns[20].width">
                            <template slot-scope="{row}">
                                <span >{{ row.equip.plc.area.factory.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs16')" :min-width="designTable.columns[21].width">
                            <template slot-scope="{row}">
                                <span >{{ row.equip.plc.area.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs17')" :min-width="designTable.columns[22].width">
                            <template slot-scope="{row}">
                                <span >{{ row.equip.plc.name }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs18')" :min-width="designTable.columns[23].width">
                            <template slot-scope="{row}">
                                <span >{{ row.equip.name }}</span>
                            </template>
                        </el-table-column>
                        <!-- Picture -->
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs10')" :min-width="designTable.columns[24].width">
                            <template slot-scope="{row}">
                                <el-button size="mini" @click="handleUploadPicture(row, 'picture1')">{{ $t('tables.generique.button.button12') }}</el-button>
                            </template>
                        </el-table-column>
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs11')" :min-width="designTable.columns[25].width">
                            <template slot-scope="{row}">
                                <el-button size="mini" @click="handleUploadPicture(row, 'picture2')">{{ $t('tables.generique.button.button12') }}</el-button>
                            </template>
                        </el-table-column>
                        <!-- Action -->
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs20')" :min-width="designTable.columns[26].width">
                            <template slot-scope="{row}">
                                <el-button v-if="row.haveToBeCheckActif!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row, true, 'haveToBeCheck')">{{ $t('tables.fonction.button.button1') }}</el-button>
                                <el-button v-if="row.haveToBeCheckActif!==false" size="mini" type="success" @click="handleModifyValidationStatus(row, false, 'haveToBeCheck')">{{ $t('tables.fonction.button.button1') }}</el-button>

                                <el-button v-if="row.haveBeenCheck!==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'haveBeenCheck')">{{ $t('tables.fonction.button.button2') }}</el-button>
                                <el-button v-if="row.haveBeenCheck!==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'haveBeenCheck')">{{ $t('tables.fonction.button.button2') }}</el-button>

                                <el-button v-if="row.modeAutoCheckActif !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'modeAutoCheckActif')">{{ $t('tables.fonction.button.button3') }}</el-button>
                                <el-button v-if="row.modeAutoCheckActif !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'modeAutoCheckActif')">{{ $t('tables.fonction.button.button3') }}</el-button>

                                <el-button v-if="row.enabled !==true" size="mini" type="danger" @click="handleModifyValidationStatus(row,true, 'enabled')">{{ $t('tables.fonction.button.button4') }}</el-button>
                                <el-button v-if="row.enabled !==false" size="mini" type="success" @click="handleModifyValidationStatus(row,false, 'enabled')">{{ $t('tables.fonction.button.button4') }}</el-button>

                            </template>
                        </el-table-column>
                        <el-table-column v-if="isAdmin === true" :label="$t('tables.fonction.champs.champs21')" :min-width="designTable.columns[27].width">
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
            <FormEditFonction className="Fonction" TableName="Fonction" :dialogFormVisible=dialogFormVisible
                              :title="textMap[dialogStatus]" :textMap=textMap :dialogStatus=dialogStatus :rules=rules
                              :isAdmin=isAdmin :isManagerEdit=isManagerEdit
                              :Type1Options=Type1Options :Type2Options=TypeOptionsMeasureTypes :Type3Options=TypeOptionsFactorys :Type4Options=TypeOptionsAreas :Type5Options=TypeOptionsPlcs
                              :Type6Options=TypeOptionsEquips :Type7Options=TypeOptionsTankAreaDefEmptyings :Type8Options=TypeOptionsTankAreaDefFillings
                              :tempData=tempData
                              @EditFormCancel="EditFormCancel" @EditFormAdd="EditFormAdd" @EditFormUpdate="EditFormUpdate">
            </FormEditFonction>
            <!-- EDIT ERROR FORM -->
            <FormUpdateNodeError :dialogFormErrorVisible=dialogFormErrorVisible :title="$t('tables.fonction.titleError')" :tempError=tempError @EditFormCancel="EditFormErrorCancel" ></FormUpdateNodeError>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { cloneDeep } from 'lodash'
    import { formatDate } from '@/utils';

    import Sortable from 'sortablejs'
    //import { TagsViewModule, AITagView } from '@/store/modules/tags-view'

    import { getDBFonctions, updateDBFonctions, updateDBFonction, deleteDBFonction, defaultFonctionData, defaultFonctionRules, AIFonctionQuery, defaultFonctionQuery, defaultFonctionExcelHeater} from '@/api/fonctions'
    import { getDBFactorys, AIFactoryQuery, defaultFactoryQuery} from '@/api/factorys'
    import { getDBAreas, AIAreaQuery, defaultAreaQuery } from '@/api/areas'
    import { getDBPlcs, AIPlcQuery, defaultPlcQuery} from '@/api/plcs'
    import { getDBEquips, AIEquipQuery, defaultEquipQuery} from '@/api/equips'
    import { getDBMeasureTypes, defaultMeasureTypeQuery} from "@/api/measureTypes";


    import { IDataBaseFonctionData } from '@/api/types'

    import Pagination from '@/components/Pagination/index.vue'
    import UpdateFromNode from '@/components/TableComponents/Components/UpdateFromNode.vue'
    import ExportToExcel from '@/components/TableComponents/Components/ExportToExcel.vue'
    import ImportFromExcel from '@/components/UploadExcel/index.vue'
    import FormEditFonction from "@/components/TableComponents/FormEdit/FormEditFonction.vue";
    import FormUpdateNodeError from "@/components/TableComponents/FormUpdateNodeError/FormUpdateNodeError.vue";

    import { defaultFonctionDesignTable } from '@/configDesign/defaulDesignTableUi'
    import { getDesignElementUiHeaderStyle, getDesignElementUiCellsStyle  } from '@/utils/tables'

    const Type1Options = [
        { key: true, displayName: 'True' },
        { key: false, displayName: 'False' }
    ]
    const textMap = {
        update: 'Edit',
        create: 'Create'
    }

    @Component({
        name: 'TableAllUserFonction',
        components: {
            UpdateFromNode,
            ExportToExcel,
            ImportFromExcel,
            FormEditFonction,
            FormUpdateNodeError,
            Pagination,
        },
        filters: {
        }
    })
    export default class Dashboard extends Vue {
        @Prop({ default: '' }) private idFactory!: string
        @Prop({ default: false }) private isAdmin!: boolean
        @Prop({ default: false }) private isManager!: boolean
        @Prop({ default: false }) private isManagerEdit!: boolean
        @Prop({ default: false }) private isOperator!: boolean

        private designTable = defaultFonctionDesignTable

        private tableKey = 0
        private subTableKey = 0

        private list: IDataBaseFonctionData[] = []
        private total = 0
        private oldList: number[] = []
        private newList: number[] = []

        private listLoading = true

        private listQuery: AIFonctionQuery = defaultFonctionQuery
        private listQueryFactory: AIFactoryQuery = defaultFactoryQuery
        private listQueryArea: AIAreaQuery = defaultAreaQuery
        private listQueryPlc: AIPlcQuery = defaultPlcQuery
        private listQueryEquip: AIEquipQuery = defaultEquipQuery
        private listQueryMeasureType = defaultMeasureTypeQuery

        private listQueryAreaidMem: string | undefined = ''
        private listQueryPlcidMem: string | undefined = ''
        private listQueryEquipidMem: string | undefined = ''

        private listExcel = defaultFonctionExcelHeater

        private Type1Options = Type1Options
        private TypeOptionsMeasureTypes = []
        private TypeOptionsNbLost: { [p: number]: number } = []
        private TypeOptionsFactorys = []
        private TypeOptionsAreas = []
        private TypeOptionsPlcs = []
        private TypeOptionsEquips = []
        private TypeOptionsTankAreaDefEmptyings = []
        private TypeOptionsTankAreaDefFillings = []

        private dialogFormVisible = false
        private dialogFormErrorVisible = false
        private tempError = ""

        private dialogStatus = ''
        private textMap = textMap

        private rules = defaultFonctionRules
        private tempData = defaultFonctionData


        private sortable: Sortable | null = null

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

        async created() {
            this.initBasicOptionListParameters()
            this.getOptionList()
            this.getList()
        }

        private initBasicOptionListParameters() {
            this.listQueryFactory.page = 1
            this.listQueryArea.page = 1
            this.listQueryPlc.page = 1
            this.listQueryEquip.page = 1
            this.listQueryMeasureType.page = 1

            this.listQueryFactory.limit = 10000
            this.listQueryArea.limit = 10000
            this.listQueryPlc.limit = 10000
            this.listQueryEquip.limit = 10000
            this.listQueryMeasureType.limit = 10000

            this.listQueryFactory.name = undefined
            this.listQueryArea.name = undefined
            this.listQueryPlc.name = undefined
            this.listQueryEquip.name = undefined
            this.listQueryMeasureType.name = undefined
            if ( this.isOperator ) {
                this.listQuery.haveToBeCheckActif = true
            } else {
                this.listQuery.haveToBeCheckActif = undefined
            }
        }
        private async getOptionListFactory() {
            if (this.isAdmin) { this.listQueryFactory.id = undefined } else if (this.isManagerEdit || this.isManager || this.isOperator) { this.listQueryFactory.id = this.idFactory }
            const data = await getDBFactorys( this.listQueryFactory )
            this.TypeOptionsFactorys = data.data.rows
        }

        private async getOptionListArea( QueryArea: AIAreaQuery ) {
            const data = await getDBAreas( QueryArea )
            this.listQueryAreaidMem = this.listQuery.idArea
            this.TypeOptionsAreas = data.data.rows
        }
        private async getOptionListPlc( QueryPlc: AIPlcQuery ) {
            const data = await getDBPlcs( QueryPlc )
            this.listQueryPlcidMem = this.listQuery.idPlc
            this.TypeOptionsPlcs = data.data.rows
        }
        private async getOptionListEquip( QueryEquip: AIEquipQuery ) {
            const data = await getDBEquips( QueryEquip )
            this.listQueryEquipidMem = this.listQuery.idEquip
            this.TypeOptionsEquips = data.data.rows
        }
        private async getOptionListMeasureTypes() {
            const data = await getDBMeasureTypes( this.listQueryMeasureType)
            this.TypeOptionsMeasureTypes = data.data.rows
        }

        private async getOptionList() {
            this.getOptionListFactory()

            //Area Query
            if (this.isAdmin) {
                this.listQuery.idFactory = undefined
                this.listQueryArea.idFactory = undefined
                this.listQueryPlc.idFactory = undefined
                this.listQueryEquip.idFactory = undefined
            }
            else if (this.isManagerEdit || this.isManager || this.isOperator) {
                this.listQuery.idFactory = this.idFactory
                this.listQueryArea.idFactory = this.idFactory
                this.listQueryPlc.idFactory = this.idFactory
                this.listQueryEquip.idFactory = this.idFactory
            }
            this.getOptionListArea( this.listQueryArea )
            this.getOptionListPlc( this.listQueryPlc )
            this.getOptionListEquip( this.listQueryEquip )

            this.getOptionListMeasureTypes()
        }

        private async getList() {
            this.listLoading = true
            const { data } = await getDBFonctions(this.listQuery)
            this.list = data.rows
            this.total = data.count
            this.oldList = this.list.map((v) => v.position)
            this.TypeOptionsNbLost = this.list.reduce((acc: { [key: number]: {} }, {nbLosse}) => {
                acc[nbLosse] = { item: nbLosse.toString(), value:  nbLosse.toString(), name: nbLosse.toString(), }
                return acc
            }, {}) as { [key: number]: number }

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

                    alarmLosses: list.alarmLosses,
                    haveToBeValidated: list.haveToBeValidated,

                    lastCheckDate: list.lastCheckDate,
                    firstLosses: list.firstLosses,
                    firstLossesPrice: list.firstLossesPrice,
                    currentLosses: list.currentLosses,
                    currentLossesPrice: list.currentLossesPrice,

                    freqCheck: list.freqCheck,
                    freqDelay: list.freqDelay,
                    nbLosse: list.nbLosse,
                    maxLosse: list.maxLosse,
                    haveToBeCheck: list.haveToBeCheck,
                    haveToBeCheckActif: list.haveToBeCheckActif,
                    haveBeenCheck: list.haveBeenCheck,
                    modeAutoCheckActif: list.modeAutoCheckActif,
                    enabled: list.enabled,

                    method: list.method,
                    picture1: list.picture1,
                    picture2: list.picture2,
                    idProjectLink: list.idProjectLink,
                    idProjectLinkSelected: list.idProjectLinkSelected,
                    projectPercentRecovery: list.projectPercentRecovery,
                    idEquip: list.idEquip,
                    idEquipIndex: list.idEquipIndex,
                    measureType: list.measureType,
                    tankAreaDefEmptying: list.tankAreaDefEmptying,
                    tankAreaDefFilling: list.tankAreaDefFilling,
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

                alarmLosses: undefined,
                haveToBeValidated: undefined,

                lastCheckDate: datas.lastCheckDate,
                firstLosses: datas.firstLosses,
                firstLossesPrice: datas.firstLossesPrice,
                currentLosses: datas.currentLosses,
                currentLossesPrice: datas.currentLossesPrice,

                freqCheck: datas.freqCheck,
                freqDelay: datas.freqDelay,
                nbLosse: datas.nbLosse,
                maxLosse: datas.maxLosse,
                haveToBeCheck: datas.haveToBeCheck,
                haveToBeCheckActif: datas.haveToBeCheckActif,
                haveBeenCheck : datas.haveBeenCheck,
                modeAutoCheckActif: datas.modeAutoCheckActif,
                enabled: datas.enabled,

                method: datas.method,
                picture1: datas.picture1,
                picture2: datas.picture2,
                idProjectLink: datas.idProjectLink,
                idProjectLinkSelected: datas.idProjectLinkSelected,
                projectPercentRecovery: datas.projectPercentRecovery,
                idEquip: datas.idEquip,
                idEquipIndex: datas.idEquipIndex,
                measureType: {
                    id: datas.measureType.id,
                    position: datas.measureType.position,
                    name: datas.measureType.name,
                    value: datas.measureType.value
                },
                tankAreaDefEmptying: {
                    id: datas.tankAreaDefEmptying.id,
                    idNode: datas.tankAreaDefEmptying.idNode,
                    position: datas.tankAreaDefEmptying.position,
                    name: datas.tankAreaDefEmptying.name,
                    name1: datas.tankAreaDefEmptying.name1,
                    dataComment: datas.tankAreaDefEmptying.dataComment,
                    dataType: datas.tankAreaDefEmptying.dataType,
                    options: datas.tankAreaDefEmptying.options,
                },
                tankAreaDefFilling: {
                    id: datas.tankAreaDefFilling.id,
                    idNode: datas.tankAreaDefFilling.idNode,
                    position: datas.tankAreaDefFilling.position,
                    name: datas.tankAreaDefFilling.name,
                    name1: datas.tankAreaDefFilling.name1,
                    dataComment: datas.tankAreaDefFilling.dataComment,
                    dataType: datas.tankAreaDefFilling.dataType,
                    options: datas.tankAreaDefFilling.options,
                }
            }
            const { data } = await updateDBFonction(datas.id, updateDBData)
            this.list.unshift(data.rows[0])
            this.dialogFormVisible = false
            this.$notify({
                title: this.$t('notify.notify2.title') + "",
                message: this.$t('notify.notify2.message') + "",
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

                alarmLosses: undefined,
                haveToBeValidated: undefined,

                lastCheckDate: datas.lastCheckDate,
                firstLosses: datas.firstLosses,
                firstLossesPrice: datas.firstLossesPrice,
                currentLosses: datas.currentLosses,
                currentLossesPrice: datas.currentLossesPrice,

                freqCheck: datas.freqCheck,
                freqDelay: datas.freqDelay,
                nbLosse: datas.nbLosse,
                maxLosse: datas.maxLosse,
                haveToBeCheck: datas.haveToBeCheck,
                haveToBeCheckActif: datas.haveToBeCheckActif,
                haveBeenCheck : datas.haveBeenCheck,
                modeAutoCheckActif: datas.modeAutoCheckActif,
                enabled: datas.enabled,

                method: datas.method,
                picture1: datas.picture1,
                picture2: datas.picture2,

                idProjectLink: datas.idProjectLink,
                idProjectLinkSelected: datas.idProjectLinkSelected,
                projectPercentRecovery: datas.projectPercentRecovery,

                idEquip: datas.idEquip,
                idEquipIndex: datas.idEquipIndex,
                measureType: undefined,
                tankAreaDefEmptying: undefined,
                tankAreaDefFilling: undefined
            }
            const { data } = await updateDBFonction(datas.id, updateDBData)
            const index = this.list.findIndex(v => v.id === data.rows[0].id)
            this.list.splice(index, 1, data.rows[0])
            this.dialogFormVisible = false
            this.$notify({
                title: this.$t('notify.notify3.title') + "",
                message: this.$t('notify.notify3.message') + "",
                type: 'success',
                duration: 2000
            })
        }

        //Coming from FormErrorEdit
        private EditFormErrorCancel(  ) {
            this.dialogFormErrorVisible = false
        }
        private handleUpdateFromNodeError(errorList: string) {
            this.tempError = errorList
            this.dialogFormErrorVisible = true
        }

        //Click on button
        private resettempData() {
            this.tempData = cloneDeep(defaultFonctionData)
        }
        private async handleModifyValidationStatus(datas: IDataBaseFonctionData, status: boolean, niveau: string) {
            let Mess = '';
            if (niveau === "haveToBeCheck") {
                Mess = this.$t('tables.fonction.message.message1') + ""
                datas.haveToBeCheck = status
                datas.haveToBeCheckActif = status
            }
            if (niveau === "haveBeenCheck") {
                Mess = this.$t('tables.fonction.message.message2') + ""
                datas.haveBeenCheck = status
            }
            if (niveau === "modeAutoCheckActif") {
                Mess = this.$t('tables.fonction.message.message3') + ""
                datas.modeAutoCheckActif = status
            }
            if (niveau === "haveToBeValidated") {
                //Manager have validate the operator value
                Mess = this.$t('tables.fonction.message.message4') + ""
                datas.haveToBeValidated = status
                datas.haveToBeCheck = status
                datas.haveBeenCheck = status
            }
            if (niveau === "enabled") {
                Mess = this.$t('tables.fonction.message.message5') + ""
                datas.enabled = status
            }

            const { data } = await updateDBFonction (datas.id, {
                id: datas.id,
                haveToBeCheck: datas.haveToBeCheck,
                haveBeenCheck: datas.haveBeenCheck,
                haveToBeValidated: datas.haveToBeValidated,
                modeAutoCheckActif: datas.modeAutoCheckActif,
                enabled: datas.enabled
            })
            if (status) { Mess = Mess + "True" } else { Mess = Mess + "False" }
            this.$message({
                message: Mess,
                type: 'success'
            })
        }
        private async handleDelete(row: any, index: number) {
            const { data } = await deleteDBFonction(row.id, { id: row.id } )
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
        private handleCreate() {
            this.resettempData()
            this.dialogStatus = 'create'
            this.dialogFormVisible = true
        }

        //Click on link to operator Screen
        private handleLinkNewMeasure(row: any) {
            this.$router.push({
                name: '/cartography/OperatorMeasure',
                params: {
                    idFactory: row.equip.plc.area.idFactory,
                    idArea: row.equip.plc.area.id,
                    idPlc: row.equip.plc.id,
                    idFonction: row.id,
                }
            })

        }

        //Click on Upload picture
        private async handleUploadPicture(datas: IDataBaseFonctionData, picture: string) {
            console.log("TOTO")
        }

        //Filter
        private handleFilter() {
            this.listQuery.page = 1
            if ( this.listQuery.idFactory === '') {
                this.listQuery.idFactory = undefined
                this.listQueryArea.idFactory = undefined
                this.listQueryEquip.idFactory = undefined
            } else {
                this.listQueryArea.idFactory = this.listQuery.idFactory
                this.listQueryEquip.idFactory = this.listQuery.idFactory
            }
            if ( this.listQuery.idArea === '') {
                this.listQuery.idArea = undefined
                this.listQueryPlc.idArea = undefined
                this.listQueryEquip.idArea = undefined
            } else {
                this.listQueryPlc.idArea = this.listQuery.idArea
                this.listQueryEquip.idArea = this.listQuery.idArea
            }
            if ( this.listQuery.idPlc === '') {
                this.listQuery.idPlc = undefined
                this.listQueryEquip.idPlc = undefined
            } else {
                this.listQueryEquip.idPlc = this.listQuery.idPlc
            }
            if ( this.listQuery.idEquip === '') {
                this.listQuery.idEquip = undefined
                this.listQueryEquip.idEquip = undefined
            } else {
                this.listQueryEquip.idEquip = this.listQuery.idEquip
            }

            if ( this.listQuery.idArea !== this.listQueryAreaidMem) {
                this.getOptionListArea( this.listQueryArea )
            }

            if ( this.listQuery.idPlc !== this.listQueryPlcidMem) {
                this.getOptionListPlc( this.listQueryPlc )
            }

            if ( this.listQuery.idEquip !== this.listQueryEquipidMem) {
                this.getOptionListEquip( this.listQueryEquip )
            }



            if (this.listQuery.alarmLosses === false) { this.listQuery.alarmLosses = undefined }
            if (this.listQuery.haveBeenCheck === false) { this.listQuery.haveBeenCheck = undefined }
            if (this.listQuery.haveToBeCheckActif === false) { this.listQuery.haveToBeCheckActif = undefined }
            if (this.listQuery.initialhaveNotBeenDone === false) { this.listQuery.initialhaveNotBeenDone = undefined }
            if (this.listQuery.currenthaveNotBeenDone === false) { this.listQuery.currenthaveNotBeenDone = undefined }
            this.getList()
        }
        private sortChange(data: any) {
            const { prop, order } = data
        }
        private optionAreachange() {
            this.handleFilter()
        }
        private optionPlcchange() {
            this.handleFilter()
        }
        private optionEquipchange() {
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

        grid-template-areas:
                "filter filter filter filter filter filter filter filter filter filter bout   bout  "
                "checkb checkb checkb checkb checkb checkb checkb checkb .      .      .      .     "
                "extra  extra  extra  extra  extra  extra  extra  extra  extra  .      .      .     "
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
    .checkbox {
        grid-area: checkb;
        background: $adminExtraBgColor;
        padding:1em;
        border:#333 2px solid;
    }
    .bouton {
        grid-area: bout;
        background: $adminExtraBgColor;
        padding:1em;
        border:#333 2px solid;
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

