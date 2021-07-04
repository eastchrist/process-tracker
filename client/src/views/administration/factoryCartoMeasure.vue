<template>
    <div class="factoryCartoMeasure-container">
        <TableAdminMeasure></TableAdminMeasure>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminMeasure from '@/components/Tables/Admin/TableAdminMeasure.vue'

    @Component({
        name: 'factoryCartoMeasure',
        components: {
            TableAdminMeasure,
        },
    })
    export default class extends Vue {}
</script>

