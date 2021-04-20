<template>
    <div class="factoryArea-container">
        <h2>{{ $t('screen.factoryArea') }}</h2>
        <TableAdminArea></TableAdminArea>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import TableAdminArea from '@/components/Tables/TableAdminArea.vue'

    @Component({
        name: 'factoryArea',
        components: {
            TableAdminArea,
        },
    })
    export default class  extends Vue {}
</script>

