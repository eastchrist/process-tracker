<template>
    <div class="factoryDigital-container">
        <h2>{{ $t('screen.factoryDigital') }}</h2>
        <TableAdminDigital></TableAdminDigital>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminDigital from '@/components/Tables/TableAdminDigital.vue'

    @Component({
        name: 'factoryDigital',
        components: {
            TableAdminDigital,
        },
    })
    export default class extends Vue {}
</script>

