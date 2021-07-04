<template>
    <el-dialog :title="title" :visible.sync="dialogFormErrorVisible" @open="beforeOpen" :before-close="beforeClose">
        <el-input type="textarea" :rows="2" v-model="tempError"></el-input>
        <div slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">{{ $t('tables.generique.button.button5') }}</el-button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { Form } from 'element-ui'

    @Component({
        name: 'FormUpdateNodeError',
        components: {
        }
    })
    export default class extends Vue {
        //@Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private title!: string
        @Prop({ default: false }) private dialogFormErrorVisible!: boolean
        @Prop({ default: { } }) private tempError!: any

        beforeOpen() {
            console.log("beforeOpen")
        }

        beforeClose( ) {
            this.$emit('EditFormCancel')
        }
        handleCancel( ) {
            this.$emit('EditFormCancel')
        }
    }

</script>
