<template>
    <div class="factoryAnalog-container">
        <TableAdminAnalog></TableAdminAnalog>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    import TableAdminAnalog from '@/components/Tables/Admin/TableAdminAnalog.vue'

    @Component({
        name: 'factoryAnalog',
        components: {
            TableAdminAnalog,
        },
    })
    export default class extends Vue {}
</script>

