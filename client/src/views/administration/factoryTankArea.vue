<template>
    <div class="factoryTankArea-container">
        <TableAdminTankArea></TableAdminTankArea>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankArea from '@/components/Tables/Admin/TableAdminTankArea.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankArea,
        },
    })
    export default class extends Vue {}
</script>

