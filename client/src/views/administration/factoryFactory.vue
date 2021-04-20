<template>
    <div class="factoryFactory-container">
        <h2>{{ $t('screen.factoryFactory') }}</h2>
        <TableAdminFactory></TableAdminFactory>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminFactory from '@/components/Tables/TableAdminFactory.vue'

    @Component({
        name: 'factoryFactory',
        components: {
            TableAdminFactory,
        },
    })
    export default class  extends Vue {}
</script>

