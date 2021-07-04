<template>
    <el-dialog :class="className" :title="title" :visible.sync="dialogFormVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-form ref="dataForm" :rules="rules" :model="tempData" label-position="left" label-width="200px" style="width: 400px; margin-left:50px;">
            <el-form-item :label="$t('tables.password.edit.champs3')" prop="username">
                <el-input v-model="tempData.username" />
            </el-form-item>
            <el-form-item :label="$t('tables.password.edit.champs4')" prop="email">
                <el-input v-model="tempData.email" />
            </el-form-item>

            <el-form-item :label="$t('tables.password.edit.champs5')" prop="idFactory">
                <el-select v-model="tempData.idFactory" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type2Options" :key="item.id" :label="item.name" :value="item.id"/>
                </el-select>
            </el-form-item>

            <el-form-item :label="$t('tables.password.edit.champs6')" prop="isAdmin">
                <el-select v-model="tempData.isAdmin" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.password.edit.champs7')" prop="isManager">
                <el-select v-model="tempData.isManager" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.password.edit.champs8')" prop="isOperator">
                <el-select v-model="tempData.isOperator" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.password.edit.champs9')" prop="isVisitor">
                <el-select v-model="tempData.isVisitor" class="filter-item" placeholder="Please select">
                    <el-option v-for="item in Type1Options" :key="item.key" :label="item.displayName" :value="item.key"/>
                </el-select>
            </el-form-item>
            <el-form-item :label="$t('tables.password.edit.champs10')" prop="isActif">
                <el-select v-model="tempData.isActif" class="filter-item" placeholder="Please select">
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
        name: 'EditPassword',
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
                    //const userData = this.tempData
                    //const { data } = await updateDBUser(userData.id, { username: userData.username, email: userData.email, position: 999999,idFactory: userData.idFactory, isAdmin: userData.isAdmin, isManager: userData.isManager, isOperator: userData.isOperator, isVisitor: userData.isVisitor, isActif: userData.isActif})
                    //console.log(data[0])
                    //this.list.unshift(data[0])
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
