<template>
    <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">{{ $t('tables.generique.button.button10') }}</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { exportJson2Excel } from '@/utils/excel'
    import { formatJson } from '@/utils'
    import { defaultEmptyExcelHeater } from '@/api/passwords'

    @Component({
        name: 'ExportToExcel',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: 'Factory' }) private TableName!: string
        @Prop({ default: [] }) private TableList!: []
        @Prop({ default: defaultEmptyExcelHeater }) private defaultExcelHeater!: []

        private downloadLoading = false
        
        private handleDownload() {
            this.downloadLoading = true
            const TableName = this.$props.TableName
            const data = formatJson(this.$props.defaultExcelHeater, this.$props.TableList)
            exportJson2Excel(this.$props.defaultExcelHeater, data, TableName)
            this.downloadLoading = false
        }
    }

</script>
