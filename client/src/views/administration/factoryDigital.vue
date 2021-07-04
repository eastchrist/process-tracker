<template>
    <div class="factoryDigital-container">
        <TableAdminDigital></TableAdminDigital>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminDigital from '@/components/Tables/Admin/TableAdminDigital.vue'

    @Component({
        name: 'factoryDigital',
        components: {
            TableAdminDigital,
        },
    })
    export default class extends Vue {}
</script>

