<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
            <!-- v-if="textMap[dialogStatus]!=='Create'" -->
            <el-form-item :label="$t('tables.factory.edit.champs4')" prop="name">
                <el-input v-model="tempData.name" />
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs5')" prop="name1">
                <el-input v-model="tempData.name1" />
            </el-form-item>

            <el-form-item :label="$t('tables.factory.edit.champs6')" prop="langue">
                <el-select v-model="tempData.langue" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type2Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>

            <el-form-item :label="$t('tables.factory.edit.champs7')" prop="address">
                <el-input v-model="tempData.address" />
            </el-form-item>

            <el-form-item :label="$t('tables.factory.edit.champs8')" prop="logoClient">
                <el-input v-model="tempData.logoClient" />
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs9')" prop="logoContractor">
                <el-input v-model="tempData.logoContractor" />
            </el-form-item>

            <el-form-item :label="$t('tables.factory.edit.champs10')" prop="currency">
                <el-input v-model="tempData.currency" />
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs11')" prop="currencyEuro">
                <el-input v-model="tempData.currencyEuro" />
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs12')" prop="isCartography">
                <el-select v-model="tempData.isCartography" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs13')" prop="isOptimisation">
                <el-select v-model="tempData.isOptimisation" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.factory.edit.champs14')" prop="isTraceability">
                <el-select v-model="tempData.isTraceability" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
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
        name: 'EditFactory',
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
