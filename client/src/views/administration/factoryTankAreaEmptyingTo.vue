<template>
    <div class="factoryTankArea-container">
        <h2>{{ $t('screen.factoryTankAreaDefEmptying') }}</h2>
        <TableAdminTankAreaDefEmptying></TableAdminTankAreaDefEmptying>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankAreaDefEmptying from '@/components/Tables/TableAdminTankAreaDefEmptying.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankAreaDefEmptying,
        },
    })
    export default class extends Vue {}
</script>

