<template>
    <div class="factoryCartoDataProject-container">
        <h2>{{ $t('screen.factoryCartoDataProject') }}</h2>
        <TableAdminDataProject></TableAdminDataProject>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminDataProject from '@/components/Tables/TableAdminDataProject.vue'

    @Component({
        name: 'factoryCartoDataProject',
        components: {
            TableAdminDataProject,
        },
    })
    export default class extends Vue {}
</script>

