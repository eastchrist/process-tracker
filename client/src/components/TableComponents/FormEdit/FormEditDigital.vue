<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <el-form-item :label="$t('tables.digital.edit.champs3')" prop="name">
                <el-input v-model="tempData.name" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs4')" prop="name1">
                <el-input v-model="tempData.name1" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs5')" prop="tag">
                <el-input v-model="tempData.tag" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs6')" prop="address">
                <el-input v-model="tempData.address" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs7')" prop="idEquip">
                <el-input v-model="tempData.idEquip" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs8')" prop="idTank">
                <el-input v-model="tempData.idTank" />
            </el-form-item>
            <el-form-item :label="$t('tables.digital.edit.champs9')" prop="indexCreation">
                <el-input v-model="tempData.indexCreation" />
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
        name: 'EditDigital',
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
