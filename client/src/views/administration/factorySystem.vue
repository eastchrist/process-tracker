<template>
    <div class="factorySystem-container">
        <h2>{{ $t('screen.factorySystem') }}</h2>
        <TableAdminMeasureType></TableAdminMeasureType>
        <TableAdminProduct></TableAdminProduct>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminMeasureType from '@/components/Tables/TableAdminMeasureType.vue'
    import TableAdminProduct from '@/components/Tables/TableAdminProduct.vue'

    @Component({
        name: 'factorySystem',
        components: {
            TableAdminMeasureType,
            TableAdminProduct,
        },
    })
    export default class FactorySystem extends Vue {}
</script>

