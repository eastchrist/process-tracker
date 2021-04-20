<template>
    <div class="factoryComputer-container">
        <h2>{{ $t('screen.factoryComputer') }}</h2>
        <TableAdminComputer></TableAdminComputer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminComputer from '@/components/Tables/TableAdminComputer.vue'

    @Component({
        name: 'factoryComputer',
        components: {
            TableAdminComputer,
        },
    })
    export default class extends Vue {}
</script>

