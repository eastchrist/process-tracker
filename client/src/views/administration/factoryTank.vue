<template>
    <div class="factoryTank-container">
        <h2>{{ $t('screen.factoryTank') }}</h2>
        <TableAdminTank></TableAdminTank>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminTank from '@/components/Tables/TableAdminTank.vue'

    @Component({
        name: 'factoryTank',
        components: {
            TableAdminTank,
        },
    })
    export default class extends Vue {}
</script>

