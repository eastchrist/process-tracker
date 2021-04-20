<template>
    <div class="factoryCartoProject-container">
        <h2>{{ $t('screen.factoryCartoProject') }}</h2>
        <TableAdminProject></TableAdminProject>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminProject from '@/components/Tables/TableAdminProject.vue'

    @Component({
        name: 'factoryCartoProject',
        components: {
            TableAdminProject,
        },
    })
    export default class extends Vue {}
</script>

