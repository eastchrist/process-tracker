<template>
    <div class="factorySystem-container">
        <TableAdminMeasureType></TableAdminMeasureType>
        <TableAdminProjectType></TableAdminProjectType>
        <TableAdminProjectStatus></TableAdminProjectStatus>
        <TableAdminProduct></TableAdminProduct>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminMeasureType from '@/components/Tables/Admin/TableAdminMeasureType.vue'
    import TableAdminProjectType from '@/components/Tables/Admin/TableAdminProjectType.vue'
    import TableAdminProjectStatus from '@/components/Tables/Admin/TableAdminProjectStatus.vue'
    import TableAdminProduct from '@/components/Tables/Admin/TableAdminProduct.vue'

    @Component({
        name: 'factorySystem',
        components: {
            TableAdminMeasureType,
            TableAdminProjectType,
            TableAdminProjectStatus,
            TableAdminProduct,
        },
    })
    export default class FactorySystem extends Vue {}
</script>

