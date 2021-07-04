<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormProjectActionVisible" @open="beforeOpen" :before-close="beforeClose" >
        <el-form ref="dataForm" :rules="rules" :model="tempProjectsAction" label-position="left" label-width="15%" style="width: 95%; margin-left:2%;">
            <!-- **************************Project info *************************************-->
            <!-- Project Name -->
            <el-form-item :label="$t('tables.project.edit.champs3')">
                <el-input v-model="tempProject.name" :disabled="true" />
            </el-form-item>
            <!-- Project Comment -->
            <el-form-item :label="$t('tables.project.edit.champs4')">
                <el-input type="textarea" :rows="2"  v-model="tempProject.comment" :disabled="true" />
            </el-form-item>
            <!-- Project Type -->
            <el-form-item :label="$t('tables.project.edit.champs5')" prop="idType">
                <el-select v-model="tempProject.idType" class="filter-item" placeholder="Please select" :disabled="true" style="width: 50%;">
                    <el-option v-for="item in TypeOptionsProjectTypes" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>
            </el-form-item>

            <!-- Project Action idStatus -->
            <el-form-item :label="$t('tables.projectAction.edit.champs7')" prop="idStatus" >
                <el-select v-model="tempProjectsAction.idStatus" class="filter-item" placeholder="Please select" :disabled="textMap[dialogStatus]!=='Create'" style="width: 50%;">
                    <el-option v-for="item in TypeOptionsProjectStatusCopy" :key="item.value" :label="item.name" :value="item.value"/>
                </el-select>
            </el-form-item>

            <!-- **************************Project Action info *************************************-->
            <!-- Project Action Comment -->
            <el-form-item :label="$t('tables.projectAction.edit.champs3')" prop="comment">
                <el-input type="textarea" :rows="2" :placeholder="$t('tables.projectAction.placeholder.comment')" v-model="tempProjectsAction.comment">
                </el-input>
            </el-form-item>
            <!-- Project Action dueDate -->
            <el-form-item :label="$t('tables.projectAction.edit.champs5')" :prop="dueDate()">
                <el-date-picker v-model="tempProjectsAction.dueDate"
                                :picker-options="pickerOptions" type="date" format="yyyy/MM/dd" value-format="yyyy-MM-dd"
                                :disabled="(textMap[dialogStatus]!=='Create') || (tempProjectsAction.idStatus !== 20)"
                                :placeholder="$t('tables.projectAction.placeholder.dueDate')"/>
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
    import { cloneDeep } from 'lodash'
    import { Form } from 'element-ui'
    import { IDataBaseProjectData, IDataBaseProjectActionData } from '@/api/types'

    @Component({
        name: 'EditProjectData',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private title!: string
        @Prop({ default: { } }) private textMap!: any
        @Prop({ default: { } }) private rules!: any
        @Prop({ default: { } }) private dialogStatus!: string
        @Prop({ default: false }) private dialogFormProjectActionVisible!: boolean

        @Prop({ default: '' }) private idFactory!: string
        @Prop({ default: { } }) private tempProject!: IDataBaseProjectData
        @Prop({ default: { } }) private tempProjectsAction!: IDataBaseProjectActionData

        @Prop({ default: { } }) private TypeOptionsProjectTypes!: any
        @Prop({ default: { } }) private TypeOptionsProjectStatus!: any

        private TypeOptionsProjectStatusCopy: any = []
        private pickerOptions = {
            disabledDate(time: Date) {
                return time.getTime() < Date.now()
            }
        }
        private dueDate(){
            if ( this.tempProjectsAction.idStatus === 20) { return 'dueDate' }
            return ''
        }

        beforeOpen() {
            //remove all status lower than the one selected by the project
            this.TypeOptionsProjectStatusCopy = cloneDeep(this.TypeOptionsProjectStatus)
            const valueMax = this.tempProjectsAction.idStatus!
            for (let index = ( this.TypeOptionsProjectStatusCopy.length - 1); index >= 0; index--)
                if ( (this.TypeOptionsProjectStatusCopy[index].value < valueMax) ) {
                    if ( (this.TypeOptionsProjectStatusCopy[index].value === 1) && ( valueMax === 1)) {
                        console.log('Dont remove we are in Standby')
                    } else if ( (this.TypeOptionsProjectStatusCopy[index].value === 10) && ( valueMax === 20)) {
                        console.log('Dont remove running if we are in DueDate')
                    } else {
                        this.TypeOptionsProjectStatusCopy.splice(index,1);
                    }
                }
        }
        beforeClose( ) {
            this.$emit('EditFormProjectActionCancel')
        }
        handleCancel( ) {
            this.$emit('EditFormProjectActionCancel')
        }
        createData () {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    console.log('createData Valid')
                    this.$emit('EditFormProjectActionAdd', { project: this.tempProject, projectAction: this.tempProjectsAction })
                }
            })
            console.log('createData')
        }
        updateData () {
            (this.$refs.dataForm as Form).validate((valid: any) => {
                if (valid) {
                    this.$emit('EditFormProjectActionUpdate', { project: this.tempProject, projectAction: this.tempProjectsAction })
                }
            })
            console.log('updateData')
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
