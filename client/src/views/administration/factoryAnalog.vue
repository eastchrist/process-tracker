<template>
    <div class="factoryAnalog-container">
        <h2>{{ $t('screen.factoryAnalog') }}</h2>
        <TableAdminAnalog></TableAdminAnalog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminAnalog from '@/components/Tables/TableAdminAnalog.vue'

    @Component({
        name: 'factoryAnalog',
        components: {
            TableAdminAnalog,
        },
    })
    export default class extends Vue {}
</script>

