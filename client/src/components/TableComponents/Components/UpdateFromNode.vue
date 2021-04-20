<template>
    <el-button class="filter-item" type="primary" icon="el-icon-download" @click="handleUpdatingListFromNode">{{ $t('tables.generique.button.button9') }}</el-button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
    import { getAllNodes } from '@/api/nodes'
    import { updateDataBaseFromNodes } from '@/utils/node'
    @Component({
        name: 'UpdateFromNode',
        components: {
        }
    })
    export default class extends Vue {
        @Prop({ default: '' }) private className!: string
        @Prop({ default: '' }) private TableName!: string
        @Prop({ default: [] }) private orderCreation!: any

        private async handleUpdatingListFromNode() {
            const TableName = this.$props.TableName
            const { data } = await getAllNodes ()
            const updatedList = await updateDataBaseFromNodes( data, this.orderCreation, TableName)
            const updatedListData = updatedList
            this.$emit('UpdateFromNode', updatedList)
        }
    }

</script>
