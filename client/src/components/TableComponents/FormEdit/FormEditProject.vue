<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormProjectVisible" @open="beforeOpen" :before-close="beforeClose" >
        <el-form ref="dataForm" :rules="rules" :model="tempProject" label-position="left" label-width="15%" style="width: 95%; margin-left:2%;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <!-- project name -->
            <el-form-item :label="$t('tables.project.edit.champs3')" prop="name" >
                <el-input v-model="tempProject.name" />
            </el-form-item>
            <!-- project comment -->
            <el-form-item :label="$t('tables.project.edit.champs4')" prop="comment">
                <el-input type="textarea" :rows="2" :placeholder="$t('tables.project.placeholder.placeholder6')" v-model="tempProject.comment">
                </el-input>
            </el-form-item>
            <el-form-item :label="$t('tables.project.edit.champs8')" prop="idArea" >
                <el-select v-model="tempProject.idArea" class="filter-item" placeholder="Please select" style="width: 50%;" :disabled="textMap[dialogStatus]!=='Create'" @change="optionAreachange">
                    <el-option v-for="item in TypeOptionsAreas" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.project.edit.champs5')" prop="idType" >
                <el-select v-model="tempProject.idType" class="filter-item" placeholder="Please select" style="width: 50%;">
                    <el-option v-for="item in TypeOptionsProjectTypes" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.project.edit.champs6')" prop="priority">
                <el-rate v-model="tempProject.priority" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="5" style="margin-top:8px;"/>
            </el-form-item>
            <el-form-item :label="$t('tables.project.edit.champs7')" prop="difficulty">
                <el-rate v-model="tempProject.difficulty" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="5" style="margin-top:8px;"/>
            </el-form-item>

            <!-- Table price -->
            <el-form-item :label="$t('tables.project.tables.price.label')">
                <table style="width:100%">
                    <tr>
                        <th>{{ $t('tables.project.tables.price.champs1') }}</th>
                        <th>{{ $t('tables.project.tables.price.champs2') }}</th>
                        <th>{{ $t('tables.project.tables.price.champs3') }}</th>
                    </tr>
                    <tr>
                        <td>
                            <el-form-item prop="hoursPrice">
                                <el-input v-model="tempProject.hoursPrice" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="materialPrice">
                                <el-input v-model="tempProject.materialPrice" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="electricalPrice">
                                <el-input v-model="tempProject.electricalPrice" ></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                </table>
            </el-form-item>

            <!--  <el-table  -->
            <!-- Design Table style="width: 100%;" :header-cell-style="getDesignElementUiHeaderStyle" :cell-style="getDesignElementUiCellsStyle">   -->

            <!-- Table fonction of project -->
            <el-table height="400" :data="TypeOptionsFonctionLinked" border  highlight-current-row style="width: 100%;" >
                <!-- titre table SUB-->
                <el-table-column :label="$t('tables.project.titleSub1')">
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs1')" min-width="5px">
                        <template slot-scope="{row}">
                            <el-checkbox v-model="row.idProjectLinkSelected" style="margin-left:15px;" ></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs2')" min-width="50px">
                        <template slot-scope="{row}">
                            <span >{{ row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs3')" min-width="10px">
                        <template slot-scope="{row}">
                            <span >{{ row.firstLosses  }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs4')" min-width="10px">
                        <template slot-scope="{row}">
                            <span >{{ row.firstAnnualLosses }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs5')" min-width="10px">
                        <template slot-scope="{row}">
                            <span >{{ row.firstAnnualPrice }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column :label="$t('tables.project.tables.fonctionLinked.champs6')" min-width="10px">
                        <template slot-scope="{row}" >
                            <el-form-item v-if="row.idProjectLinkSelected === true">
                                <el-input v-model="row.projectPercentRecovery" style="width: 60px; "></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                </el-table-column>
            </el-table>
            <div >
                <!-- idEquip depend of the level Admin=name Manager=name1 -->
                <el-select v-model="listQueryFonction.idEquip" :placeholder="$t('tables.fonction.placeholder.placeholder7')" clearable class="filter-item" style="width: 200px" @change="optionEquipchange">
                    <el-option v-for="item in TypeOptionsEquips" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>

                <!-- Type measurement, nb Lost -->
                <el-select v-model="listQueryFonction.idType" :placeholder="$t('tables.fonction.placeholder.placeholder2')" clearable class="filter-item" style="width: 200px" @change="optionTypechange">
                    <el-option v-for="item in TypeOptionsMeasureTypes" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>

            </div>
        </el-form>


        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">{{ $t('tables.generique.button.button5') }}</el-button>
            <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">{{ $t('tables.generique.button.button6') }}</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { Form } from 'element-ui'
    import {IDataBaseFonctionData, IDataBaseProjectData} from '@/api/types'
    import { getDBFonctions, AIFonctionQuery, defaultProjectFonctionQuery } from '@/api/fonctions'
    import { getDBEquips, AIEquipQuery, defaultEquipQuery} from '@/api/equips'
    import { getDBMeasureTypes, defaultMeasureTypeQuery} from "@/api/measureTypes";

    @Component({
        name: 'EditProject',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private title!: string
        @Prop({ default: { } }) private textMap!: any
        @Prop({ default: { } }) private rules!: any
        @Prop({ default: { } }) private dialogStatus!: string
        @Prop({ default: false }) private dialogFormProjectVisible!: boolean

        @Prop({ default: '' }) private idFactory!: string

        @Prop({ default: { } }) private TypeOptionsFactorys!: any
        @Prop({ default: { } }) private TypeOptionsAreas!: any
        @Prop({ default: { } }) private TypeOptionsProjectTypes!: any
        @Prop({ default: { } }) private tempProject!: IDataBaseProjectData

        private TypeOptionsFonctionLinked: IDataBaseFonctionData[] = []

        private listQueryFonction: AIFonctionQuery = defaultProjectFonctionQuery
        private listQueryEquip: AIEquipQuery = defaultEquipQuery
        private listQueryMeasureType = defaultMeasureTypeQuery

        private TypeOptionsEquips = []
        private TypeOptionsMeasureTypes = []

        //private listQueryEquipidMem: string | undefined = ''
        private listQueryEquipAreaMem: string | undefined = ''

        private initBasicOptionListParameters() {
            this.listQueryFonction.page= 1
            this.listQueryEquip.page= 1
            this.listQueryMeasureType.page= 1

            this.listQueryFonction.limit = 10000
            this.listQueryEquip.limit = 10000
            this.listQueryMeasureType.limit = 10000

            this.listQueryFonction.name = undefined
            this.listQueryEquip.name = undefined
            this.listQueryMeasureType.name = undefined

            this.listQueryFonction.idFactory = this.idFactory
            this.listQueryEquip.idFactory = this.idFactory
        }
        private async getOptionsProjectFonctionsLinked(  ) {
            if (this.tempProject.idArea !== '') {
                this.listQueryFonction.idArea = this.tempProject.idArea
                if (this.textMap[this.dialogStatus]!=='Create') {
                    this.listQueryFonction.idProjectLink = this.tempProject.id
                    this.listQueryFonction.idProjectLinkNull = true
                } else {
                    this.listQueryFonction.idProjectLink = undefined
                    this.listQueryFonction.idProjectLinkNull = true
                }
                //if (( this.listQueryFonction.idEquip !== this.listQueryEquipidMem) || ( this.listQueryFonction.idArea !== this.listQueryEquipAreaMem)) {
                if ( this.listQueryFonction.idArea !== this.listQueryEquipAreaMem) {
                    this.listQueryEquip.idArea = this.listQueryFonction.idArea
                    this.getOptionListEquip( this.listQueryEquip )
                }
                if (this.listQueryFonction.idEquip === '') { this.listQueryFonction.idEquip = undefined }
                if (this.listQueryFonction.idType === '') { this.listQueryFonction.idType = undefined}
                const data = await getDBFonctions( this.listQueryFonction )
                this.TypeOptionsFonctionLinked = data.data.rows
            } else {
                this.TypeOptionsFonctionLinked = []
            }
        }

        beforeOpen() {
            this.initBasicOptionListParameters()
            this.getOptionListMeasureTypes()
            this.getOptionsProjectFonctionsLinked()
        }
        beforeClose( ) {
            this.$emit('EditFormProjectCancel')
        }
        handleCancel( ) {
            this.$emit('EditFormProjectCancel')
        }
        private checkFonctionData( ) {
            //TODO problem compilation retour String ou number
            const testDecimal = /^\d+(\.\d{1,2})?$/
            for( const FonctionLinked of this.TypeOptionsFonctionLinked) {
                if (FonctionLinked.idProjectLinkSelected === true) {
                    //const isNombre = testDecimal.test(FonctionLinked.projectPercentRecovery)
                    //if ((FonctionLinked.projectPercentRecovery === '') || (FonctionLinked.projectPercentRecovery === null) || (isNombre === false)) {
                    if ((FonctionLinked.projectPercentRecovery === '') || (FonctionLinked.projectPercentRecovery === null)) {
                        return false
                    }
                }
            }
            return true
        }

        createData() {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    const ok = this.checkFonctionData()
                    if (ok === false) {
                        this.$notify({
                            title: this.$t('notify.notify2.title') + "",
                            message: this.$t('notify.notify2.message') + "",
                            type: 'error',
                            duration: 4000
                        })
                    } else {
                        this.$emit('EditFormProjectAdd', { project: this.tempProject, fonctions: this.TypeOptionsFonctionLinked })
                    }
                }
            })
        }
        updateData() {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    const ok = this.checkFonctionData()
                    if (ok === false) {
                        this.$notify({
                            title: this.$t('notify.notify4.title') + "",
                            message: this.$t('notify.notify4.message') + "",
                            type: 'error',
                            duration: 4000
                        })
                    } else {
                        this.$emit('EditFormProjectUpdate', { project: this.tempProject, fonctions: this.TypeOptionsFonctionLinked })
                    }
                }
            })
        }

        private async getOptionListEquip( QueryEquip: AIEquipQuery ) {
            const data = await getDBEquips( QueryEquip )
            //this.listQueryEquipidMem = this.listQueryFonction.idEquip
            this.listQueryEquipAreaMem = this.listQueryFonction.idArea
            this.TypeOptionsEquips = data.data.rows
        }
        private async getOptionListMeasureTypes() {
            const data = await getDBMeasureTypes( this.listQueryMeasureType)
            this.TypeOptionsMeasureTypes = data.data.rows
        }

        //Filter
        optionAreachange() {
            this.getOptionsProjectFonctionsLinked( )
        }
        optionEquipchange() {
            this.getOptionsProjectFonctionsLinked( )
        }
        optionTypechange() {
            this.getOptionsProjectFonctionsLinked( )
        }
    }

</script>

<style lang="scss" scoped>
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 50%;
    }
    td, th {
        border: 1px solid #dddddd;
        text-align: center;
        padding: 8px;
    }
</style>
