<template>
    <div class="factoryPlc-container">
        <h2>{{ $t('screen.factoryPlc') }}</h2>
        <TableAdminServer></TableAdminServer>
        <TableAdminPlc></TableAdminPlc>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminServer from '@/components/Tables/TableAdminServer.vue'
    import TableAdminPlc from '@/components/Tables/TableAdminPlc.vue'

    @Component({
        name: 'factoryPlc',
        components: {
            TableAdminServer,
            TableAdminPlc,
        },
    })
    export default class extends Vue {}
</script>

