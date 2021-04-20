<template>
    <div class="factoryEquip-container">
        <h2>{{ $t('screen.factoryEquip') }}</h2>
        <TableAdminEquip></TableAdminEquip>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminEquip from '@/components/Tables/TableAdminEquip.vue'

    @Component({
        name: 'factoryEquip',
        components: {
            TableAdminEquip,
        },
    })
    export default class extends Vue {}
</script>

