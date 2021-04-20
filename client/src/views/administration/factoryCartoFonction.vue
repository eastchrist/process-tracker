<template>
    <div class="factoryCartoFonction-container">
        <h2>{{ $t('screen.factoryCartoFonction') }}</h2>
        <TableAdminFunction></TableAdminFunction>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminFunction from '@/components/Tables/TableAdminFonction.vue'
    @Component({
        name: 'factoryCartoFonction',
        components: {
            TableAdminFunction,
        },
    })
    export default class extends Vue {}
</script>

