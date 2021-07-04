<template>
    <div class="factoryPlc-container">
        <TableAdminServer></TableAdminServer>
        <TableAdminPlc></TableAdminPlc>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminServer from '@/components/Tables/Admin/TableAdminServer.vue'
    import TableAdminPlc from '@/components/Tables/Admin/TableAdminPlc.vue'

    @Component({
        name: 'factoryPlc',
        components: {
            TableAdminServer,
            TableAdminPlc,
        },
    })
    export default class extends Vue {}
</script>

