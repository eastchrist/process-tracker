<template>
    <div class="factoryCartoMeasure-container">
        <h2>{{ $t('screen.factoryCartoMeasure') }}</h2>

        <TableAdminMeasure></TableAdminMeasure>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminMeasure from '@/components/Tables/TableAdminMeasure.vue'

    @Component({
        name: 'factoryCartoMeasure',
        components: {
            TableAdminMeasure,
        },
    })
    export default class extends Vue {}
</script>

