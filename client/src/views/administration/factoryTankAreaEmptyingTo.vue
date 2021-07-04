<template>
    <div class="factoryTankArea-container">
        <TableAdminTankAreaDefEmptying></TableAdminTankAreaDefEmptying>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankAreaDefEmptying from '@/components/Tables/Admin/TableAdminTankAreaDefEmptying.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankAreaDefEmptying,
        },
    })
    export default class extends Vue {}
</script>

