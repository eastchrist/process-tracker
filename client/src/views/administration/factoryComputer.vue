<template>
    <div class="factoryComputer-container">
        <TableAdminComputer></TableAdminComputer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import TableAdminComputer from '@/components/Tables/Admin/TableAdminComputer.vue'

    @Component({
        name: 'factoryComputer',
        components: {
            TableAdminComputer,
        },
    })
    export default class extends Vue {}
</script>

