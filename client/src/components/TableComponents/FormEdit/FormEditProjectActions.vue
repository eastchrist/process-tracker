<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="15%" style="width: 95%; margin-left:2%;">
            <!-- Project Action comment -->
            <el-form-item :label="$t('tables.projectAction.edit.champs3')" prop="comment">
                <el-input type="textarea" :rows="2" :placeholder="$t('tables.projectAction.placeholder.comment')" v-model="tempData.comment" />
            </el-form-item>
            <!-- Project Action creationDate -->
            <el-form-item :label="$t('tables.projectAction.edit.champs4')" prop="creationDate">
                <el-date-picker v-model="tempData.creationDate" type="date" format="yyyy/MM/dd" value-format="yyyy-MM-dd" :placeholder="$t('tables.projectAction.placeholder.creationDate')"/>
            </el-form-item>
            <!-- Project Action dueDate -->
            <el-form-item :label="$t('tables.projectAction.edit.champs5')" prop="dueDate">
                <el-date-picker v-model="tempData.dueDate" type="date" format="yyyy/MM/dd" value-format="yyyy-MM-dd" :placeholder="$t('tables.projectAction.placeholder.dueDate')"/>
            </el-form-item>
            <!-- Project Action idProject -->
            <el-form-item :label="$t('tables.projectAction.edit.champs6')" prop="idProject">
                <el-input v-model="tempData.idProject" />
            </el-form-item>
            <!-- Project Action status -->
            <el-form-item :label="$t('tables.projectAction.edit.champs7')" prop="status">
                <el-input v-model="tempData.status" />
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
        name: 'EditProjectAction',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private title!: string
        @Prop({ default: { } }) private textMap!: any
        @Prop({ default: { } }) private rules!: any
        @Prop({ default: { } }) private dialogStatus!: string
        @Prop({ default: false }) private dialogFormVisible!: boolean
        @Prop({ default: { } }) private Type1Options!: any
        @Prop({ default: { } }) private Type2Options!: any
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
