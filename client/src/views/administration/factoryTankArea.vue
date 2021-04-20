<template>
    <div class="factoryTankArea-container">
        <h2>{{ $t('screen.factoryTankArea') }}</h2>
        <TableAdminTankArea></TableAdminTankArea>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminTankArea from '@/components/Tables/TableAdminTankArea.vue'

    @Component({
        name: 'factoryTankArea',
        components: {
            TableAdminTankArea,
        },
    })
    export default class extends Vue {}
</script>

