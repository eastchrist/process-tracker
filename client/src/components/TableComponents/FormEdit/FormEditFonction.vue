<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <el-form-item :label="$t('tables.fonction.edit.champs3')" prop="name">
                <el-input v-model="tempData.name" />
            </el-form-item>
            <el-form-item :label="$t('tables.fonction.edit.champs4')" prop="idType">
                <el-select v-model="tempData.idType" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>

            <el-form-item :label="$t('tables.fonction.edit.champs5')" prop="idAreaSource">
                <el-select v-model="tempData.idAreaSource" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type6Options" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>
            </el-form-item>

            <el-form-item :label="$t('tables.fonction.edit.champs6')" prop="idAreaDest">
                <el-select v-model="tempData.idAreaDest" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type7Options" :key="item.id" :label="item.name1" :value="item.id"/>
                </el-select>
            </el-form-item>

            <el-form-item :label="$t('tables.fonction.edit.champs7')" prop="freqCheck">
                <el-input v-model="tempData.freqCheck" />
            </el-form-item>
            <el-form-item :label="$t('tables.fonction.edit.champs8')" prop="freqDelay">
                <el-input v-model="tempData.freqDelay" />
            </el-form-item>
            <el-form-item :label="$t('tables.fonction.edit.champs9')" prop="maxLosse">
                <el-input v-model="tempData.maxLosse" />
            </el-form-item>

            <el-form-item :label="$t('tables.fonction.edit.champs10')" >
                <el-input v-model="tempData.picture1" />
            </el-form-item>
            <el-form-item :label="$t('tables.fonction.edit.champs11')" >
                <el-input v-model="tempData.picture2" />
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
