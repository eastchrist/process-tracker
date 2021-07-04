<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="15%" style="width: 95%; margin-left:2%;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <el-form-item :label="$t('tables.fonction.edit.champs3')" prop="name" style="width: 100%;">
                <el-input v-model="tempData.name" :disabled="isManagerEdit === true"/>
            </el-form-item>

            <!-- idType idAreaSource idAreaDest -->
            <el-form-item :label="$t('tables.fonction.edit.champs4')" prop="idType" >
                <el-select v-model="tempData.measureType.name" class="filter-item" placeholder="Please select" :disabled="true">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>
            <el-form-item v-if="tempData.tankAreaDefEmptying.name1 !== ''" :label="$t('tables.fonction.edit.champs5')" prop="idAreaSource">
                <el-select v-model="tempData.tankAreaDefEmptying.name1" class="filter-item" placeholder="Please select" :disabled="true">
                    <el-option v-for="item in Type6Options" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>
            </el-form-item>
            <el-form-item v-if="tempData.tankAreaDefFilling.name1 !== ''" :label="$t('tables.fonction.edit.champs6')" prop="idAreaDest">
                <el-select v-model="tempData.tankAreaDefFilling.name1" class="filter-item" placeholder="Please select" :disabled="true">
                    <el-option v-for="item in Type7Options" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>
            </el-form-item>

            <!-- Table generique parameters -->
            <el-form-item v-if="((isAdmin === true) || (isManagerEdit === true))" :label="$t('tables.fonction.edit.champs21')">
                <table style="width:60%">
                    <tr>
                        <th>{{ $t('tables.fonction.edit.champs20') }}</th>
                        <th>{{ $t('tables.fonction.edit.champs9') }}</th>
                        <th>{{ $t('tables.fonction.edit.champs7') }}</th>
                        <th>{{ $t('tables.fonction.edit.champs8') }}</th>
                    </tr>
                    <tr>
                        <td>
                            <el-form-item prop="nbLosse">
                                <el-input v-model="tempData.nbLosse" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="maxLosse">
                                <el-input v-model="tempData.maxLosse" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="freqCheck">
                                <el-input v-model="tempData.freqCheck" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="freqDelay">
                                <el-input v-model="tempData.freqDelay" ></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                </table>
            </el-form-item>

            <!-- Table measurements -->
            <el-form-item v-if="isAdmin === true" :label="$t('tables.fonction.edit.champs22')">
                <table style="width:90%">
                    <tr>
                        <th style="width:10%" >{{ $t('tables.fonction.edit.champs23') }}</th>
                        <th style="width:20%" >{{ $t('tables.fonction.edit.champs24') }}</th>
                        <th style="width:20%" >{{ $t('tables.fonction.edit.champs25') }}</th>
                        <th style="width:20%" >{{ $t('tables.fonction.edit.champs26') }}</th>
                        <th style="width:20%" >{{ $t('tables.fonction.edit.champs27') }}</th>
                    </tr>
                    <tr>
                        <td>{{ $t('tables.fonction.edit.champs28') }}</td>
                        <td>
                            <el-form-item prop="firstLosses">
                                <el-input v-model="tempData.firstLosses" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="firstLossesPrice">
                                <el-input v-model="tempData.firstLossesPrice" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="firstAnnualLosses">
                                <el-input v-model="tempData.firstAnnualLosses" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="firstAnnualPrice">
                                <el-input v-model="tempData.firstAnnualPrice" ></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                    <tr>
                        <td>{{ $t('tables.fonction.edit.champs29') }}</td>
                        <td>
                            <el-form-item prop="currentLosses">
                                <el-input v-model="tempData.currentLosses" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="currentLossesPrice">
                                <el-input v-model="tempData.currentLossesPrice" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="currentAnnualLosses">
                                <el-input v-model="tempData.currentAnnualLosses" ></el-input>
                            </el-form-item>
                        </td>
                        <td>
                            <el-form-item prop="currentAnnualPrice">
                                <el-input v-model="tempData.currentAnnualPrice" ></el-input>
                            </el-form-item>
                        </td>
                    </tr>
                </table>
            </el-form-item>
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

    @Component({
        name: 'EditFonction',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private title!: string
        @Prop({ default: false }) private isAdmin!: boolean
        @Prop({ default: false }) private isManagerEdit!: boolean

        @Prop({ default: { } }) private textMap!: any
        @Prop({ default: { } }) private rules!: any
        @Prop({ default: { } }) private dialogStatus!: string
        @Prop({ default: false }) private dialogFormVisible!: boolean
        @Prop({ default: { } }) private Type1Options!: any
        @Prop({ default: { } }) private Type2Options!: any
        @Prop({ default: { } }) private Type3Options!: any
        @Prop({ default: { } }) private Type4Options!: any
        @Prop({ default: { } }) private Type5Options!: any
        @Prop({ default: { } }) private Type6Options!: any
        @Prop({ default: { } }) private Type7Options!: any
        @Prop({ default: { } }) private tempData!: any

        beforeOpen() {
            console.log("beforeOpen")
        }
        beforeClose( ) {
            this.$emit('EditFormCancel')
        }
        handleCancel( ) {
            this.$emit('EditFormCancel')
        }
        createData () {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    this.$emit('EditFormAdd', this.tempData)
                }
            })
        }
        updateData () {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    this.$emit('EditFormUpdate', this.tempData)
                }
            })
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
