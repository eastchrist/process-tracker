<template>
    <div class="factoryTankArea-container">
        <h2>{{ $t('screen.factoryTankAreaDefFilling') }}</h2>
        <TableAdminTankAreaDefFilling></TableAdminTankAreaDefFilling>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankAreaDefFilling from '@/components/Tables/TableAdminTankAreaDefFilling.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankAreaDefFilling,
        },
    })
    export default class extends Vue {}
</script>

