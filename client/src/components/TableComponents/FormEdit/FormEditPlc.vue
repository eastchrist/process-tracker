<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <el-form-item :label="$t('tables.plc.edit.champs4')" prop="name">
                <el-input v-model="tempData.name" />
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs5')" prop="name1">
                <el-input v-model="tempData.name1" />
            </el-form-item>

            <el-form-item :label="$t('tables.plc.edit.champs6')" prop="idArea">
                <el-select v-model="tempData.idServer" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in TypeOptionServer" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs7')" prop="idArea">
                <el-select v-model="tempData.idArea" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in TypeOptionArea" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs8')" prop="brand">
                <el-input v-model="tempData.brand" />
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs9')" prop="connection">
                <el-input v-model="tempData.connection" />
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs10')" prop="ip">
                <el-input v-model="tempData.ip" />
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs11')" prop="slot">
                <el-input v-model="tempData.slot" />
            </el-form-item>
            <el-form-item :label="$t('tables.plc.edit.champs12')" prop="rack">
                <el-input v-model="tempData.rack" />
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
        name: 'EditPlc',
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
        @Prop({ default: { } }) private TypeOptionArea!: any
        @Prop({ default: { } }) private TypeOptionServer!: any
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
