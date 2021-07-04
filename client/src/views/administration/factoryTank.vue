<template>
    <div class="factoryTank-container">
        <TableAdminTank></TableAdminTank>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminTank from '@/components/Tables/Admin/TableAdminTank.vue'

    @Component({
        name: 'factoryTank',
        components: {
            TableAdminTank,
        },
    })
    export default class extends Vue {}
</script>

