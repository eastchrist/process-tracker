<template>
    <div class="factoryTankArea-container">
        <TableAdminTankAreaDefFilling></TableAdminTankAreaDefFilling>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankAreaDefFilling from '@/components/Tables/Admin/TableAdminTankAreaDefFilling.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankAreaDefFilling,
        },
    })
    export default class extends Vue {}
</script>

