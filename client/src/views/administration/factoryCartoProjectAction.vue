<template>
    <div class="factoryCartoProjectAction-container">
        <TableAdminProjectAction></TableAdminProjectAction>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminProjectAction from '@/components/Tables/Admin/TableAdminProjectAction.vue'

    @Component({
        name: 'factoryCartoProjectAction',
        components: {
            TableAdminProjectAction,
        },
    })
    export default class extends Vue {}
</script>

