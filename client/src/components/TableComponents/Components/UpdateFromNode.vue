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

        //private errorList = [ 'Erreur1', '\n', 'Erreur2\n', 'Erreur3\n']
        private errorList = ""

        private async handleUpdatingListFromNode() {
            const TableName = this.$props.TableName
            const { data } = await getAllNodes ()
            const updatedList: { errorList: string, updatedList: {} } = await updateDataBaseFromNodes( data, TableName)
            if (updatedList.errorList !=="") {
                this.errorList = updatedList.errorList
                this.$emit('UpdateFromNodeError', this.errorList)
            } else {
                this.$emit('UpdateFromNode', updatedList)
            }
        }
    }

</script>
