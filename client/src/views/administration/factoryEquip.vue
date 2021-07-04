<template>
    <div class="factoryEquip-container">
        <TableAdminEquip></TableAdminEquip>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminEquip from '@/components/Tables/Admin/TableAdminEquip.vue'

    @Component({
        name: 'factoryEquip',
        components: {
            TableAdminEquip,
        },
    })
    export default class extends Vue {}
</script>

