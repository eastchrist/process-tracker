<template>
    <div class="factoryFactory-container">
        <TableAdminFactory></TableAdminFactory>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminFactory from '@/components/Tables/Admin/TableAdminFactory.vue'

    @Component({
        name: 'factoryFactory',
        components: {
            TableAdminFactory,
        },
    })
    export default class  extends Vue {}
</script>

